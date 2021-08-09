package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;

public class PhonesPDAsPageObject extends Base {

	public PhonesPDAsPageObject() {
		
		
		
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(xpath ="//a[text()='Phones & PDAs']")
	private WebElement PhonesAndPads;
	
	
	@FindBy(id="input-sort")
	private WebElement sortBy;
	
	@FindBy(id="input-limit")
	private WebElement show;
	
	
}
