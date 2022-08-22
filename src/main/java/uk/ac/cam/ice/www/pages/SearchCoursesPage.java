package uk.ac.cam.ice.www.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.ac.cam.ice.www.utility.Utility;

public class SearchCoursesPage extends Utility {
    private static final Logger log = LogManager.getLogger(SearchCoursesPage.class.getName());

    public SearchCoursesPage() {
        PageFactory.initElements(driver, this);}
    @CacheLookup
    @FindBy(xpath = "//input[@id='edit-freetext']")
    WebElement searchBox;
    @CacheLookup
    @FindBy(xpath = "//input[@id='edit-submit']")
    WebElement submitButton;
    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'Search found 6 courses')]")
    WebElement foundResult;

    public void enterCourseName(){
        sendTextToElement(searchBox,"anthropology");
    }
    public void clickOnSearchButton(){
        clickOnElement(submitButton);
    }
    public String VerifyResult(){
        return getTextFromElement(foundResult);

    }

}
