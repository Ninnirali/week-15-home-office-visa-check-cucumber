package gov.uk.check.visa.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import gov.uk.check.visa.cucumber.pages.SelectNationalityPage;

public class SelectNationalitySteps {
    @Then("^I select Nationality \"([^\"]*)\"$")
    public void iSelectNationality(String nationality) {
      new SelectNationalityPage().selectNationality(nationality);
    }

    @Then("^I click next step button$")
    public void iClickNextStepButton() {
        new SelectNationalityPage().clickNextStepButton();
    }
}
