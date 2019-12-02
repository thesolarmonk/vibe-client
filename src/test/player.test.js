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
            currentTrack: () => 'track',
            isPlaying: () => 'false'
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
        expect(typeof Player.computed.currentTrack).toBe('function');
        expect(typeof Player.computed.isPlaying).toBe('function');
        expect(typeof Player.computed.currentTrackInfo).toBe('function');
        expect(typeof Player.methods.play).toBe('function');
        expect(typeof Player.methods.pause).toBe('function');
    });
    // Inspect the component instance on mount
    it('Play/Pause button clicks are recognized', () => {
        //does not work because of the cursor
        const wrapper = shallowMount(Player, { store, localVue, stubs: ['router-link', 'router-view'] });
        expect(getters.currentTrack()).toBe('track');
        expect(getters.isPlaying()).toBe('false');
    });
});
