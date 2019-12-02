import App from '../App.vue';
import Player from '../components/Player.vue';

describe('App', () => {
    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct components', () => {
        expect(App.components.Player).toBe(Player);
    });

    // Inspect the component instance on mount
    it('sets the correct computed methods', () => {
        expect(typeof App.computed.isAuthenticated).toBe('function');
        expect(typeof App.computed.isPlaying).toBe('function');
        expect(typeof App.computed.currentSentiment).toBe('function');
    });

    it('sets the correct methods', () => {
        expect(typeof App.methods.play).toBe('function');
        expect(typeof App.methods.pause).toBe('function');
    });
});
