sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageBox"],
    function (Controller, MessageBox) {
        "use strict"

        return Controller.extend("root.view2.App", {
            
            onSayHello: function() {
                MessageBox.information("Hello World");
            }
        })


    }
)