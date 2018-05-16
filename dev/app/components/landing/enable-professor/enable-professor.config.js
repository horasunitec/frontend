config.$inject = [ '$stateProvider' ];

function config ($stateProvider) {

	$stateProvider
		.state('landing.enable-professor', {
			url: '/habilitar-profesor',
			templateUrl: 'templates/components/landing/enable-professor/enable-professor.html',
			controller: "EnableProfessorController as vm",
			onEnter: onStateEnter
		});
}

let onStateEnter = [ '$rootScope',
	function(rootScope){
		rootScope.viewTitle  = "Registrar Profesor";
    	rootScope.viewStyles = "landing activate-professor";
    }
];

module.exports = config;
