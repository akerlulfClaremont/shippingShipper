jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 TenderShipperSet in the list
// * All 3 TenderShipperSet have at least one ShipperToAgentNav

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/agent/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/agent/test/integration/pages/App",
	"com/agent/test/integration/pages/Browser",
	"com/agent/test/integration/pages/Master",
	"com/agent/test/integration/pages/Detail",
	"com/agent/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.agent.view."
	});

	sap.ui.require([
		"com/agent/test/integration/MasterJourney",
		"com/agent/test/integration/NavigationJourney",
		"com/agent/test/integration/NotFoundJourney",
		"com/agent/test/integration/BusyJourney",
		"com/agent/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});