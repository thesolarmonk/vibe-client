import App from '../App.vue';
import Player from '../components/Player.vue';

describe('App', () => {
    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct components', () => {
        expect(App.components.Player).toBe(Player);
    });

    // Inspect the component instance on mount
    it('sets the correct methods', () => {
        expect(typeof App.computed.isAuthenticated).toBe('function');
    });
});
