/// <reference types="cypress"/>

describe('Header', () => {
    it('deve criar hash ao abrir modal com noHash = false', () => {
        cy.visit(
            'http://localhost:6006/iframe.html?id=ui-header-desktop--default'
        );

        // Não deve ter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq('');
        });

        // Abrir Modal
        cy.get('#open-modal').click();
        cy.get("[data-modal-name='modal-default']").should('be.visible');

        // Deve conter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq('#modal-default');
        });
    });
});
