export class homePage {
  weblocators = {
    searchbox: ".form-control.input-lg",
    clickSearch: ".fa-search",
    product: ".product-thumb .caption >h4>a",
    addToCart: ".button-group .fa-shopping-cart",
    successAlert: ".alert-success",
  };

  searchProduct(productName) {
    cy.get(this.weblocators.searchbox).type(productName);
    cy.get(this.weblocators.clickSearch).click();
    // cy.contains(this.weblocators.addToCart).first().click();
    var listedProducts = cy.get(this.weblocators.product);
    listedProducts.each((element) => {
      if (element.text() === productName)
        cy.get(this.weblocators.addToCart).first().click();
    });
  }
  verifysuccessmessage() {
    return cy.get(this.weblocators.successAlert);
  }
}
