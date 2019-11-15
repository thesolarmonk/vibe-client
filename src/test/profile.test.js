//import Vue from 'vue';
import Profile from '../components/Profile.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Profile', () => {
    // Inspect the raw component options
    // it('has a created hook', () => {
    //     expect(typeof Profile.created).toBe('function');
    // });

    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {
        expect(typeof Profile.data).toBe('function');
        // const defaultData = MyComponent.data()
        // expect(defaultData.message).toBe('hello!')
    });

    // Inspect the component instance on mount
    it('correctly sets the message when created', () => {
        // const vm = new Vue(MyComponent).$mount()
        // expect(vm.message).toBe('bye!')
    });

    // Mount an instance and inspect the render output
    it('renders the correct message', () => {
        // const Constructor = Vue.extend(MyComponent)
        // const vm = new Constructor().$mount()
        // expect(vm.$el.textContent).toBe('bye!')
    });
});
