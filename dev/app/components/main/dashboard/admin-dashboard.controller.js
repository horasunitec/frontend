AdminDashboardController.$inject = [ 'TbUtils', 'sectionProjects'];

function AdminDashboardController (TbUtils, sectionProjects) {
	const vm = this;

	vm.sectionProjects = [];
	vm.tableSchema = require('../../../table-schemas/unapproved-hours-table-schema');

	

	//mandar el parametro de las horas a aprobar
	vm.goToApproveHours = _sectionProject => { TbUtils.go('main.approve-hour', 
									{ _sectionProject: btoa(JSON.stringify(_sectionProject)) }); };
	vm.toTitleCase = TbUtils.toTitleCase;

	vm.loading = true;

	TbUtils.getAndLoad(sectionProjects.getUnapproved, vm.sectionProjects, () => { vm.loading = false; });
}

module.exports = { name: 'AdminDashboardController', ctrl: AdminDashboardController };
