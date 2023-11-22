import faker from 'faker-br';


describe('Pessoas', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.realizarLogin();
    })

    it("Deve cadastrar pessoa com todos os campos preenchidos", () => {

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();

        cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click();

        cy.get('#nome').click();

        const nomeAleatorio = faker.name.findName();
        cy.get('#nome').type(nomeAleatorio);

        const cpfAleatorio = faker.br.cpf();
        cy.get('#cpf').type((cpfAleatorio));

        cy.get('#dataNascimento').type('2023-11-07')

        cy.get('#estrangeiro').select('Sim')

        cy.get('#pais').clear().type('Brasil');

        cy.get('#estado').select('Rondônia');

        cy.get('#cidade').select('Vilhena');

        cy.get('#bairro').type('Oscar Freire');

        cy.get('#numero').type('7777');

        cy.get('#cidade').type('76980-000');

        cy.get('#nit').type('0101001001');

        cy.get('#logradouro').type('VInissuam');

        cy.get('#telefone').type('69999874568');

        cy.get('#telefoneContato').type('69987458793');

        cy.get('[type="submit"]').click();

    })

    it("Deve retornar msg de campos obrigatórios", () => {

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();

        cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click();

        cy.get('[type="submit"]').click();

        cy.contains('span', 'Nome é obrigatório').should('be.visible');

        cy.contains('span', 'Data de nascimento é obrigatório').should('be.visible');
    })

    it("Deve buscar uma pessoa pelo nome e alterar seus dados", () => {

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();

        cy.get(':nth-child(1) > #nome').type('Abdias Albuquerque');

        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();

        cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar pessoa"]').click();

        cy.get('#cep').clear().type('76980-000');

        cy.get('[type="submit"]').click();

    })

    it("Deve buscar uma pessoa pelo CPF e alterar seus dados", () => {

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();

        cy.get(':nth-child(2) > #nome').type('200.001.849-82');

        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();

        cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar pessoa"]').click();

        cy.get('#cep').clear().type('76980-000');

        cy.get('[type="submit"]').click();

    })

    it("Deve cadastrar atendimento para a pessoa", () => {

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();

        cy.get(':nth-child(1) > #nome').type('Militão Braga');

        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();

        cy.wait(3000);

        cy.get('[alt="Cadastrar atendimento"]').click()

        cy.get('#dataAtendimento').type('2023-12-20');

        cy.get('#tipo').select([1]);

        cy.get('#observacao').type('Teste de atendimento');

        cy.get('[type="submit"]').click();
    })

    it("Deve visualizar os dados da pessoa", () => {

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();

        cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Informações da pessoa"]').click();
    })

    it("Deve buscar pessoa listar os atendimentos recebidos e aterar os dados", () => {

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();

        cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Ver atendimentos dessa pessoa"]').click();

        cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar Atendimento"]').click();

        cy.get('#dataAtendimento').clear().type('2022-11-21');

        cy.get('#dataAtendimento').click();
    })
})

