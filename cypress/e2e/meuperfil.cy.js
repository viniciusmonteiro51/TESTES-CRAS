describe('Meu perfil', () => {
    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.visit('https://front-cras.app.fslab.dev/');
        cy.get('#email').click().type('vini@gmail.com');
        cy.get('#senha').click().type('Vi12345678@');
        cy.get('button[type="submit"]').click();
    })

    it('Deve alterar os campos e a senha', () => {

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/perfil"]').click();

        cy.get('.styles_button__dr0t2').click();

        cy.get('#senha').type('Vi12345678@');

        cy.get('#confirmarSenha').type('Vi12345678@');

        cy.get('.styles_container__NSLBw > .styles_button__dr0t2').click();
    })
})
