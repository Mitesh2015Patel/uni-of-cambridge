package uk.ac.cam.ice.www.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.ac.cam.ice.www.pages.SearchCoursesPage;

public class CourseSteps {
    @When("^I enter anthropology into search box$")
    public void iEnterAnthropologyIntoSearchBox() {
        new SearchCoursesPage().enterCourseName();
    }

    @And("^I click on search button$")
    public void iClickOnSearchButton() {
        new SearchCoursesPage().clickOnSearchButton();
    }

    @Then("^I verify total found courses$")
    public void iVerifyTotalFoundCourses() {
        String expectedMessage = new SearchCoursesPage().VerifyResult();
        String actualMessage = "Search found 6 courses";
        Assert.assertEquals("Search found 6 courses",expectedMessage,actualMessage);
    }
}
