import { shallowMount } from '@vue/test-utils';
import AddProject from '../AddProject.vue';

describe('AddProject.vue', () => {
    let wrapper;
    let mockRouterPush;
    let mockFetch;

    beforeEach(() => {
        // Mock router push
        mockRouterPush = jest.fn();

        // Mock fetch API
        mockFetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({}),
            })
        );
        global.fetch = mockFetch;

        // Mount the component
        wrapper = shallowMount(AddProject, {
            mocks: {
                $router: {
                    push: mockRouterPush,
                },
            },
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders the form correctly', () => {
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('input[type="text"]').exists()).toBe(true);
        expect(wrapper.find('textarea').exists()).toBe(true);
        expect(wrapper.find('button').text()).toBe('Add Project');
    });

    it('binds input values to data properties', async () => {
        const titleInput = wrapper.find('input[type="text"]');
        const detailsTextarea = wrapper.find('textarea');

        await titleInput.setValue('Test Project');
        await detailsTextarea.setValue('Test Details');

        expect(wrapper.vm.title).toBe('Test Project');
        expect(wrapper.vm.details).toBe('Test Details');
    });

    it('calls handleSubmit and sends API request on form submission', async () => {
        wrapper.vm.$data.title = 'Test Project';
        wrapper.vm.$data.details = 'Test Details';

        await wrapper.find('form').trigger('submit.prevent');

        expect(mockFetch).toHaveBeenCalledWith('http://localhost:3001/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'Test Project',
                details: 'Test Details',
                complete: false,
            }),
        });
    });

    it('navigates to the home page after successful submission', async () => {
        wrapper.setData({
            title: 'Test Project',
            details: 'Test Details',
        });

        await wrapper.find('form').trigger('submit.prevent');

        expect(mockRouterPush).toHaveBeenCalledWith('/');
    });

    it('handles API errors gracefully', async () => {
        mockFetch.mockImplementationOnce(() =>
            Promise.reject(new Error('API Error'))
        );

        wrapper.setData({
            title: 'Test Project',
            details: 'Test Details',
        });

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

        await wrapper.find('form').trigger('submit.prevent');

        expect(consoleSpy).toHaveBeenCalledWith('API Error');

        consoleSpy.mockRestore();
    });
});