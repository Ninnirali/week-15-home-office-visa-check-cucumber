$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("visaConfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "Visa requirements for non UK resident",
  "description": "As a user i want to explore visa requirements of different nationality",
  "id": "visa-requirements-for-non-uk-resident",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "an Australian Coming To UK For Tourism",
  "description": "",
  "id": "visa-requirements-for-non-uk-resident;an-australian-coming-to-uk-for-tourism",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Start Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept additional cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Nationality \"\u003cnationality\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select reason for visit \"\u003creasonForVisit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see \"\u003cresultMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "visa-requirements-for-non-uk-resident;an-australian-coming-to-uk-for-tourism;",
  "rows": [
    {
      "cells": [
        "nationality",
        "reasonForVisit",
        "resultMessage"
      ],
      "line": 17,
      "id": "visa-requirements-for-non-uk-resident;an-australian-coming-to-uk-for-tourism;;1"
    },
    {
      "cells": [
        "Australia",
        "Tourism",
        "You will not need a visa to come to the UK"
      ],
      "line": 18,
      "id": "visa-requirements-for-non-uk-resident;an-australian-coming-to-uk-for-tourism;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4968685000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "an Australian Coming To UK For Tourism",
  "description": "",
  "id": "visa-requirements-for-non-uk-resident;an-australian-coming-to-uk-for-tourism;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Start Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept additional cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Nationality \"Australia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select reason for visit \"Tourism\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see \"You will not need a visa to come to the UK\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StartPageSteps.iAmOnStartPage()"
});
formatter.result({
  "duration": 107717300,
  "status": "passed"
});
formatter.match({
  "location": "StartPageSteps.iAcceptAdditionalCookies()"
});
formatter.result({
  "duration": 144040600,
  "status": "passed"
});
formatter.match({
  "location": "StartPageSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 392132000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 22
    }
  ],
  "location": "SelectNationalitySteps.iSelectNationality(String)"
});
formatter.result({
  "duration": 103270400,
  "status": "passed"
});
formatter.match({
  "location": "SelectNationalitySteps.iClickNextStepButton()"
});
formatter.result({
  "duration": 279723800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism",
      "offset": 27
    }
  ],
  "location": "ReasonForTravelSteps.iSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 71044000,
  "status": "passed"
});
formatter.match({
  "location": "SelectNationalitySteps.iClickNextStepButton()"
});
formatter.result({
  "duration": 345512500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 14
    }
  ],
  "location": "ResultSteps.iShouldSee(String)"
});
formatter.result({
  "duration": 55887200,
  "status": "passed"
});
formatter.after({
  "duration": 779207200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "a Chilean Coming To The UK For Work And Plans On Staying For Longer Than Six Months",
  "description": "",
  "id": "visa-requirements-for-non-uk-resident;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-six-months",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on Start Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I accept additional cookies",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select Nationality \"\u003cnationality\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select reason for visit \"\u003creasonForVisit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select intent to stay for \"more than 6 months\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see \"\u003cresultMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "visa-requirements-for-non-uk-resident;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-six-months;",
  "rows": [
    {
      "cells": [
        "nationality",
        "reasonForVisit",
        "jobType",
        "resultMessage"
      ],
      "line": 36,
      "id": "visa-requirements-for-non-uk-resident;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-six-months;;1"
    },
    {
      "cells": [
        "Chile",
        "Work, academic visit or business",
        "Health and care professional",
        "You need a visa to work in health and care"
      ],
      "line": 37,
      "id": "visa-requirements-for-non-uk-resident;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-six-months;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2208975000,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "a Chilean Coming To The UK For Work And Plans On Staying For Longer Than Six Months",
  "description": "",
  "id": "visa-requirements-for-non-uk-resident;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-six-months;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on Start Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I accept additional cookies",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select Nationality \"Chile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select reason for visit \"Work, academic visit or business\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select intent to stay for \"more than 6 months\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select job type \"Health and care professional\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see \"You need a visa to work in health and care\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StartPageSteps.iAmOnStartPage()"
});
formatter.result({
  "duration": 29400,
  "status": "passed"
});
formatter.match({
  "location": "StartPageSteps.iAcceptAdditionalCookies()"
});
formatter.result({
  "duration": 158030600,
  "status": "passed"
});
formatter.match({
  "location": "StartPageSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 388708800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 22
    }
  ],
  "location": "SelectNationalitySteps.iSelectNationality(String)"
});
formatter.result({
  "duration": 96116900,
  "status": "passed"
});
formatter.match({
  "location": "SelectNationalitySteps.iClickNextStepButton()"
});
formatter.result({
  "duration": 257036700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 27
    }
  ],
  "location": "ReasonForTravelSteps.iSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 76476200,
  "status": "passed"
});
formatter.match({
  "location": "SelectNationalitySteps.iClickNextStepButton()"
});
formatter.result({
  "duration": 271846100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more than 6 months",
      "offset": 29
    }
  ],
  "location": "DurationOfStaySteps.iSelectIntentToStayFor(String)"
});
formatter.result({
  "duration": 82221700,
  "status": "passed"
});
formatter.match({
  "location": "SelectNationalitySteps.iClickNextStepButton()"
});
formatter.result({
  "duration": 253383500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 19
    }
  ],
  "location": "WorkTypePageSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 84128600,
  "status": "passed"
});
formatter.match({
  "location": "SelectNationalitySteps.iClickNextStepButton()"
});
formatter.result({
  "duration": 303167800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 14
    }
  ],
  "location": "ResultSteps.iShouldSee(String)"
});
formatter.result({
  "duration": 60667000,
  "status": "passed"
});
formatter.after({
  "duration": 784210300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "a Columbian National Coming To The UK To Join A Partner For A Long Stay They Do Have An Article 10Or20 Card",
  "description": "",
  "id": "visa-requirements-for-non-uk-resident;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay-they-do-have-an-article-10or20-card",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "I am on Start Page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I accept additional cookies",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select Nationality \"\u003cnationality\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select reason for visit \"\u003creasonForVisit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I select state My partner of family member have uk immigration status \u0027yes\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I click on Continue",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I should see \"\u003cresultMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "visa-requirements-for-non-uk-resident;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay-they-do-have-an-article-10or20-card;",
  "rows": [
    {
      "cells": [
        "nationality",
        "reasonForVisit",
        "resultMessage"
      ],
      "line": 53,
      "id": "visa-requirements-for-non-uk-resident;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay-they-do-have-an-article-10or20-card;;1"
    },
    {
      "cells": [
        "Colombia",
        "Join partner or family for a long stay",
        "You’ll need a visa to join your family or partner in the UK"
      ],
      "line": 54,
      "id": "visa-requirements-for-non-uk-resident;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay-they-do-have-an-article-10or20-card;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2190404600,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "a Columbian National Coming To The UK To Join A Partner For A Long Stay They Do Have An Article 10Or20 Card",
  "description": "",
  "id": "visa-requirements-for-non-uk-resident;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay-they-do-have-an-article-10or20-card;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "I am on Start Page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I accept additional cookies",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select Nationality \"Colombia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select reason for visit \"Join partner or family for a long stay\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click next step button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I select state My partner of family member have uk immigration status \u0027yes\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I click on Continue",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I should see \"You’ll need a visa to join your family or partner in the UK\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StartPageSteps.iAmOnStartPage()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "StartPageSteps.iAcceptAdditionalCookies()"
});
formatter.result({
  "duration": 139426300,
  "status": "passed"
});
formatter.match({
  "location": "StartPageSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 376972500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 22
    }
  ],
  "location": "SelectNationalitySteps.iSelectNationality(String)"
});
formatter.result({
  "duration": 86083600,
  "status": "passed"
});
formatter.match({
  "location": "SelectNationalitySteps.iClickNextStepButton()"
});
formatter.result({
  "duration": 285178200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join partner or family for a long stay",
      "offset": 27
    }
  ],
  "location": "ReasonForTravelSteps.iSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 65990600,
  "status": "passed"
});
formatter.match({
  "location": "SelectNationalitySteps.iClickNextStepButton()"
});
formatter.result({
  "duration": 341372600,
  "status": "passed"
});
formatter.match({
  "location": "FamilyImmigrationStatusSteps.iSelectStateMyPartnerOfFamilyMemberHaveUkImmigrationStatusYes()"
});
formatter.result({
  "duration": 126154700,
  "status": "passed"
});
formatter.match({
  "location": "FamilyImmigrationStatusSteps.iClickOnContinue()"
});
formatter.result({
  "duration": 333836300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You’ll need a visa to join your family or partner in the UK",
      "offset": 14
    }
  ],
  "location": "ResultSteps.iShouldSee(String)"
});
formatter.result({
  "duration": 51491400,
  "status": "passed"
});
formatter.after({
  "duration": 845962000,
  "status": "passed"
});
});