import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Player from '../components/Player.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Player', () => {
    let actions;
    let getters;
    let store;

    beforeEach(() => {
        actions = {
            play: jest.fn(),
            pause: jest.fn()
        };
        getters = {
            getAccessToken: () => 'token',
            getPlayerId: () => 'id'
        };
        store = new Vuex.Store({
            actions,
            getters
        });
    });

    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct methods', () => {
        expect(typeof Player.mounted).toBe('function');
        expect(typeof Player.computed.getAccessToken).toBe('function');
        expect(typeof Player.computed.getPlayerId).toBe('function');
        expect(typeof Player.methods.play).toBe('function');
        expect(typeof Player.methods.pause).toBe('function');
    });

    // Inspect the component instance on mount
    it('Play/Pause button clicks are recognized', () => {
        const wrapper = shallowMount(Player, { store, localVue });
        wrapper.find('button').trigger('click');
        expect(getters.getAccessToken()).toBe('token');
        expect(getters.getPlayerId()).toBe('id');
        expect(actions.play).toHaveBeenCalled();
    });
});
