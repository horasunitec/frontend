config.$inject = [ '$stateProvider' ];

function config ($stateProvider) {

	$stateProvider
		.state('main.finalized', {
			url: '/finiquitados',
			templateUrl: 'templates/components/main/finalized/finalized.html',
			controller: "FinalizedController as vm",
			onEnter: onStateEnter
		});
}

const onStateEnter = [ '$rootScope', 
	rootScope => { 
		rootScope.viewTitle  = "Vinculación | Finiquitados";
    	rootScope.viewStyles = "main finalized";
    }
];

module.exports = config;