$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("laptopsAndNotebook.feature");
formatter.feature({
  "line": 3,
  "name": "Login to Retail Website",
  "description": "",
  "id": "login-to-retail-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@LaptopsPageComplete"
    }
  ]
});
formatter.before({
  "duration": 3979428800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_on_Retail_Website()"
});
formatter.result({
  "duration": 1812049600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_on_Laptops_And_Notebook()"
});
formatter.result({
  "duration": 152054700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_ShowAll_Laptps_And_Notebook()"
});
formatter.result({
  "duration": 444976700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Add and Remove a Mac book from Cart",
  "description": "",
  "id": "login-to-retail-website;add-and-remove-a-mac-book-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Add\u0026Remove"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User click on MacBook  item",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should see a message ‘Success: You have added MacBook to your shopping cart!’",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User should see \u00271\u0027 tems-\u0027602.00\u0027 showed to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on cart option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click on red X button to remove the item from cart",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "item should be removed and cart should show 0 item s",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_MacBook_item()"
});
formatter.result({
  "duration": 1216599600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageDef.user_click_add_to_Cart_button()"
});
formatter.result({
  "duration": 123339300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_should_see_a_message_Success_you_have_addes_MacBook_to_your_shopping_cart()"
});
formatter.result({
  "duration": 475719300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_should_see_item_s_showed_to_the_cart()"
});
formatter.result({
  "duration": 220105800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_cart_option()"
});
formatter.result({
  "duration": 69601200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_red_x_button_to_remove_the_item_from_cart()"
});
formatter.result({
  "duration": 82384600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.item_should_be_remove_and_cart_should_show_item()"
});
formatter.result({
  "duration": 345865700,
  "status": "passed"
});
formatter.after({
  "duration": 4742627700,
  "status": "passed"
});
formatter.before({
  "duration": 1890076500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_on_Retail_Website()"
});
formatter.result({
  "duration": 2387482300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_on_Laptops_And_Notebook()"
});
formatter.result({
  "duration": 157001700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_ShowAll_Laptps_And_Notebook()"
});
formatter.result({
  "duration": 452209100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Product Comparison",
  "description": "",
  "id": "login-to-retail-website;product-comparison",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@compare"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#Given User is on Retail website"
    },
    {
      "line": 26,
      "value": "#When User click on Laptop \u0026NoteBook tab"
    },
    {
      "line": 27,
      "value": "#And User click on Show all Laptop \u0026NoteBook option"
    }
  ],
  "line": 28,
  "name": "User click on product comparison icon on ‘MacBook’",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on product comparison icon on ‘MacBook Air",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should see a message ‘Success: You have added MacBook Air to your product comparison!’",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User click on Product comparison link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should see Product Comparison Chart",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_product_comparison_icon_on_MacBook()"
});
formatter.result({
  "duration": 101017600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_product_comparison_icon_on_MacBook_Air()"
});
formatter.result({
  "duration": 5122293900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_should_see_a_message()"
});
formatter.result({
  "duration": 56458400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_product_comparison_link()"
});
formatter.result({
  "duration": 1490270800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_should_see_Product_Comparison_Chart()"
});
formatter.result({
  "duration": 10275811400,
  "status": "passed"
});
formatter.after({
  "duration": 2258140400,
  "status": "passed"
});
formatter.before({
  "duration": 2127320200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_on_Retail_Website()"
});
formatter.result({
  "duration": 2362066200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_on_Laptops_And_Notebook()"
});
formatter.result({
  "duration": 196422100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_ShowAll_Laptps_And_Notebook()"
});
formatter.result({
  "duration": 425955100,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Adding an item to Wish list",
  "description": "",
  "id": "login-to-retail-website;adding-an-item-to-wish-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@washlist"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#Given User is on Retail website"
    },
    {
      "line": 37,
      "value": "#When User click on Laptop \u0026NoteBook tab"
    },
    {
      "line": 38,
      "value": "#And User click on Show all Laptop \u0026NoteBook option"
    }
  ],
  "line": 39,
  "name": "User click on heart icon to add ‘Sony VaIO’ laptop to wish list",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User should get a message ‘You must login or create an account to save Sony VAIO to your wish list!’",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_heath_icon_to_add_sony_VaIO_laptop_to_wish_list()"
});
formatter.result({
  "duration": 5093032000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_should_get_a_message()"
});
formatter.result({
  "duration": 471907400,
  "status": "passed"
});
formatter.after({
  "duration": 769433800,
  "status": "passed"
});
formatter.before({
  "duration": 2066455800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_on_Retail_Website()"
});
formatter.result({
  "duration": 1869049100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_on_Laptops_And_Notebook()"
});
formatter.result({
  "duration": 131713900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_ShowAll_Laptps_And_Notebook()"
});
formatter.result({
  "duration": 383295100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Validate the price of MacBook Pro is 2000",
  "description": "",
  "id": "login-to-retail-website;validate-the-price-of-macbook-pro-is-2000",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@Validate"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 44,
      "value": "#Given User is on Retail website"
    },
    {
      "line": 45,
      "value": "#When User click on Laptop \u0026NoteBook tab"
    },
    {
      "line": 46,
      "value": "#And User click on Show all Laptop \u0026NoteBook option"
    }
  ],
  "line": 47,
  "name": "User click on ‘MacBook Pro’ item",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User should see  $\u00272000.00\u0027 price tag is present on UI",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_click_on_MacBook_Pro_item()"
});
formatter.result({
  "duration": 1197928800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebookPageDef.user_should_see_$_price_tag_is_present_on_UI()"
});
formatter.result({
  "duration": 246199600,
  "status": "passed"
});
formatter.after({
  "duration": 5131518400,
  "status": "passed"
});
});