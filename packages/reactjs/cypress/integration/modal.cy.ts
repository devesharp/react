/// <reference types="cypress"/>

describe("Modals", () => {
    it("deve criar hash ao abrir modal com noHash = false", () => {
        cy.visit("http://localhost:6006/iframe.html?id=ui-modal-desktop--default");

        // Não deve ter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("");
        });

        // Abrir Modal
        cy.get("#open-modal").click();
        cy.get("[data-modal-name='modal-default']").should("be.visible");

        // Deve conter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-default");
        });
    });

    it("não deve criar hash ao abrir modal com noHash = true", () => {
        cy.visit("http://localhost:6006/iframe.html?id=ui-modal-desktop--no-hash");

        // Não deve ter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("");
        });

        // Abrir Modal
        cy.get("#open-modal").click();
        cy.get("[data-modal-name='modal-default']").should("be.visible");

        // Não deve ter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("");
        });
    });

    it("deve abrir modal se hash já estiver na url noAutoOpen = false", () => {
        cy.visit("http://localhost:6006/iframe.html?id=ui-modal-desktop--default#modal-default");

        // Deve abrir modal
        cy.get("[data-modal-name='modal-default']").should("be.visible");
    });

    it("não deve abrir modal se hash já estiver na url noAutoOpen = false", () => {
        // cy.visit("http://localhost:6006/iframe.html?id=ui-modal-desktop--default#modal-default");
        // // Deve abrir modal
        // cy.get("[data-modal-name='modal-default']", { timeout: 5000 }).should("not.visible");

        cy.visit("http://localhost:6006/iframe.html?id=ui-modal-desktop--no-noautoopen#modal-default");

        cy.wait(1000);

        // Deve abrir modal
        cy.get("[data-modal-name='modal-default']").should("not.be.visible");
    });

    it("deve voltar url antiga quando remover modal com hash", () => {
        cy.visit("http://localhost:6006/iframe.html?id=ui-modal-desktop--default");

        // Não deve ter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("");
        });

        // Abrir Modal
        cy.get("#open-modal").click();
        cy.get("[data-modal-name='modal-default']").should("be.visible");

        // Deve conter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-default");
        });

        // fechar Modal
        cy.get("[data-modal-name='modal-default']")
            .find("[data-testid='close-modal']")
            .click();

        // Não deve ter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("");
        });
    });

    it("deve abrir novos modals e fechar anteriores caso algum esteja aberto", () => {
        cy.visit("http://localhost:6006/iframe.html?id=ui-modal-desktop--button-with-open-modal-inside-modal");
        // Não deve ter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("");
        });

        // Abrir Primeiro Modal
        cy.get("#open-modal").click();
        cy.get("[data-modal-name='modal-primary']").should("be.visible");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-primary");
        });

        // Abrir Segundo Modal
        cy.get("#open-modal-secondary").click();
        cy.get("[data-modal-name='modal-secondary']").should("be.visible");
        cy.get("[data-modal-name='modal-primary']").should("have.css", "visibility", "hidden");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-secondary");
        });

        // Abrir Terceiro Modal
        cy.get("#open-modal-tertiary").click();
        cy.get("[data-modal-name='modal-tertiary']").should("be.visible");
        cy.get("[data-modal-name='modal-secondary']").should("have.css", "visibility", "hidden");
        cy.get("[data-modal-name='modal-primary']").should("have.css", "visibility", "hidden");

        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-tertiary");
        });
    });

    it("deve abrir reabrir modals anteriores quando voltar página", () => {
        cy.visit("http://localhost:6006/iframe.html?id=ui-modal-desktop--button-with-open-modal-inside-modal");
        // Não deve ter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("");
        });

        // Abrir Primeiro Modal
        cy.get("#open-modal").click();
        cy.get("[data-modal-name='modal-primary']").should("be.visible");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-primary");
        });

        // Abrir Segundo Modal
        cy.get("#open-modal-secondary").click();
        cy.get("[data-modal-name='modal-secondary']").should("be.visible");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-secondary");
        });

        // Abrir Terceiro Modal
        cy.get("#open-modal-tertiary").click();
        cy.get("[data-modal-name='modal-tertiary']").should("be.visible");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-tertiary");
        });

        // Voltar
        cy.go("back");
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-secondary");
        });

        // Voltar
        cy.go("back");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-primary");
        });

        // Voltar
        cy.go("back");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("");
        });
    });

    it("deve abrir reabrir modals anteriores quando fechar modal atual", () => {
        cy.visit("http://localhost:6006/iframe.html?id=ui-modal-desktop--button-with-open-modal-inside-modal");
        // Não deve ter hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("");
        });

        // Abrir Primeiro Modal
        cy.get("#open-modal").click();
        cy.get("[data-modal-name='modal-primary']").should("be.visible");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-primary");
        });

        // Abrir Segundo Modal
        cy.get("#open-modal-secondary").click();
        cy.get("[data-modal-name='modal-secondary']").should("be.visible");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-secondary");
        });

        // Abrir Terceiro Modal
        cy.get("#open-modal-tertiary").click();
        cy.get("[data-modal-name='modal-tertiary']").should("be.visible");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-tertiary");
        });

        // Fechar Terceiro Modal
        cy.get("[data-modal-name='modal-tertiary']")
            .find("[data-testid='close-modal']")
            .click();
        cy.get("[data-modal-name='modal-secondary']", { timeout: 3000 }).should("be.visible");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-secondary");
        });

        // Fechar Segundo Modal
        cy.get("[data-modal-name='modal-secondary']")
            .find("[data-testid='close-modal']")
            .click();
        cy.get("[data-modal-name='modal-primary']", { timeout: 3000 }).should("be.visible");
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("#modal-primary");
        });

        // Fechar Segundo Modal
        cy.get("[data-modal-name='modal-primary']")
            .find("[data-testid='close-modal']")
            .click();
        // Hash
        cy.location().should(loc => {
            expect(loc.hash).to.eq("");
        });
    });

    it("deve executar função onClose", () => {
        cy.visit("http://localhost:6006/iframe.html?id=ui-modal-desktop--onclose");
        // Abrir Primeiro Modal
        cy.get("#open-modal").click();
        cy.get("[data-modal-name='modal-primary']").should("be.visible");
        cy.get("[data-modal-name='modal-primary']")
            .find("[data-testid='close-modal']")
            .click();

        cy.contains("body", "modal closed");
    });
});
