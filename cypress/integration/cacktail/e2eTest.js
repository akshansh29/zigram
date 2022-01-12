describe('e2e test case ', () => {

    beforeEach(() => {
        cy.visit('/');
    })
    it('visit home page', () => {
        cy.get('.header').first().should('have.text', 'Cocktail')
    })

    it('check cocktail cards', () => {
        cy.get('.drink-card').should('be.visible');
    })

    it('select drink filter', () => {
        cy.get('[id="filter"]').select('Cocktail');
        cy.wait(2000);
        cy.get('.drink-card').should('be.visible');
        cy.get('[id="filter"]').select('Alcoholic');
        cy.wait(2000);
        cy.get('.drink-card').should('be.visible');
        cy.get('[id="filter"]').select('Non Alcoholic');
        cy.wait(2000);
        cy.get('.drink-card').should('be.visible');
        cy.get('.drink-card').first().click();
    })

    it('search by name', () => {
        cy.get('[id="searchBy"]').select('Name');
        cy.get('[id="search"]').type('margarita').should('have.value', 'margarita');
        cy.get('button').contains('Search').click();
        cy.wait(2000);
        cy.get('.drink-card').should('be.visible');
        cy.get('.drink-card').first().click();
    })

})