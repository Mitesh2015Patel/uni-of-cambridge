package uk.ac.cam.ice.www.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.ac.cam.ice.www.utility.Utility;

import java.security.cert.X509Certificate;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    public HomePage(){
        PageFactory.initElements(driver,this);}
    @CacheLookup
    @FindBy(xpath = "//body/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]")
    WebElement image;
    @CacheLookup
    @FindBy(className = "campl-primary-cta")
    WebElement applyNow;
    @CacheLookup
    @FindBy(xpath = "//a[@id='iceForm:register']")
    WebElement register;


    public void clickOnImage(){
        clickOnElement(image);
    }
    public void clickOnApplyNow(){
        clickOnElement(applyNow);
    }
    public void clickOnRegister(){
        clickOnElement(register);
    }


}
