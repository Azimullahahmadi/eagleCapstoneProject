package pageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilites.WebDriverUtility;

public class RetailPageObject  extends Base{
	
	public RetailPageObject() {
		PageFactory.initElements(driver, this);
		
		
	}

	@FindBy(xpath = "//span[contains(text(),'My Account')]")
	private WebElement myAccount;
	
	@FindBy(xpath = "//a[text()='Login']")
	private WebElement login;
	
	@FindBy(id = "input-email")
	private WebElement emailField;
	
	@FindBy(id = "input-password")
	private WebElement passwordField;
	
	@FindBy(xpath ="//input[@value='Login']")
	private WebElement loginButton;
	
	@FindBy(xpath ="//a[text()='Register for an affiliate account']")
	
	 private WebElement affiliateAccount;
	
	@FindBy(id="input-company")
	private WebElement company;
	
	@FindBy(id="input-website")
	private WebElement website;
	
	@FindBy(id="input-tax")
	private WebElement taxID;
	
	@FindBy(xpath="//input[@value='cheque']")
	private WebElement paymentMethod;
	
	@FindBy(xpath="//input[@type='checkbox']")
	private WebElement aboutUs;
	
	@FindBy(xpath="//input[@value='Continue']")
 private WebElement coninueButton;
	
	
	@FindBy(id="input-cheque")
	private WebElement ChequePayeeName;
	
	@FindBy(xpath="//div[text()=' Success: Your account has been successfully updated.']")
	private WebElement successMessage;
	
	@FindBy(xpath="//a[text()='Edit your affiliate information']")
	private WebElement editAccount;
	
	
	@FindBy(xpath="//input[@value='bank']")
	private WebElement bankTransfer;
	
	@FindBy(id="input-bank-name")
	private WebElement bankName;
	
	@FindBy(id="input-bank-branch-number")
	private WebElement branchName;
	
	@FindBy(id="input-bank-swift-code")
	private WebElement swiftCode;
	
	@FindBy(id="input-bank-account-name")
	
	private WebElement accountName;
	
	@FindBy(id="input-bank-account-number")
	private WebElement accountNumber;
	
	@FindBy(xpath="//input[@class='btn btn-primary']")
	
	private WebElement continueButtonEdit;
	
	@FindBy(xpath="//div[text()=' Success: Your account has been successfully updated.']")
	private WebElement editSuccessMessage;
	
	@FindBy(xpath="//a[text()='Edit your account information']")
	private WebElement editInformaiton;
	
	@FindBy(id = "input-firstname")
	private WebElement firstName;
	@FindBy(id = "input-lastname")
	private WebElement lastName;
	@FindBy(id = "input-email")
	private WebElement email;
	@FindBy(id = "input-telephone")
	private WebElement telephone;
	
	public void clickOnMyAccount() {
		WebDriverUtility.clickOnElement(myAccount);
	}
	
	public void clickOnLogin() {
		WebDriverUtility.clickOnElement(login);
	}
	
	public void enterEmail(String email) {
		WebDriverUtility.enterValue(emailField, email);
	}
	
	public void enterPassword(String password) {
		WebDriverUtility.enterValue(passwordField, password);
	}
	
	public void clickOnLoginButton() {
		WebDriverUtility.clickOnElement(loginButton);
	}
	
	public void clickOnAffiliateAccount() {
		
		WebDriverUtility.clickOnElement(affiliateAccount);
		
	}
	
	public void enterCompany(String companyName) {
		WebDriverUtility.enterValue(company, companyName);
	}
	
	public void enterWebsite(String wName) {
		WebDriverUtility.enterValue(website, wName);
	}
	
	public void enterTaxID(String tID) {
		WebDriverUtility.enterValue(taxID, tID);
	}
	
	public void enterChequeName(String ChName) {
		WebDriverUtility.enterValue(ChequePayeeName, ChName);
		
	}
	public void paymentMethod(String pMethod) {
		if (pMethod.equalsIgnoreCase("cheque")) {
			if (!paymentMethod.isSelected())
				WebDriverUtility.clickOnElement(paymentMethod);;
		} 
	}
	
	public void clickOnAboutUs() {
		WebDriverUtility.clickOnElement(aboutUs);
	}
	
	public String accountCreationMessage() {
		String message = successMessage.getText();
		System.out.println(message);
		return message;
	}
	
	public void clickOnContineButton() {
		WebDriverUtility.clickOnElement(coninueButton);
	}
	
	public void clickOnEditAccount() {
		WebDriverUtility.clickOnElement(editAccount);
	}
	public void clickOnBanckTransfer() {
		
			if (!bankTransfer.isSelected())
				WebDriverUtility.clickOnElement(bankTransfer);
		} 
	
	
	public void enterBankName(String bName) {
		WebDriverUtility.enterValue(bankName, bName);
	}
	
	public void enterBranckName(String bchName) {
		WebDriverUtility.enterValue(branchName, bchName);
		
	}
	
	public void enterSwiftCode(String sCode) {
		WebDriverUtility.enterValue(swiftCode, sCode);
	}
	
	public void enterAccountName(String AccName) {
		WebDriverUtility.enterValue(accountName, AccName);
	}
	
	public void enterAccountNumber(String AccNumber) {
		
		WebDriverUtility.enterValue(accountNumber, AccNumber);
	}
	
	public void clickOnconButton() {
		WebDriverUtility.clickOnElement(continueButtonEdit);
	}
	
	public void clickOnEditInformation() {
		WebDriverUtility.clickOnElement(editInformaiton);
	}
	public String accountEditMessage() {
		String message =editSuccessMessage.getText();
		System.out.println("******************************");
		System.out.println(message);
		return message;
	}
	
	public void enterFirstName(String fName) {
		WebDriverUtility.enterValue(firstName, fName);
	}
	
	public void enterLastName(String lName) {
		WebDriverUtility.enterValue(lastName, lName);
	}
	
	
	public void enterRegistrationEmail(String emailvalue) {
		WebDriverUtility.enterValue(email, emailvalue);
	}
	public void enterTelephone(String telephoneValue) {
		WebDriverUtility.enterValue(telephone, telephoneValue);
	}
	
	public void deleteFirstName() {
		WebDriverUtility.clearText(firstName);
	}
	public void deleteLastName() {
		WebDriverUtility.clearText(lastName);
	}
	public void deleteEmail() {
		WebDriverUtility.clearText(email);
	}
	public void deleteTelephone() {
		WebDriverUtility.clearText(telephone);
	}
}
