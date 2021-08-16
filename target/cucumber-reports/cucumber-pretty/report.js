$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/TEST Automation - Selenium Java/1. Latest Cucumber Working File - Test Automation BDD - 07th June 2021/Cucumber_with_POM_TestNG_ParallelExecution/src/main/java/com/qa/features/1_NTT_CRM_file_01.feature");
formatter.feature({
  "line": 1,
  "name": "Dynamics CRM application test",
  "description": "",
  "id": "dynamics-crm-application-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#With Examples Keyword: Here Scenario Outline is needed."
    }
  ],
  "line": 3,
  "name": "Verify Dynamics CRM Login functionality",
  "description": "",
  "id": "dynamics-crm-application-test;verify-dynamics-crm-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user types \"\u003cusername\u003e\" and clicks Next",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user types \"\u003cpassword\u003e\" and clicks SignIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on the Yes option",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user validates Dynamics CRM home page title Page",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 11,
      "value": "##Below is a Parameterisation example using Examples."
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "id": "dynamics-crm-application-test;verify-dynamics-crm-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "dynamics-crm-application-test;verify-dynamics-crm-login-functionality;;1"
    },
    {
      "cells": [
        "admin@CRM215677.onmicrosoft.com",
        "pf8POcMEtF"
      ],
      "line": 15,
      "id": "dynamics-crm-application-test;verify-dynamics-crm-login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11732754300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Dynamics CRM Login functionality",
  "description": "",
  "id": "dynamics-crm-application-test;verify-dynamics-crm-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user types \"admin@CRM215677.onmicrosoft.com\" and clicks Next",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user types \"pf8POcMEtF\" and clicks SignIn button",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on the Yes option",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user validates Dynamics CRM home page title Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps_01.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 1289188900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@CRM215677.onmicrosoft.com",
      "offset": 12
    }
  ],
  "location": "HomePageSteps_01.enter_UserName_and_clicked_Next(String)"
});
formatter.result({
  "duration": 1244721900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pf8POcMEtF",
      "offset": 12
    }
  ],
  "location": "HomePageSteps_01.user_types_and_clicks_SignIn_button(String)"
});
formatter.result({
  "duration": 3493799100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps_01.user_clicks_on_the_Yes_option()"
});
formatter.result({
  "duration": 12282411400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps_01.dynamics_CRM_home_page_is_displayed()"
});
