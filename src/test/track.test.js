import TrackItem from '../components/Track.vue';

describe('Track', () => {
    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {
        expect(typeof TrackItem.data).toBe('function');
        const defaultData = TrackItem.data();
        expect(defaultData.added).toBeFalsy();
    });

    // Inspect the methods defined in component
    it('register correct methods', () => {
        expect(typeof TrackItem.computed.albumArtUrl).toBe('function');
        expect(typeof TrackItem.computed.trackName).toBe('function');
        expect(typeof TrackItem.computed.trackArtist).toBe('function');
        expect(typeof TrackItem.computed.trackId).toBe('function');
        expect(typeof TrackItem.methods.postTrack).toBe('function');
        expect(typeof TrackItem.methods.playFromFeed).toBe('function');
    });
});
