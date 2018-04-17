config.$inject = [ '$stateProvider' ];

function config ($stateProvider) {

	$stateProvider
		.state('main.reports', {
			url: '/reportes',
			templateUrl: 'templates/components/main/reports/reports.html',
			controller: "ReportsController as vm",
			onEnter: onStateEnter
		});
}

let onStateEnter = [ '$rootScope', 
	function (rootScope) { 
		rootScope.viewTitle  = "Vinculación | Reportes";
    	rootScope.viewStyles = "main reports";
    }
];

module.exports = config;