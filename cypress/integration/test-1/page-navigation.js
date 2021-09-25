describe('Page Navigation Check', function(){
    // it('Compare bool', function(){
    //     expect(false).to.equals(false)
    // })
    it('launch esxi-blr-deployment job', function(){
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()
        cy.url().should('include', 'commands/actions')

        cy.get('.action-email').type('dummy@gmail.com')
    })
})