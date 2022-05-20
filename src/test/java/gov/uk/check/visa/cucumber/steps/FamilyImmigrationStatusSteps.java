package gov.uk.check.visa.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import gov.uk.check.visa.cucumber.pages.FamilyImmigrationStatusPage;

public class FamilyImmigrationStatusSteps {
    @When("^I select state My partner of family member have uk immigration status 'yes'$")
    public void iSelectStateMyPartnerOfFamilyMemberHaveUkImmigrationStatusYes() {
        new FamilyImmigrationStatusPage().selectImmigrationStatus("yes");
    }

    @And("^I click on Continue$")
    public void iClickOnContinue() {
        new FamilyImmigrationStatusPage().clickOnContinue();
    }
}
