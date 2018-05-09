function redirect (state, toState, role, loggedIn, ev) {
	
	switch (toState) {

		// ADMIN-ONLY STATES

		case 'main.import-students':
		case 'main.new-professor':
		case 'main.reports':
		case 'main.settlement':
		case 'main.finalized':
		case 'main.admin-dashboard':
		case 'main.new-class':
		case 'main.edit-class':
		case 'main.approve-hours':
		case 'main.approve-hour':
		case 'main.classes':
		case 'main.students':
		case 'main.professors':
		case 'main.periods':
		case 'main.new-period':
		case 'main.edit-professor':
		case 'main.new-student':
		case 'main.edit-student':
			if (!loggedIn)
				goToLanding(state, ev);

			else if (role !== 'admin')
				goToDashboard(state, role, ev);
			
			break;

		// ADMIN-TEACHER STATES
		
		case 'main.edit-hours':
		case 'main.project':
		case 'main.new-project':
		case 'main.edit-project':
		case 'main.projects':
		case 'main.section':
		case 'main.sections':
		case 'main.new-section':
		case 'main.edit-section':
		case 'main.delete-section':
			if (!loggedIn) 
				goToLanding(state, ev);

			else if (role === 'student')
				goToDashboard(state, role, ev);

			break;

		// TEACHER-ONLY STATES

		case 'main.professor-dashboard':
		case 'main.evaluate-project':
			if (!loggedIn)
				goToLanding(state, ev);

			else if (role !== 'professor')
				goToDashboard(state, role, ev);

			break;

		// STUDENT-ONLY STATES

		case 'main.student-dashboard':
			if (!loggedIn)
				goToLanding(state, ev);

			else if (role !== 'student')
				goToDashboard(state, role, ev);

			break;

		case 'landing':
		case 'landing.login':
		case 'landing.enable-student':
		case 'landing.register':
		case 'landing.activate-professor': 
			if (loggedIn)
				goToDashboard(state, role, ev);
			break;

		default:
			ev.preventDefault();
			break;

	}
	
}

function goToDashboard (state, role, ev) {
	state.go(`main.${role}-dashboard`);
	ev.preventDefault();
}

function goToLanding (state, ev) {
	state.go(`landing.login`);
	ev.preventDefault();
}

module.exports = redirect;