EditStudentController.$inject = [ 'TbUtils', 'students', 'majors', '$stateParams' ];

function EditStudentController (TbUtils, students, majors, stateParams) {
	const vm = this;
	vm.student = JSON.parse(atob(stateParams.student));
	const oldAccountId = vm.student.AccountId;

	vm.formTitle = "Editar Estudiante";
    vm.submitting = false;
    vm.submit = submit;

    function submit () {
    	vm.submitting = true;

    	TbUtils.updateAndGoTo(students.update, oldAccountId, vm.student, 'main.students', 
			'Estudiante actualizado.', () => { vm.submitting = false; });
    }

}

module.exports = { name: 'EditStudentController', ctrl: EditStudentController };