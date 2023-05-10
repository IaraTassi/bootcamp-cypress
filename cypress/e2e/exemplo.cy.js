describe('Login', () => {
    it('Login com sucesso', () => {
        // acessar a minha aplicação
        cy.visit('http://automationpratice.com.br/')
            .get('#top_header')

        // crir os steps/ações
        // Selecionar o elemento
        //Preencher um campo
        cy.get('.form-control')
            .type('dud@qazando.com.br')

        // Click em um elemento
        cy.get('.clear .theme-btn-one.btn_md')
            .click()
    })

   
});