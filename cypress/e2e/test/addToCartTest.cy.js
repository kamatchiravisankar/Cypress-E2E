import { homePage } from "../../pages/homepage.cy";
import loginData from "../../fixtures/loginData.json";

const hompageObj = new homePage();
describe("Test AutomationAddToCart", function () {
  this.beforeEach(() => {
    cy.login(loginData.login.email, loginData.login.password);
  });

  it("Add to Cart", function () {
    hompageObj.searchProduct(loginData.product.product);
    hompageObj
      .verifysuccessmessage()
      .should("have.text", " Success: You have added ")
      .and("be.visible");
  });
});
