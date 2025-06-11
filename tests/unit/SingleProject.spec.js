import SingleProject from "@/components/SingleProject.vue";
import { shallowMount } from "@vue/test-utils";


describe('SingleProject.vue', () => {
    let wrapper;
    const project = { id: 1, title: 'Test Project', details: 'Project details', complete: false }


    beforeEach(() => {
        wrapper = shallowMount(SingleProject, {
            propsData: { project }
        })


    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders project title', () => {
        expect(wrapper.find('h3').text()).toBe('Test Project')
    })

    it('toggles showdetails when title is clicked', async () => {
        expect(wrapper.vm.showdetails).toBe(false)
        await wrapper.find('h3').trigger('click')
        expect(wrapper.vm.showdetails).toBe(true)
    })


    it('displays project details when showdetails is true', async () => {
        wrapper.setData({ showdetails: true })
        await wrapper.vm.$nextTick()
        expect(wrapper.find('.details').text()).toContain('Project details')
    })

})