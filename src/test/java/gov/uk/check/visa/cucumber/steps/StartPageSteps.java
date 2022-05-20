package gov.uk.check.visa.cucumber.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import gov.uk.check.visa.cucumber.pages.StartPage;

public class StartPageSteps {
    @Given("^I am on Start Page$")
    public void iAmOnStartPage() {
    }

    @Then("^I accept additional cookies$")
    public void iAcceptAdditionalCookies() {
        new StartPage().clickOnAcceptAdditionalCookiesButton();
    }

    @Then("^I click on start button$")
    public void iClickOnStartButton() {
        new StartPage().clickStartNow();
    }
}
