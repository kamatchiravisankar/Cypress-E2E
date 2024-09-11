import { registerPage } from "../../pages/register.cy";
import registerData from "../../fixtures/registerData.json";

const registerObj = new registerPage();
describe("TestAutomation", function () {
  it("RegisterFlow", function () {
    registerObj.openUrl();
    registerObj.enterFirstName(registerData.firstName);
    registerObj.enterLastName(registerData.lastName);
    registerObj.enterEmail(registerData.email);
    registerObj.enterTelephone(registerData.telephone);
    registerObj.enterPassword(registerData.password);
    registerObj.selectPolicycheckbox();
    registerObj.clickContinue();
  });
});
