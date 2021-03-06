EnableStudentController.$inject = [ 'TbUtils', 'students', 'majors' ];

function EnableStudentController (TbUtils,  students, majors) {
	const vm = this;

  vm.student = {
    AccountId: "",
    Email: "",
    Password: "",
    MajorId: 0,
    FirstName:"",
    LastName:""
  };

  vm.majors = [];
  vm.submitting = false;
  vm.submit = submit;
  vm.majorsLoading = true;
  TbUtils.getAndLoad(majors.getMajors, vm.majors, () => { vm.majorsLoading = false;});

  function submit (){
    vm.submitting = true;

    TbUtils.postAndGoTo(students.enableStudent, vm.student, 'landing.login', 
      'Revisa tu correo con el link, para activar tu cuenta.', () => { vm.submitting = false; });
  }

}

module.exports = { name: 'EnableStudentController', ctrl: EnableStudentController };
