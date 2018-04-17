config.$inject = [ '$stateProvider' ];

function config ($stateProvider) {
	const templateUrl = 'templates/components/main/section-form/section-form.html';

	$stateProvider
		.state('main.new-section', {
            url: '/secciones/nueva-seccion',
            templateUrl: templateUrl,
            controller: "NewSectionController as vm",
			onEnter: onNewEnter
		})

		.state('main.edit-section', {
            url: '/secciones/editar-seccion/{section}',
            templateUrl: templateUrl,
            controller: "EditSectionController as vm",
			onEnter: onEditEnter
		})

		.state('main.delete-section', {
            url: '/secciones/borrar-seccion/{section}',
            templateUrl: templateUrl,
            controller: "DeleteSectionController as vm",
			onEnter: onDeleteEnter
		});
}

let onNewEnter = [ '$rootScope', 
	rootScope => { 
		rootScope.viewTitle  = "Vinculación | Nueva Sección";
    	rootScope.viewStyles = "main project-form";
    }
], onEditEnter = [ '$rootScope', 
	rootScope => { 
		rootScope.viewTitle  = "Vinculación | Editar Sección";
    	rootScope.viewStyles = "main project-form";
    }
], onDeleteEnter = [ '$rootScope', 
	rootScope => { 
		rootScope.viewTitle  = "Vinculación | Borrar Sección";
    	rootScope.viewStyles = "main project-form";
    }
];

module.exports = config;