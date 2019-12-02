import Profile from '../views/Profile.vue';
import TrackItem from '../components/Track.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Profile', () => {
    // Evaluate the results of functions in
    // the raw component options

    it('sets the correct components', () => {
        expect(Profile.components.TrackItem).toBe(TrackItem);
    });

    it('sets the correct default data', () => {
        expect(typeof Profile.data).toBe('function');
        expect(typeof Profile.mounted).toBe('function');
        expect(typeof Profile.computed.getUserId).toBe('function');
        expect(typeof Profile.computed.getUserName).toBe('function');
        expect(typeof Profile.computed.getProfilePic).toBe('function');
        expect(typeof Profile.computed.accessToken).toBe('function');
    });
});
