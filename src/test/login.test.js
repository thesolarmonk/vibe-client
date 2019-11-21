import { mount } from '@vue/test-utils';
import Login from '../views/Login.vue';

describe('Login', () => {
    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {
        expect(typeof Login.data).toBe('function');
        const defaultData = Login.data();
        expect(defaultData.spotifyAuthUrl).toBeDefined();
    });

    // Check if buttons are responsive
    it('Login button clicks are recognized', () => {
        const mockMethods = {
            login: jest.fn()
        };
        const wrapper = mount(Login, { methods: mockMethods });
        wrapper.find('button').trigger('click');
        expect(mockMethods.login).toHaveBeenCalled();
    });

    // Inspect the methods defined in component
    it('register correct methods', () => {
        expect(typeof Login.methods.login).toBe('function');
    });
});
