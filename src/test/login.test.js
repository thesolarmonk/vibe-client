import Profile from '../components/Profile.vue';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import Login from '../views/Login.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Login', () => {
    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {
        expect(typeof Login.data).toBe('function');
        const defaultData = Login.data();
        expect(defaultData.spotifyAuthUrl).toBeDefined();
    });

    // Inspect the component instance on mount
    it('Login button clicks are recognized', () => {
        const mockMethods = {
            login: jest.fn()
        };
        const wrapper = mount(Login, { methods: mockMethods });
        wrapper.find('button').trigger('click');
        expect(mockMethods.login).toHaveBeenCalled();
    });

    // Mount an instance and inspect the render output
    it('register correct methods', () => {
        expect(typeof Login.methods.login).toBe('function');
    });
});
