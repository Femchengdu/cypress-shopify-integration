describe('Home page confirmation', () => {
    it('successfully loads the home page!!!', () => {
      cy.visit(
    'https://cypress-integration.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaVpqZVhCeVpYTnpMV2x1ZEdWbmNtRjBhVzl1TG0xNWMyaHZjR2xtZVM1amIyMEdPZ1pGVkE9PSIsImV4cCI6IjIwMjEtMDktMjZUMTc6NDM6MTAuNjMxWiIsInB1ciI6InBlcm1hbmVudF9wYXNzd29yZF9ieXBhc3MifX0%3D--f2ccda26e0bb042b72122ee5fa3485e77d96c148&_fd=0&_sc=1&key=11dfef20f931f54ccea9d4704c40ad94b080388918a5b4414a4d47dd6a1d12e6&preview_theme_id=126790271170'
      ); // change URL to match your dev URL
      cy.contains('span', 'Talk about your brand')
    })
    // it("Finds the `Talk about your brand` header on the page!!", ()=>{
    // })
})