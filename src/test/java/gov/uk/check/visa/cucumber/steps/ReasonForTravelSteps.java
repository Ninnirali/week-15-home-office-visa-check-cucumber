package gov.uk.check.visa.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import gov.uk.check.visa.cucumber.pages.ReasonForTravelPage;

public class ReasonForTravelSteps {
    @Then("^I select reason for visit \"([^\"]*)\"$")
    public void iSelectReasonForVisit(String reasonForTravel){
        new ReasonForTravelPage().selectReasonForVisit(reasonForTravel);

    }
}
