$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/HomePage/PatientRegistration.feature");
formatter.feature({
  "name": "Patient Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register the patient in oasis application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PatientRegistration"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Oasis app URL",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.aUserNavigatesToURL()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"test_5\" text in \"UserName\" field",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"test_5\" text in \"Password\" field",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LoginButton\" button",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.clickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"NoButton\" button if exists",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.clickButtonifExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"HamBurgerMenu\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"PatientMasterIndex\" link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"PMIProcessing\" link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"PatientSearch\" link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"RegisteraNewPatientInfo\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"MR\" value from \"Title\" Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.selectDropDown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Ali\" text in \"Firstname\" field",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Nour\" text in \"Secondname\" field",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Ali\" text in \"Thirdname\" field",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Nour\" text in \"FamilyName\" field",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Ali\" text in \"MothersName\" field",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Cancel\" button if exists",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickButtonifExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Male\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Married\" value from \"MaritalStatus\" Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.selectDropDown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Other\" value from \"Religion\" Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.selectDropDown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"16\" text in \"Nationality\" field",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"MNGR\" text in \"Job\" field",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"E\" text in \"Category\" field",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Group B\" value from \"BloodType\" Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.selectDropDown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"21-03-1985\" text in \"DOB\" field",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"0567891023\" text in \"MobileNumber\" field",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Notprocced\" button if exists",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.clickButtonifExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Test@gmail.com\" text in \"EmailID\" field",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"SaveChanges\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"AAAAA\" text in \"Purchaser\" field",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Contract1\" link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Yes\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"23423\" text in \"DocNumber\" field",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"POL12345\" text in \"DocNumber\" field",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"AddInsurence\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"SaveChanges\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Insurance\" value from \"IDType\" Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.selectDropDown(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"DefaultiD\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"23423\" text in \"DocumentNumber\" field",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Hyderabad\" text in \"WhereIssue\" field",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"29-11-2022\" text in \"issuedOn\" field",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"29-11-2026\" text in \"Expiredon\" field",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.inputText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"AddId\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"SaveChanges\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.clickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});