describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://front-cras.app.fslab.dev/')
    })

    it('Deve realizar o login com sucesso- cenário de  sucesso', () => {
    cy.get('#email').click();
    cy.get('#email').type('dev@gmail.com');

    cy.get('#senha').click();
    cy.get('#senha').type('123');

    cy.get('button[type="submit"]').click();
    })


    it('Deve retornar mensagem de erro devido usuário inválido  - cenário de insucesso', () => {
        cy.get('#email').click();
        cy.get('#email').type('viniteste@gmail.com');
    
        cy.get('#senha').click();
        cy.get('#senha').type('vinison123');
    
        cy.get('button[type="submit"]').click(); 

        cy.get('.Toastify__toast-icon').should('exist');
        cy.contains('div', 'Usuário ou Senha inválida!').should('be.visible');
    })


    it('Deve retornar msg dos campos obrigatório para login - cenário de insucesso', () => {
        cy.get('#email').click();
    
        cy.get('#senha').click();
  
        cy.get('button[type="submit"]').click(); 

        cy.contains('span', 'O email é obrigatório').should('be.visible');
        cy.contains('span', 'A senha é obrigatória').should('be.visible');
    })

    it('Deve retornar mensagem de erro por senha ou usuário  - cenário de insucesso', () => {
        cy.get('#email').click();
        cy.get('#email').type('lairton.braga8790608818@gmail.com');

        cy.get('#senha').click();
        cy.get('#senha').type('1423')

        cy.get('button[type="submit"]').click();

    })
   
})


