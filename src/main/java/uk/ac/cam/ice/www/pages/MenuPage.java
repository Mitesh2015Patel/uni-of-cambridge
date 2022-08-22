package uk.ac.cam.ice.www.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.ac.cam.ice.www.utility.Utility;

import java.util.List;

public class MenuPage extends Utility {
    private static final Logger log = LogManager.getLogger(MenuPage.class.getName());
    public MenuPage(){
        PageFactory.initElements(driver,this);}
    @CacheLookup
    @FindBy(xpath = "//ul[@class='campl-unstyled-list campl-current']/li")
    List<WebElement> menu;
    @CacheLookup
    @FindBy(xpath = "//div[@class='campl-local-navigation-container']/ul/li[1]")
    WebElement home;
    @CacheLookup
    @FindBy(xpath = "//div[@class='campl-local-navigation-container']/ul/li[2]")
    WebElement courses;
    @CacheLookup
    @FindBy(xpath = "//div[@class='campl-local-navigation-container']/ul/li[3]")
    WebElement bursaries;
    @CacheLookup
    @FindBy(xpath = "//div[@class='campl-local-navigation-container']/ul/li[4]")
    WebElement informationForStudent;
    @CacheLookup
    @FindBy(xpath = "//div[@class='campl-local-navigation-container']/ul/li[5]")
    WebElement events;
    @CacheLookup
    @FindBy(xpath = "//div[@class='campl-local-navigation-container']/ul/li[6]")
    WebElement aboutUs;

    public void clickOnMenuTab(String Menu){
        for (WebElement m1:menu) {
            if (m1.getText().equalsIgnoreCase(Menu)) {
                m1.click();
                System.out.println(m1);
            }
        }

    }
}
