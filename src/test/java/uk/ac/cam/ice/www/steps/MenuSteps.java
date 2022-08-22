package uk.ac.cam.ice.www.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import uk.ac.cam.ice.www.pages.MenuPage;

public class MenuSteps {
    @When("^I am able to click on all menu tab \"([^\"]*)\"$")
    public void iAmAbleToClickOnAllMenuTab(String Menu)  {
        new MenuPage().clickOnMenuTab(Menu);
    }
}
