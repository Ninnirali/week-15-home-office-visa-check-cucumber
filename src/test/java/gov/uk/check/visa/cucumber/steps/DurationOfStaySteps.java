package gov.uk.check.visa.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import gov.uk.check.visa.cucumber.pages.DurationOfStayPage;

public class DurationOfStaySteps {
    @And("^I Select intent to stay for \"([^\"]*)\"$")
    public void iSelectIntentToStayFor(String duration) {
        new DurationOfStayPage().selectLengthOfStay("more than 6 months");
    }
}
