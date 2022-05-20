package gov.uk.check.visa.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import gov.uk.check.visa.cucumber.pages.ResultPage;
import org.testng.Assert;

public class ResultSteps {
    @Then("^I should see \"([^\"]*)\"$")
    public void iShouldSee(String resultMessage) {
        String expected = resultMessage;
        String actual = new ResultPage().getResultMsg();
        Assert.assertEquals(expected,actual);

    }
}
