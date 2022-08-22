package uk.ac.cam.ice.www.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.ac.cam.ice.www.utility.Utility;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);}
   @CacheLookup
   @FindBy(xpath = "//input[@id='iceForm:well:forenameWrapper:forename']")
   WebElement firstName;
    @CacheLookup
    @FindBy(xpath = "//input[@id='iceForm:well:surnameWrapper:surname']")
    WebElement surname;
    @CacheLookup
    @FindBy(xpath = "//input[@id='iceForm:well:emailAddressWrapper:emailAddress']")
    WebElement email;
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Register')]")
    WebElement registerButton;
    @CacheLookup
    @FindBy(id = "iceForm:well:titleWrapper:titleMessage")
    WebElement errorMessage;

    public void enterFirstName(String FirstName){
        sendTextToElement(firstName,FirstName);
    }
    public void clickOnSurname(String Surname){
         sendTextToElement(surname,Surname);
    }
    public void enterEmail(String Email){
        sendTextToElement(email,Email);
    }
    public void clickOnRegisterButton(){
        clickOnElement(registerButton);
    }
    public String verifyErrorMessage(){
        return getTextFromElement(errorMessage);
    }

}
