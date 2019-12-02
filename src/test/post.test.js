import Post from '../components/Post.vue';
import TrackItem from '../components/Track.vue';

describe('Post', () => {
    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {
        expect(typeof Post.data).toBe('function');
    });

    it('sets the correct components', () => {
        expect(Post.components.TrackItem).toBe(TrackItem);
    });

    // Inspect the methods defined in component
    it('register correct methods', () => {
        expect(typeof Post.computed.user_name).toBe('function');
        expect(typeof Post.computed.sentiment_score).toBe('function');
        expect(typeof Post.computed.date_posted).toBe('function');
    });
});
