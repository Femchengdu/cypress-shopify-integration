describe('Home page confirmation', () => {
    it('successfully loads the home page!!!', () => {
      cy.visit('https://cypress-integration.myshopify.com'); // change URL to match your dev URL
      cy.contains('span', 'Talk about your brand');
    });
    // it("Finds the `Talk about your brand` header on the page!!", ()=>{
    //    cy.visit('https://cypress-integration.myshopify.com'); // change URL to match your dev URL
    // })
})