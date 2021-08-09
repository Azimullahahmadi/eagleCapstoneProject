$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RetailPage.feature");
formatter.feature({
  "line": 2,
  "name": "for this feature you have to have an existing account",
  "description": "",
  "id": "for-this-feature-you-have-to-have-an-existing-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RetailComplete"
    }
  ]
});
formatter.before({
  "duration": 3854059700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter username ‘umra.ahmadi34@tekschool.us’ and password \u0027Ahmadi@123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_on_Retail_Website()"
});
formatter.result({
  "duration": 2327005200,
  "status": "passed"
});
formatter.match({
  "location": "RetailPateDef.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 99301400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_Login()"
});
formatter.result({
  "duration": 383130000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "umra.ahmadi34@tekschool.us",
      "offset": 21
    },
    {
      "val": "Ahmadi@123",
      "offset": 63
    }
  ],
  "location": "RetailPateDef.user_enter_userName_and_password(String,String)"
});
formatter.result({
  "duration": 651790100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_Login_button()"
});
formatter.result({
  "duration": 325097200,
  "status": "passed"
});
formatter.match({
  "location": "RetailPateDef.user_should_be_logged_in_to_myAccount_Dashboard()"
});
formatter.result({
  "duration": 5147150300,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Edit your account Information",
  "description": "",
  "id": "for-this-feature-you-have-to-have-an-existing-account;edit-your-account-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@information"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User click on ‘Edit your account information’ link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User modify below information",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastName",
        "email",
        "telephone"
      ],
      "line": 41
    },
    {
      "cells": [
        "imran",
        "ahmad",
        "umra.ahmadi34@tekschool.us",
        "014-456-5645"
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User should see a message ‘Success: Your account has been successfully updated.’",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPateDef.user_click_on_Edit_your_account_information_link()"
});
formatter.result({
  "duration": 578808800,
  "status": "passed"
});
formatter.match({
  "location": "RetailPateDef.user_modify_below_information(DataTable)"
});
formatter.result({
  "duration": 5916395300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.user_click_on_continue_button()"
});
formatter.result({
  "duration": 366059500,
  "status": "passed"
});
formatter.match({
  "location": "RetailPateDef.user_should_see_a_message_Success_your_account_has_been_successfully_updated()"
});
formatter.result({
  "duration": 220651200,
  "status": "passed"
});
formatter.after({
  "duration": 2418071800,
  "status": "passed"
});
});