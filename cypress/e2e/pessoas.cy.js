import faker from 'faker-br';


describe('Pessoas', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.visit('https://front-cras.app.fslab.dev')
        cy.realizarLogin();
    })

    it("Deve cadastrar pessoa com todos os campos preenchidos", () =>{

        

        
        
        


        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click(); 

        cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click();

        const nomeAleatorio = faker.name.findName();
        cy.get('#nome').type((nomeAleatorio));

        const cpfAleatorio = faker.br.cpf();
        cy.get('#cpf').type((cpfAleatorio));

        cy.get('#dataNascimento').type('2023-11-07')

        cy.get('#estrangeiro').select('Sim')

        cy.get('#pais').clear().type('Brasil');

        cy.get('#estado').select('Rondônia');

        cy.get('#cidade').select('Vilhena');

        cy.get('#bairro').type('Oscar Freire')

        cy.get('#numero').type('7777')

        cy.get('#cidade').type('76980-000')

    })

    /*it("Deve retornar msg de campos obrigatórios", () => {

    })

    it("Deve buscar uma pessoa pelo nome e alterar seus dados", () => {

    })

    it("Deve buscar uma pessoa pelo CPF e alterar seus dados", () => {

    })

    it("Deve cadastrar atendimento para a pessoa" () => {

    })

    it("Deve visualizar os dados da pessoa", () => {

    })

    it("Deve buscar pessoa listar os atendimentos recebidos e aterar os dados", () => {

    })*/
})

