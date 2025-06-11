import { shallowMount } from '@vue/test-utils';
import CompletedProjects from '@/components/CompletedProjects.vue';
import SingleProject from '@/components/SingleProject.vue';
describe('CompletedProjects.vue', () => {
let wrapper;

beforeEach(() => {
wrapper = shallowMount(CompletedProjects, {
stubs: {
SingleProject: true
}
});
});

it('renders Completed Projects and Ongoing Projects links', () => {
expect(wrapper.find('router-link[to="/completed"]').exists()).toBe(true);
expect(wrapper.find('router-link[to="/ongoing"]').exists()).toBe(true);
});

    it('renders SingleProject components when projects are available', async () => {
        wrapper.setData({ projects: [{ id: 1, complete: true }, { id: 2, complete: true }] });
        await wrapper.vm.$nextTick();
        expect(wrapper.findAllComponents(SingleProject).length).toBe(2);
    });

    it('renders SingleProject components when projects are available', async () => {
        wrapper.setData({ projects: [{ id: 1, complete: true }, { id: 2, complete: true }] });
        await wrapper.vm.$nextTick();
        expect(wrapper.findAllComponents(SingleProject).length).toBe(2);
    });

    it('displays message when no completed projects are available', async () => {
        wrapper.setData({ projects: [] });
        await wrapper.vm.$nextTick();
        expect(wrapper.find('p').text()).toBe('No completed projects available.');
    });

    it('handles delete project correctly', async () => {
        wrapper.setData({ projects: [{ id: 1, complete: true }, { id: 2, complete: true }] });
        wrapper.vm.handleDelete(1);
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.projects.length).toBe(1);
    });
    it('toggles project completion status correctly', async () => {
        wrapper.setData({ projects: [{ id: 1, complete: true }] });
        wrapper.vm.handleComplete(1);
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.projects[0].complete).toBe(false);
    });

});



jest.mock('vue-router', () => ({
    RouterLink: {
        name: 'RouterLink',
        render: h => h('div')
    }
}))

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([])
    })
)


