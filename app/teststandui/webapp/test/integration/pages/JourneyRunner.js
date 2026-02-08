sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/teststand/ui/teststandui/test/integration/pages/Interactions_HeaderList",
	"com/teststand/ui/teststandui/test/integration/pages/Interactions_HeaderObjectPage",
	"com/teststand/ui/teststandui/test/integration/pages/Interactions_ItemsObjectPage"
], function (JourneyRunner, Interactions_HeaderList, Interactions_HeaderObjectPage, Interactions_ItemsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/teststand/ui/teststandui') + '/test/flpSandbox.html#comteststanduiteststandui-tile',
        pages: {
			onTheInteractions_HeaderList: Interactions_HeaderList,
			onTheInteractions_HeaderObjectPage: Interactions_HeaderObjectPage,
			onTheInteractions_ItemsObjectPage: Interactions_ItemsObjectPage
        },
        async: true
    });

    return runner;
});

