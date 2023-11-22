describe('Atendimentos', () => {
    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.realizarLogin();
    })

    it("Deve alterar os dados do atendimento cadastrado", () => {
        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]')
            .click();

        cy.get(':nth-child(1) > #nome').type('Militão Braga');

        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();

        cy.wait(2000);

        cy.get('[alt="Ver atendimentos dessa pessoa"]').click({ multiple: true });

        cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar Atendimento"]').click();

        cy.wait(1000);

        cy.get('#observacaoAtendimento').clear().type('Atualizando dados para teste');

        cy.wait(1000);

        cy.get('[type="submit"]').click();

        cy.wait(3000);
    })


    it("Deve retornar msg de onde data inicial é maior que final", () =>{

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]')
        .click();

        cy.get('#dataInicial').type('2023-12-21');
        
        cy.get('#dataFinal').type('2023-12-20');

        cy.get('#buscar').click(); 

        cy.contains('div', 'Data inicial não pode ser maior ou igual a data final').should('be.visible');
    })

    it("Deve realizar busca somente pelo tipo de atendimento", () => {

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]')
        .click();

        cy.get('#tipo').select([1]);

        cy.get('#buscar').click(); 
    })

    it("Deve realizar busca somente com as datas inicial e final", () => {

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]')
        .click();

        cy.get('#dataInicial').type('2023-12-21');
        
        cy.get('#dataFinal').type('2023-12-22');

        cy.get('#buscar').click(); 
    })

    it("Deve buscar por tipo de atendimento e alterar os dados do atendimento", () => {

            cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]')
            .click();
    
            cy.get('#tipo').select([1]);
    
            cy.get('#buscar').click(); 

            cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar Atendimento"]').click();

            cy.get('#observacaoAtendimento').clear().type('Teste de atualizar tipo de atendimento');

            cy.get('[type="submit"]').click();

            cy.wait(3000);
    })
})