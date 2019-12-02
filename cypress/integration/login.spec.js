//Login Page Testing
describe('Test login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });

    it('check title', () => {
        cy.get('.login--logo').contains('VIBE');
    });

    it('check buttons', () => {
        cy.get('.title').contains('Login with Spotify');
        //button is clickable
        cy.get('.title').click();
    });
});

describe('Test feed Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/feed');
    });

    it('check user name on post', () => {
        //check post user name
        cy.get('.post--list')
            .children()
            .get('.post--user_name')
            .first()
            .should('have.text', 'Shared by Nikhil');
    });

    it('check time display on post', () => {
        //check post time
        cy.get('.post--list')
            .children()
            .first()
            .get('.post--time')
            .contains('days ago');
    });

    it('check time display on post', () => {
        //check album picture display in post
        cy.get('.post--list')
            .children()
            .first()
            .get('.post--track')
            .children()
            .get('.card-image')
            .children()
            .children()
            .first()
            .should('be.visible');
    });

    it('check button on post', () => {
        //check album picture display in post
        cy.get('.post--list')
            .children()
            .first()
            .get('.post--track')
            .children()
            .get('.card-content')
            .children()
            .children()
            .get('.button')
            .should('be.visible');
    });
});

describe('Test profile Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/profile');
    });

    it('check user image', () => {
        cy.get('.profile--user-info-picture').should('be.visible');
    });

    it('check user info', () => {
        cy.get('.profile--user-info-stats')
            .children()
            .should('have.length', '3');

        cy.get('.profile--user-info-stats')
            .children()
            .get('.title')
            .eq(1)
            .contains('100');

        cy.get('.profile--user-info-stats')
            .children()
            .get('.title')
            .eq(2)
            .contains('10');

        cy.get('.profile--user-info-stats')
            .children()
            .get('.title')
            .eq(3)
            .contains('Mood');

        cy.get('.profile--user-info-stats')
            .children()
            .get('.subtitle')
            .eq(0)
            .contains('Friends');

        cy.get('.profile--user-info-stats')
            .children()
            .get('.subtitle')
            .eq(1)
            .contains('Posts');

        cy.get('.profile--user-info-stats')
            .children()
            .get('.subtitle')
            .eq(2)
            .contains('Happy');
    });

    it('check charts', () => {
        //cy.get('.profile--graphs').should('not.be.empty');
    });

    it('check post list', () => {
        cy.get('.profile--posts-list')
            .children()
            .should('not.be.empty');
    });
});

describe('Test Add Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/add');
    });

    it('check input bar', () => {
        cy.get('.search-bar--input')
            .should('have.value', '')
            .type('abc')
            .should('have.value', 'abc');
    });

    it('check search result', () => {
        cy.get('.results-title').should('have.text', ' Recently Played Tracks ');
    });
});
