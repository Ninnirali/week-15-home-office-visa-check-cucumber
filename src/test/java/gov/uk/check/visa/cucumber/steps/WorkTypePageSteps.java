package gov.uk.check.visa.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import gov.uk.check.visa.cucumber.pages.WorkTypePage;

public class WorkTypePageSteps {
    @Then("^I select job type \"([^\"]*)\"$")
    public void iSelectJobType(String jobType){
        new WorkTypePage().selectJobType(jobType);
    }
}
