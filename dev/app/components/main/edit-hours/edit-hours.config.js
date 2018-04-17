config.$inject = [ '$stateProvider' ];

function config ($stateProvider) {

	$stateProvider
		.state('main.edit-hours', {
			url: '/secciones/editar-horas/{projectId}/{sectionId}',
			templateUrl: 'templates/components/main/edit-hours/edit-hours.html',
			controller: "EditHoursController as vm",
			onEnter: onStateEnter
		});
}

const onStateEnter = [ '$rootScope',
	rootScope => {
		rootScope.viewTitle  = "Vinculación | Editar Horas";
    	rootScope.viewStyles = "main edit-hours";
    }
];

module.exports = config;
