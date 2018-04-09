config.$inject = [ '$stateProvider' ];

function config ($stateProvider) {

	$stateProvider
		.state('main.approve-hour', {
			url: '/aprobar-hora/{_sectionProject}',
			templateUrl: 'templates/components/main/approve-hour/approve-hour.html',
			controller: "ApproveHourController as vm",
			onEnter: onStateEnter
		});
}

const onStateEnter = [ '$rootScope', 
	rootScope => { 
		rootScope.viewTitle  = "Vinculacion | Aprobar Hora";
    	rootScope.viewStyles = "main approve-hour";
    }
];

module.exports = config;