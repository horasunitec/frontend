config.$inject = [ '$stateProvider' ];

function config ($stateProvider) {

	$stateProvider
		.state('main.new-student', {
			url: '/alumnos/nuevo-alumno',
			templateUrl: 'templates/components/main/student-form/student-form.html',
			controller: "NewStudentController as vm",
			onEnter: newStudentStateEnter
		})

		.state('main.edit-student', {
			url: '/alumnos/editar-alumno/{student}',
			templateUrl: 'templates/components/main/student-form/student-form.html',
			controller: "EditStudentController as vm",
			onEnter: editStudentStateEnter
		});
}

const newStudentStateEnter = [ '$rootScope', 
	rootScope => { 
		rootScope.viewTitle  = "Vinculación | Nuevo Alumno";
    	rootScope.viewStyles = "main project-form";
    }
], editStudentStateEnter = [ '$rootScope', 
	rootScope => { 
		rootScope.viewTitle  = "Vinculación | Editar Alumno";
    	rootScope.viewStyles = "main project-form";
    }
];

module.exports = config;