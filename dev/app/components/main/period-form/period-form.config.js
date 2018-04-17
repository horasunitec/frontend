config.$inject = [ '$stateProvider' ];

function config ($stateProvider) {
	const templateUrl = 'templates/components/main/period-form/period-form.html';

	$stateProvider
		.state('main.new-period', {
			url: '/periodos/nuevo-periodo',
			templateUrl: templateUrl,
			controller: "NewPeriodController as vm",
			onEnter: onStateEnterNew
		});
}

const onStateEnterNew = [ '$rootScope', 
	rootScope => { 
		rootScope.viewTitle  = "Vinculación | Nuevo Periodo";
    	rootScope.viewStyles = "main period-form";
    }
];

module.exports = config;