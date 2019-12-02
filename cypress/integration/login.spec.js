//Login Page Testing
describe('Test login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });
    it('check buttons', () => {
        cy.get('.title').contains('Login with Spotify');
    });
});
