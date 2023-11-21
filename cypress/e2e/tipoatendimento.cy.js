

describe('Tipo de atendimento', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.visit('https://front-cras.app.fslab.dev')
        cy.realizarLogin();
    })

    it('Deve cadastrar tipo de atendimento com todos os campos preenchidos', () => {
        
        //Selecionando a página de cadastro de atendimento
        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
        

        //Cadastrando novo atendimento
        cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Cadastrar atendimento"]').click();

        cy.get('#dataAtendimento').type('2023-11-07');

        cy.get('#tipo').select('Auxílio Brasil');

        cy.get('#observacao').type("Tesde de cadastro de um atendimento para o Cypress");

        cy.get('[type="submit"]').click();
    })


    it('Deve retornar msg de campos obrigatórios', () => {

        //Selecionando a página de cadastro de atendimento
        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();

        //Teste de cadastro para retornar mensagens de campos obrigatórios
        cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Cadastrar atendimento"]').click();

        cy.get('[type="submit"]').click();

        cy.get('.styles_errorMessage__IKSlh').should('be.visible').contains('Data é obrigatório')

        cy.get('.styles_errorMessage__IIJbF').should('be.visible').contains('Tipo é obrigatório');
    
    })

    it("Deve pesquisar um tipo de atendimento e alterar seu nome", () => {
        
        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();

        cy.get(':nth-child(9) > :nth-child(2) > .styles_container__NSLBw > [alt="Editar tipo de atendimento"]').click();

        cy.get('#nome').clear().type('Serviços, programas, projetos e beneficios.')

        cy.get('[type="submit"]').click();
    })
})

/*    it("Deve pesquisar um tipo de atendimento e alterar seu nome", () => {
        
        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"] > .styles_containerLinkText__Rz0Qr').click();

        cy.get('#tipo').select('Auxílio Brasil');
        cy.get('#dataInicial').type('2023-11-06');
        cy.get('#dataFinal').type('2023-11-08');

        cy.get('#buscar').click();

        cy.get(':nth-child(4) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar Atendimento"]').click();

        cy.get('#observacaoAtendimento').type('Teste para atualizar dados de um atendimentos feito com sucessso');

        cy.get('[type="submit"]').click();
    })*/