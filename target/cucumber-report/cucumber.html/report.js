$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "As user able to select course",
  "description": "",
  "id": "as-user-able-to-select-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As user able to click on apply now button",
  "description": "",
  "id": "as-user-able-to-select-course;as-user-able-to-click-on-apply-now-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Undergraduate Certificate in Immunology image",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on apply now button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first name \"\u003cFirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter surname \"\u003cSurname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should get error message",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "as-user-able-to-select-course;as-user-able-to-click-on-apply-now-button;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Surname",
        "Email"
      ],
      "line": 14,
      "id": "as-user-able-to-select-course;as-user-able-to-click-on-apply-now-button;;1"
    },
    {
      "cells": [
        "Tom",
        "patel",
        "Tom.cat@yahoo.com"
      ],
      "line": 15,
      "id": "as-user-able-to-select-course;as-user-able-to-click-on-apply-now-button;;2"
    },
    {
      "cells": [
        "Cat",
        "patel",
        "Cat.Tom@yahoo.com"
      ],
      "line": 16,
      "id": "as-user-able-to-select-course;as-user-able-to-click-on-apply-now-button;;3"
    },
    {
      "cells": [
        "TomCat",
        "patel",
        "Tomcat.cartoon@yahoo.com"
      ],
      "line": 17,
      "id": "as-user-able-to-select-course;as-user-able-to-click-on-apply-now-button;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9366330000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "As user able to click on apply now button",
  "description": "",
  "id": "as-user-able-to-select-course;as-user-able-to-click-on-apply-now-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Undergraduate Certificate in Immunology image",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on apply now button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first name \"Tom\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter surname \"patel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter email \"Tom.cat@yahoo.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should get error message",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 160256600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnUndergraduateCertificateInImmunologyImage()"
});
formatter.result({
  "duration": 1227593400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnApplyNowButton()"
});
formatter.result({
  "duration": 1789251300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnRegister()"
});
formatter.result({
  "duration": 739502300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 195924900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterSurname(String)"
});
formatter.result({
  "duration": 141523000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom.cat@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 143290900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 141426800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldGetErrorMessage()"
});
formatter.result({
  "duration": 262436200,
  "status": "passed"
});
formatter.after({
  "duration": 129000,
  "status": "passed"
});
formatter.before({
  "duration": 5087723500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As user able to click on apply now button",
  "description": "",
  "id": "as-user-able-to-select-course;as-user-able-to-click-on-apply-now-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Undergraduate Certificate in Immunology image",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on apply now button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first name \"Cat\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter surname \"patel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter email \"Cat.Tom@yahoo.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should get error message",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnUndergraduateCertificateInImmunologyImage()"
});
formatter.result({
  "duration": 929185700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnApplyNowButton()"
});
formatter.result({
  "duration": 1768377300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnRegister()"
});
formatter.result({
  "duration": 736281400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cat",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 237109700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterSurname(String)"
});
formatter.result({
  "duration": 139259500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cat.Tom@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 245351800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 160985700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldGetErrorMessage()"
});
formatter.result({
  "duration": 309802800,
  "status": "passed"
});
formatter.after({
  "duration": 43400,
  "status": "passed"
});
formatter.before({
  "duration": 5040383100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "As user able to click on apply now button",
  "description": "",
  "id": "as-user-able-to-select-course;as-user-able-to-click-on-apply-now-button;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Undergraduate Certificate in Immunology image",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on apply now button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first name \"TomCat\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter surname \"patel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter email \"Tomcat.cartoon@yahoo.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should get error message",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnUndergraduateCertificateInImmunologyImage()"
});
formatter.result({
  "duration": 1547660300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnApplyNowButton()"
});
formatter.result({
  "duration": 2501839500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnRegister()"
});
formatter.result({
  "duration": 1132348000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TomCat",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 208670200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterSurname(String)"
});
formatter.result({
  "duration": 165500300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomcat.cartoon@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 215108900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 180934700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldGetErrorMessage()"
});
formatter.result({
  "duration": 441713100,
  "status": "passed"
});
formatter.after({
  "duration": 55200,
  "status": "passed"
});
formatter.uri("menutab.feature");
formatter.feature({
  "line": 1,
  "name": "As user I am able to click on menu tab",
  "description": "",
  "id": "as-user-i-am-able-to-click-on-menu-tab",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User is able to click on all menu tab",
  "description": "",
  "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am able to click on all menu tab \"\u003cMenu\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 7,
      "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;1"
    },
    {
      "cells": [
        "Home"
      ],
      "line": 8,
      "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;2"
    },
    {
      "cells": [
        "Courses"
      ],
      "line": 9,
      "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;3"
    },
    {
      "cells": [
        "Bursaries"
      ],
      "line": 10,
      "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;4"
    },
    {
      "cells": [
        "Information for Students"
      ],
      "line": 11,
      "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;5"
    },
    {
      "cells": [
        "Events"
      ],
      "line": 12,
      "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;6"
    },
    {
      "cells": [
        "Abouts Us"
      ],
      "line": 13,
      "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5680005700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User is able to click on all menu tab",
  "description": "",
  "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am able to click on all menu tab \"Home\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 62400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 36
    }
  ],
  "location": "MenuSteps.iAmAbleToClickOnAllMenuTab(String)"
});
formatter.result({
  "duration": 1703583700,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d104.0.5112.81)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027MITESH\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2bad4de296d7ce11328da0d31806aed5, getElementText {id\u003dca621be8-1ed2-4e9e-841b-b7fe4be65183}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.81, chrome: {chromedriverVersion: 104.0.5112.79 (3cf3e8c8a07d..., userDataDir: C:\\Users\\sudha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63238}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63238/devtoo..., se:cdpVersion: 104.0.5112.81, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (2bad4de296d7ce11328da0d31806aed5)] -\u003e xpath: //ul[@class\u003d\u0027campl-unstyled-list campl-current\u0027]/li]\nSession ID: 2bad4de296d7ce11328da0d31806aed5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:201)\r\n\tat uk.ac.cam.ice.www.pages.MenuPage.clickOnMenuTab(MenuPage.java:41)\r\n\tat uk.ac.cam.ice.www.steps.MenuSteps.iAmAbleToClickOnAllMenuTab(MenuSteps.java:10)\r\n\tat ✽.When I am able to click on all menu tab \"Home\"(menutab.feature:5)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1160727300,
  "status": "passed"
});
formatter.before({
  "duration": 6717850400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User is able to click on all menu tab",
  "description": "",
  "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am able to click on all menu tab \"Courses\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 39100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Courses",
      "offset": 36
    }
  ],
  "location": "MenuSteps.iAmAbleToClickOnAllMenuTab(String)"
});
formatter.result({
  "duration": 531098500,
  "status": "passed"
});
formatter.after({
  "duration": 57000,
  "status": "passed"
});
formatter.before({
  "duration": 5207876500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User is able to click on all menu tab",
  "description": "",
  "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am able to click on all menu tab \"Bursaries\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 95600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bursaries",
      "offset": 36
    }
  ],
  "location": "MenuSteps.iAmAbleToClickOnAllMenuTab(String)"
});
formatter.result({
  "duration": 549400700,
  "status": "passed"
});
formatter.after({
  "duration": 31500,
  "status": "passed"
});
formatter.before({
  "duration": 5817238200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User is able to click on all menu tab",
  "description": "",
  "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am able to click on all menu tab \"Information for Students\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Information for Students",
      "offset": 36
    }
  ],
  "location": "MenuSteps.iAmAbleToClickOnAllMenuTab(String)"
});
formatter.result({
  "duration": 749470800,
  "status": "passed"
});
formatter.after({
  "duration": 34100,
  "status": "passed"
});
formatter.before({
  "duration": 7619792300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User is able to click on all menu tab",
  "description": "",
  "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am able to click on all menu tab \"Events\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Events",
      "offset": 36
    }
  ],
  "location": "MenuSteps.iAmAbleToClickOnAllMenuTab(String)"
});
formatter.result({
  "duration": 826991800,
  "status": "passed"
});
formatter.after({
  "duration": 28000,
  "status": "passed"
});
formatter.before({
  "duration": 6978722900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User is able to click on all menu tab",
  "description": "",
  "id": "as-user-i-am-able-to-click-on-menu-tab;user-is-able-to-click-on-all-menu-tab;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am able to click on all menu tab \"Abouts Us\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 35700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abouts Us",
      "offset": 36
    }
  ],
  "location": "MenuSteps.iAmAbleToClickOnAllMenuTab(String)"
});
formatter.result({
  "duration": 553919100,
  "status": "passed"
});
formatter.after({
  "duration": 34000,
  "status": "passed"
});
formatter.uri("searchcourses.feature");
formatter.feature({
  "line": 1,
  "name": "As user I am able to search courses",
  "description": "",
  "id": "as-user-i-am-able-to-search-courses",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6718599200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User is able to search course",
  "description": "",
  "id": "as-user-i-am-able-to-search-courses;user-is-able-to-search-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter anthropology into search box",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify total found courses",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 59600,
  "status": "passed"
});
formatter.match({
  "location": "CourseSteps.iEnterAnthropologyIntoSearchBox()"
});
formatter.result({
  "duration": 214273900,
  "status": "passed"
});
formatter.match({
  "location": "CourseSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 210073200,
  "status": "passed"
});
formatter.match({
  "location": "CourseSteps.iVerifyTotalFoundCourses()"
});
formatter.result({
  "duration": 2097647000,
  "status": "passed"
});
formatter.after({
  "duration": 147800,
  "status": "passed"
});
});