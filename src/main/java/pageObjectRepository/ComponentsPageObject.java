package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;

public class ComponentsPageObject extends Base {
	
	
	public ComponentsPageObject() {
		
		PageFactory.initElements(driver, this);
		
		
	}
	
	
	
	@FindBy(xpath="//a[text()='Components']")
	private WebElement components;
	
	
	
	@FindBy(xpath="//a[text()='Show All Components']")
	private WebElement showAllComponents;
	

}
