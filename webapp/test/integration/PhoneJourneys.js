jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/agent/test/integration/NavigationJourneyPhone",
		"com/agent/test/integration/NotFoundJourneyPhone",
		"com/agent/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});