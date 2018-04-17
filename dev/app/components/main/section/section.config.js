config.$inject = [ '$stateProvider' ];

function config ($stateProvider) {

	$stateProvider
		.state('main.section', {
            url: '/secciones/?section',
            templateUrl: 'templates/components/main/section/section.html',
            controller: "SectionController as vm",
			onEnter: onStateEnter
		});
}

let onStateEnter = [ '$rootScope', 
	function (rootScope) { 
		rootScope.viewTitle  = "Vinculación | Sección";
    	rootScope.viewStyles = "main section";
    }
];

module.exports = config;