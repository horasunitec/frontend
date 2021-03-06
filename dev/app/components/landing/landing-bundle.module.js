const config = require('./landing.config'),
      Login  = require('./login/login.module'),
      EnableStudent = require('./enable-student/enable-student.module'),
      EnableProfessor = require('./enable-professor/enable-professor.module'),
      ActivateProfessor = require('./activate-professor/activate-professor.module'),
      Register = require('./register/register.module');
      
const moduleName   = 'landing-bundle',
      dependencies = [ Login, EnableStudent, EnableProfessor, ActivateProfessor, Register];

angular.module(moduleName, dependencies)
	.config(config);

module.exports = moduleName;
