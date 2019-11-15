import Vue from 'vue';
import Vuetify from 'vuetify';
import Profile from '../components/Profile.vue';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';

Vue.use(Vuetify);
// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Profile', () => {
    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {
        expect(typeof Profile.data).toBe('function');
        const defaultData = Profile.data();
        expect(defaultData.drawer).toBe(true);
        expect(defaultData.items.length).toBe(3);
        expect(defaultData.mini).toBe(true);
    });

    // Inspect the component instance on mount
    it('Nav bar button clicks are recognized', () => {
        const spy = sinon.spy();
        const wrapper = mount(Profile, {
            Vue,
            propsData: {
                callMe: spy
            }
        });
        wrapper.find('v-btn').trigger('click');
        spy.should.have.been.calledWith('flip');
    });

    // Mount an instance and inspect the render output
    it('register correct methods', () => {
        expect(typeof Profile.methods.flipMini).toBe('function');
    });
});
