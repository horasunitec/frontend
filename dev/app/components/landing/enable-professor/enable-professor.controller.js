EnableProfessorController.$inject = [ 'TbUtils', 'professors', 'majors' ];

function EnableProfessorController (TbUtils,  professors, majors) {
	const vm = this;

  vm.professor = {
    AccountId: "",
    Email: "",
    Password: "",
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

    TbUtils.postAndGoTo(professors.enableProfessor, vm.professor, 'landing.login', 
      'Revisa tu correo con el link, para activar tu cuenta.', () => { vm.submitting = false; });
  }

}

module.exports = { name: 'EnableProfessorController', ctrl: EnableProfessorController };
