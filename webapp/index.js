sap.ui.define(["sap/ui/core/mvc/XMLView", "sap/ui/core/ComponentContainer"], function (XMLView, ComponentContainer) {
    "use strict";

    // XMLView.create({
    //     id: "App",
    //     viewName: "root.view.App"
    // }).then(function (oView) {
    //     oView.placeAt("content");
    // });

    var oContainer = new ComponentContainer({
        id: "container",
        name: "root",
        manifest: true,
        async: true,
        settings: {
            id: "root"
        }
    });
    oContainer.placeAt("content");

});