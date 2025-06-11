import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import NavbarComp from '@/components/NavbarComp.vue'
describe('NavbarComp.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(NavbarComp, {
            stubs:{

            }
        })
    })
   
    it('renders Completed Projects and Ongoing Projects links', () => {
        expect(wrapper.find('router-link[to="/"]').exists()).toBe(true);
        expect(wrapper.find('router-link[to="/add"]').exists()).toBe(true);
    });
})
jest.mock('vue-router', () => ({
    RouterLink: {
        name: 'RouterLink',
        render: h => h('div')
    }
}))