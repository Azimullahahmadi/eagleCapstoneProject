package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;

public class Mp3PlayersPageObject extends Base {

	
	
	public Mp3PlayersPageObject() {
		
		PageFactory.initElements(driver, this);
	}
	
	
	
	@FindBy(xpath ="//a[text()='MP3 Players'] ")
	private WebElement mp3Player;
	
	
	@FindBy(xpath="//a[text()='Show All MP3 Players']")
	private WebElement showAllmp3Player;
	
	@FindBy(id="input-sort")
	private WebElement sortBy;
	
	@FindBy(id="input-limit")
	private WebElement show;
}
