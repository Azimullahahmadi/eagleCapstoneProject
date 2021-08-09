package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import core.Base;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjectRepository.RetailPageObject;
import utilites.WebDriverUtility;

public class RetailPateDef extends Base{
	
	RetailPageObject retail=new RetailPageObject();

	
//	@Given("^User is on Retail Website$")
//	public void user_is_on_Retail_Website() {
//		openBrowser();
//		logger.info("Retail Website is opened");
//		WebDriverUtility.screenShot();
//		
//	}
	
	@When("^User click  on MyAccount$")
	public void user_click_on_MyAccount() {
		retail.clickOnMyAccount();
		logger.info("User clicked on MyAccount");
	}
	
//	@And("^User click on Login$")
//	public void user_click_on_Login() {
//		retail.clickOnLogin();
//		logger.info("User Clicked on Login");
//		
//	}
	@And("^User enter username ‘(.+)’ and password '(.+)'$")
	public void user_enter_userName_and_password(String userName, String password) {
		retail.enterEmail(userName);
		logger.info("user entered email");
		retail.enterPassword(password);
		logger.info("user entered password");
		WebDriverUtility.screenShot();
	}
	
//	@And("^User click on Login button$")
//	public void user_click_on_Login_button() {
//		retail.clickOnLoginButton();
//		logger.info("user clicked on login button");
//	}
	
	@Then("^User should be logged in to MyAccount dashboard$")
	public void user_should_be_logged_in_to_myAccount_Dashboard() {
		WebDriverUtility.wait(5000);
		WebDriverUtility.screenShot();
		logger.info("user logged to myAccount Dashboard");
	}
	
	@When("^User click on 'Register for an Affiliate Account' link$")
	public void user_click_on_register_for_an_Affiliate_Account_link() {
		WebDriverUtility.wait(5000);
		retail.clickOnAffiliateAccount();
		logger.info("User Clicked on Register Account");
		
	}
	
	@And("^User fill affiliate form with below information$")
	public void user_fill_affiliate_form_with_below_information(DataTable info) {
		List<Map<String, String>> dataValues = info.asMaps(String.class, String.class);
		
		retail.enterCompany(dataValues.get(0).get("company"));
		retail.enterWebsite(dataValues.get(0).get("website"));
		retail.enterTaxID(dataValues.get(0).get("taxID"));
		retail.paymentMethod(dataValues.get(0).get("paymentMethod"));
		retail.enterChequeName(dataValues.get(0).get("ChequePayeeName"));
		
		logger.info("User filled the information form");
		
		
	}
	
	@And("^User check on About us check box$")
	public void user_check_on_About_us_check_box() {
		
		retail.clickOnAboutUs();
		logger.info("User Clicked on About us check box");
		
	}
	@And("^User click on Continue button$")
	public void user_click_on_continue_button() {
		retail.clickOnContineButton();
		logger.info("User Clicked on Continue Button");
		
	}
	@Then("^User should see a success message$")
	public void user_should_see_a_success_message() {
		String expectedMessage = "Success: Your account has been successfully updated.";
		  String actualMessage = retail.accountCreationMessage();
		  Assert.assertEquals(expectedMessage, actualMessage);
		  WebDriverUtility.screenShot();
		  logger.info("user Account has been created");
	}
	
	@When("^User click on ‘Edit your affiliate informationlink$")
	public void user_click_on_edit_your_affiliate_information_link() {
		
		retail.clickOnEditAccount();
		logger.info("User Clicked on Edit your affiliate information Link");
		
	}
	
	@And("^user click on Bank Transfer radio button$")
	public void user_click_on_Bank_Transfer_radio_button() {
		retail.clickOnBanckTransfer();
		logger.info("User Clicked on Bank Transfer radion Button");
		
	}
	
	@And("^User fill Bank information with below information$")
	public void user_fill_Bank_information_with_below_information(DataTable info) {
List<Map<String, String>> dataValues = info.asMaps(String.class, String.class);
		
		retail.enterBankName(dataValues.get(0).get("bankName"));
		retail.enterBranckName(dataValues.get(0).get("abaNumber"));
		retail.enterSwiftCode(dataValues.get(0).get("swiftCode"));
		retail.enterAccountName(dataValues.get(0).get("accountName"));
		retail.enterAccountNumber(dataValues.get(0).get("accountNumber"));
		logger.info("User Filled bank information with below information");
		
	}
	
//	@And("^User click on Continue button$")
//	public void user_click_on_contine_button() {
//		retail.clickOnconButton();
//		logger.info("User clicked on Oontine Button");
//		
//	}
	
//	@Then("^User should see a success message$")
//	public void user_should_see_success_message() {
//		
//		String expectedMessage = "Success: Your account has been successfully updated.";
//		  String actualMessage = retail.accountEditMessage();
//		  Assert.assertEquals(expectedMessage, actualMessage);
//		  WebDriverUtility.screenShot();
//		  logger.info("Your account has been successfully updated");
//	}
	
	@When("^User click on ‘Edit your account information’ link$")
	public void user_click_on_Edit_your_account_information_link() {
		retail.clickOnEditInformation();
		logger.info("User Clicked on Edit your Account Information");
		
	}
	
	
	@And("^User modify below information$")
	public void user_modify_below_information(DataTable info){
List<Map<String, String>> dataValues = info.asMaps(String.class, String.class);
		retail.deleteFirstName();
		WebDriverUtility.wait(5000);
		retail.enterFirstName(dataValues.get(0).get("firstname" ));
		retail.deleteLastName();
		retail.enterLastName(dataValues.get(0).get("lastName"));
		retail.deleteEmail();
		retail.enterEmail(dataValues.get(0).get("email"));
		retail.deleteTelephone();
		retail.enterTelephone(dataValues.get(0).get("telephone"));
		
	}
	
	@Then("^User should see a message ‘Success: Your account has been successfully updated.’$")
	
	public void user_should_see_a_message_Success_your_account_has_been_successfully_updated() {
	String expectedMessage = "Success: Your account has been successfully updated.";
	  String actualMessage = retail.accountEditMessage();
	  Assert.assertEquals(expectedMessage, actualMessage);
	  WebDriverUtility.screenShot();
	  logger.info("Your account has been successfully updated");
}

}
