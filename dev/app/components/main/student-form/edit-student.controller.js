EditStudentController.$inject = [ 'TbUtils', 'students', 'majors', '$stateParams' ];

function EditStudentController (TbUtils, students, majors, stateParams) {
	const vm = this;

	// var studentInyected = JSON.parse(atob(stateParams.student));
 //    vm.student = {
 //        AccountId = studentInyected.AccountId,
 //        Name = studentInyected.Name,
 //        MajorId = studentInyected.Major.MajorId,
 //        Campus = studentInyected.Campus,
 //        Email = studentInyected.Email
 //    };

	vm.student = JSON.parse(atob(stateParams.student));
	vm.student.MajorId = vm.student.Major.MajorId;

	const oldAccountId = vm.student.AccountId;

	vm.formTitle = "Editar Estudiante";
    vm.submitting = false;
	vm.majorsLoading = true;
	vm.majors = [];
    vm.submit = submit;

    TbUtils.getAndLoad(majors.getMajors, vm.majors, () => { vm.majorsLoading = false;});

    function submit () {
    	vm.submitting = true;

    	TbUtils.updateAndGoTo(students.update, oldAccountId, vm.student, 'main.students', 
			'Estudiante actualizado.', () => { vm.submitting = false; });
    }

}

module.exports = { name: 'EditStudentController', ctrl: EditStudentController };