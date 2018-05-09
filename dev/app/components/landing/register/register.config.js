config.$inject = [ '$stateProvider' ];

function config ($stateProvider) {

	$stateProvider
		.state('landing.register', {
			url: '/',
			templateUrl: "templates/components/landing/register/register.html",
			controller: 'RegisterController as vm',
			onEnter: onStateEnter
		});
}

let onStateEnter = [ '$rootScope', 
	function (rootScope) { 
		rootScope.viewTitle  = "Vinculación | Bienvenido";
    	rootScope.viewStyles = "landing register";
    }
];

module.exports = config;