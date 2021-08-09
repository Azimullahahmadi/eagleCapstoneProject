package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;

public class TablestPageObject extends Base {
	
	
	public TablestPageObject() {
		
		PageFactory.initElements(driver, this);
		
		
	}
	
	
	
	@FindBy(xpath= "//a[text()='Tablets']")
	private WebElement tablets;
	
	
	
	@FindBy(id="input-sort")
	private WebElement sortBy;
	
	@FindBy(id="input-limit")
	private WebElement show;
	

}
