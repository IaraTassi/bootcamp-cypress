describe('Login', () => {
    it('Login com sucesso', () => {
        // acessar a minha aplicação
        cy.visit('/')
            .get('#top_header')

        // crir os steps/ações
        // Selecionar o elemento
        //Preencher um campo
        cy.get('.form-control')
            .type('dud@qazando.com.br')

        // Click em um elemento
        cy.get('.clear .theme-btn-one.btn_md')
            .click()

        cy.get('.swal2-confirm') 
            .click()  
            
        // #mc_enbed_signup > form > div > div. button
        // .clear .theme-btn-one.btn_md  
    })

   
});

    describe('Novidades', () => {
        it('Cadastrar e-mail com sucesso', () => {
        
            cy.visit('/')
                .get('#top_header')

            cy.get('.form-control')
                .type('dud@qazando.com.br')

            cy.get('.clear .theme-btn-one.btn_md')
                .click()

            cy.get('.swal2-title')
                .should('be.visible')    
                .should('have.text', 'Success')
                        
            
        })

        it('Cadastrar e-mail com sucesso apertando enter', () => {
            cy.visit('/')
                .get('#top_header')

            cy.get('.form-control')
                .type('dud@qazando.com.br{enter}')

            cy.get('.swal2-title')
                .should('be.visible')    
                .should('have.text', 'Success')
                        
            
        })

        it('Verificar fechamento da mensagem de sucesso', () => {
            cy.visit('/')
                
            cy.get('.form-control')
                .type('dud@qazando.com.br')

            cy.get('.clear .theme-btn-one.btn_md')
                .click()

            cy.get('.swal2-actions > .swal2-confirm')
                .click()

            cy.wait(1000) 
            
            cy.get('#swal2-title')
                .should('not.exist')    
                                
            
        })

    
    });