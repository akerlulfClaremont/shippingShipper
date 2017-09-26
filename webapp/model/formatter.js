sap.ui.define([], function() {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function(sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(0);
		},

		enabledEnd: function(sState) {
			if (sState === "CF") {
				return true;
			} else {
				return false;
			}

		},

		enabledCreateTender: function(sState) {
			if (sState === "") {
				return true;
			} else {
				return false;
			}

		},

		stateTndrstMaster: function(sState) {
			if (sState === "NW") {
				return "Warning";
			} else if (sState === "CF") {
				return "Success";
			} else {
				return "None";
			}

		},
		
		stateTndrst: function(sState) {
			if (sState === "NW") {
				return "Warning";
			} else if (sState === "AC") {
				return "Success";
			} else if (sState === "CF" || sState === "CN") {
				return "None";
			} else {
				return "Error";
			}

		},

		tableSelect: function(sState) {
			if (sState === "CF") {
				return "None";
			} else {
				return "SingleSelect";
			}
		},

		stateText: function(sState) {
			if (sState === "NW") {
				return "New offer from shipper";
			} else if (sState === "AC") {
				return "Accepted by forwarding agent";
			} else if (sState === "RJ") {
				return "Rejected by forwarding agent";
			} else if (sState === "CF") {
				return "Confirmed by shipper";
			} else if (sState === "CN") {
				return "Offer canceled";
			} else {
				return "Not offered to forwarding agent";
			}
		},

		tabRejected: function(sState) {
			if (sState === "RJ") {
				return true;
			} else {
				return false;
			}
		},
		
		tabAccepted: function(sState) {
			if (sState === "AC") {
				return true;
			} else {
				return false;
			}
		},
		
		tabConfirmed: function(sState) {
			if (sState === "CF") {
				return true;
			} else {
				return false;
			}
		},

		statusIcon: function(sState) {
			if (sState === "NW") {
				return "sap-icon://sys-help";
			} else if (sState === "AC") {
				return "sap-icon://sys-enter";
			} else if (sState === "CF") {
				return "sap-icon://sys-enter-2";
			} else {
				return "sap-icon://sys-cancel";
			}

		}
	};

});