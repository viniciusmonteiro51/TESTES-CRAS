describe('Usuário', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.visit('https://front-cras.app.fslab.dev')
        cy.realizarLogin();
    })

    it('Deve realizar realizar cadastro de um usuário com status ativo - cenário de sucesso', () => {

        cy.wait(1000); 
        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"]').click();
        cy.wait(1000); 
        cy.get(':nth-child(5) > .styles_button__dr0t2').click();

        cy.get('#nomeCadastrar').type('Vinicius Daniel Monteiro');
        cy.get('#emailCadastrar').type('vinissaum@gmail.com');
        cy.get('#senhaCadastrar').type('vini123');
        cy.get('#unidadeCadastrar').select([2]);
        cy.get('#grupoCadastrar').select([2]);
        cy.get('span.styles_slider__0TNp_').click();
        cy.wait(1000); 
        cy.get('span.styles_slider__0TNp_').click();
    })
})