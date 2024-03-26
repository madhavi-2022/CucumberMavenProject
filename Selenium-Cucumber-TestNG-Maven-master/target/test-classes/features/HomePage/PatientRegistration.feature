Feature: Patient Registration

  @PatientRegistration @Regression
  Scenario: Register the patient in oasis application
    #1.1 Patient Registration
    Given User navigates to Oasis app URL
    When I enter "test_5" text in "UserName" field
    And I enter "test_5" text in "Password" field
    When I click on "LoginButton" button
    When I click on "NoButton" button if exists
    And I click on "HamBurgerMenu" button
    And I click on "PatientMasterIndex" link
    And I click on "PMIProcessing" link
    And I click on "PatientSearch" link
    And I click on "RegisteraNewPatientInfo" button
    And I select the "MR" value from "Title" Dropdown
    When I enter "Ali" text in "Firstname" field
    And I enter "Nour" text in "Secondname" field
    When I enter "Ali" text in "Thirdname" field
    And I enter "Nour" text in "FamilyName" field
    When I enter "Ali" text in "MothersName" field
    And I click on "Cancel" button if exists
    And I click on "Male" button
    And I select the "Married" value from "MaritalStatus" Dropdown
    And I select the "Other" value from "Religion" Dropdown
    When I enter "16" text in "Nationality" field
    And I enter "MNGR" text in "Job" field
    When I enter "E" text in "Category" field
    And I select the "Group B" value from "BloodType" Dropdown
    When I enter "21-03-1985" text in "DOB" field
    And I enter "0567891023" text in "MobileNumber" field
    When I click on "Notprocced" button if exists
    And I enter "Test@gmail.com" text in "EmailID" field
    And I click on "SaveChanges" button
 # 1.3 Attach insurance contract to patient
    And I enter "AAAAA" text in "Purchaser" field
  #  And I click on "Aaaa" button
    And I click on "Contract1" link
    And I click on "Yes" button
    When I enter "23423" text in "DocNumber" field
    And I enter "POL12345" text in "DocNumber" field
    And I click on "AddInsurence" button
    And I click on "SaveChanges" button
  #1.4 Define Patient ID
    And I select the "Insurance" value from "IDType" Dropdown
    And I click on "DefaultiD" button
    When I enter "23423" text in "DocumentNumber" field
    And I enter "Hyderabad" text in "WhereIssue" field
    When I enter "29-11-2022" text in "issuedOn" field
    And I enter "29-11-2026" text in "Expiredon" field
    And I click on "AddId" button
    And I click on "SaveChanges" button
