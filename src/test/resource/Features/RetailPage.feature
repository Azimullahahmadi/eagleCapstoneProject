@RetailComplete
Feature:    for this feature you have to have an existing account



Background:


Given User is on Retail website 
And User click  on MyAccount
When  User click on Login 
And User enter username ‘umra.ahmadi34@tekschool.us’ and password 'Ahmadi@123' 
And User click on Login button
Then User should be logged in to MyAccount dashboard

@Register
Scenario: Register as an Affiliate user with Cheque Payment Method
When User click on 'Register for an Affiliate Account' link 
And User fill affiliate form with below information
|company|website|taxID|paymentMethod|ChequePayeeName|
|Nashita|Nashita.com|1200|Cheque|Nashita|
And User check on About us check box 
And User click on Continue button 
Then User should see a success message 

@Edit
Scenario: Edit your affiliate information from Cheque payment method to Bank Transfer
 When User click on ‘Edit your affiliate informationlink
And user click on Bank Transfer radio button
And User fill Bank information with below information
|bankName|abaNumber|swiftCode|accountName|accountNumber|
|Wellsforgo|Arcade|4500|cheking|12345566|
And User click on Continue button 
Then User should see a success message 


@information
Scenario: Edit your account Information 
When User click on ‘Edit your account information’ link 
And User modify below information 
|firstname|lastName|email|telephone|
|imran|ahmad|umra.ahmadi34@tekschool.us|014-456-5645|
And User click on continue button 
Then User should see a message ‘Success: Your account has been successfully updated.’

