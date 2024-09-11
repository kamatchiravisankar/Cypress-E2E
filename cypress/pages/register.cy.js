export class registerPage {
  weblocators = {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    telephone: "#input-telephone",
    password: "#input-password",
    confirmPassword: "#input-confirm",
    policycheckbox: 'input[type="checkbox"]',
    continue: ".btn-primary",
  };

  openUrl() {
    cy.visit(Cypress.env("URL"));
  }
  enterFirstName(FName) {
    cy.get(this.weblocators.firstName).type(FName);
  }
  enterLastName(LName) {
    cy.get(this.weblocators.lastName).type(LName);
  }

  enterEmail(Email) {
    cy.get(this.weblocators.email).type(Email);
  }
  enterTelephone(PhoneNumber) {
    cy.get(this.weblocators.telephone).type(PhoneNumber);
  }
  enterPassword(Password) {
    cy.get(this.weblocators.password).type(Password);
    cy.get(this.weblocators.confirmPassword).type(Password);
  }
  selectPolicycheckbox() {
    cy.get(this.weblocators.policycheckbox).check();
  }
  clickContinue() {
    cy.get(this.weblocators.continue).click();
  }
}
