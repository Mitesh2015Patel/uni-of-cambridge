package uk.ac.cam.ice.www.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import uk.ac.cam.ice.www.pages.HomePage;
import uk.ac.cam.ice.www.pages.RegisterPage;

public class MyStepdefs {

    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on Undergraduate Certificate in Immunology image$")
    public void iClickOnUndergraduateCertificateInImmunologyImage() {
        new HomePage().clickOnImage();
    }

    @And("^I click on apply now button$")
    public void iClickOnApplyNowButton() {
        new HomePage().clickOnApplyNow();
    }
    @And("^I click on register$")
    public void iClickOnRegister() {
        new HomePage().clickOnRegister();
    }
    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String FirstName)  {
        new RegisterPage().enterFirstName(FirstName);
    }


    @And("^I enter surname \"([^\"]*)\"$")
    public void iEnterSurname(String Surname)  {
        new RegisterPage().clickOnSurname(Surname);
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String Email)  {
         new RegisterPage().enterEmail(Email);
    }
    @Then("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }


    @And("^I should get error message$")
    public void iShouldGetErrorMessage() {
    String actualMessage = "Title is required";
    String expectedMessage = new RegisterPage().verifyErrorMessage();
        Assert.assertEquals(expectedMessage,actualMessage);
    }
}
