AdminDashboardController.$inject = [ 'TbUtils'];

function AdminDashboardController (TbUtils) {
	const vm = this;	
	vm.toTitleCase = TbUtils.toTitleCase;
	vm.loading = true;
	vm.loading = false;
}

module.exports = { name: 'AdminDashboardController', ctrl: AdminDashboardController };
