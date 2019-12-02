import User from '../components/User.vue';

describe('User', () => {
    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {
        expect(typeof User.data).toBe('function');
        const defaultData = User.data();
        expect(defaultData.added).toBeFalsy();
    });

    // Inspect the methods defined in component
    it('register correct methods', () => {
        expect(typeof User.computed.profilePicUrl).toBe('function');
        expect(typeof User.computed.userName).toBe('function');
        expect(typeof User.computed.userId).toBe('function');
        expect(typeof User.methods.followUser).toBe('function');
    });
});
