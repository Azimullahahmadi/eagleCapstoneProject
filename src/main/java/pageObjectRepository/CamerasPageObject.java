package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;

public class CamerasPageObject extends Base {
	
	
	public CamerasPageObject() {
		
		PageFactory.initElements(driver, this);
		
	}
	
	
	
	@FindBy(xpath =" //a[text()='Cameras']")
	private WebElement cameras;
	
	
	
	@FindBy(xpath= "//a[text()='Show All Cameras']")
	
	private WebElement showAllCameras;
	
	
	
	@FindBy(id="input-sort")
	private WebElement sortBy;
	
	@FindBy(id="input-limit")
	private WebElement show;
	

}
