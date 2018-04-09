ApproveHourController.$inject = [ 'TbUtils', 'hours' ,'$stateParams' ];

function ApproveHourController(TbUtils, hours, stateParams) {
    const vm = this;

    // obtener el parametro
    vm.sectionProject = JSON.parse(atob(stateParams._sectionProject));
    vm.model = vm.sectionProject;

    vm.toTitleCase = TbUtils.toTitleCase;
    vm.getPeriod = getPeriod;
    vm.approveHour = approveHour;
    searchInfo(vm.model.Id);

    //format text
    //vm.model.Section.Project.Name = vm.toTitleCase(vm.model.Section.Project.Name);

    vm.loading = false;

    function getPeriod(period) {
        if (period.Number & period.Year) {
            return "" + period.Number + " - " + period.Year;
        }
        return "Periodo No Asignado";
    }

    function searchInfo (term) {
        vm.loading = true;

        hours.getHoursInfoSectionProjects(term, getHoursInfoSectionProjects,
            getHoursInfoSectionProjectsFail, () => { vm.loading = false; });
    }

    function getHoursInfoSectionProjects(response) {
        vm.model = response.data;
        if(vm.model.IsApproved)
        	TbUtils.displayNotification('warning', 'Advertencia',
            'Estas horas ya fueron Aprobadas');
    }

    function getHoursInfoSectionProjectsFail(response) {
        TbUtils.showErrorMessage(response);
    }

    function approveHour() {
        vm.loading = true;
        hours.putSectionProjectsApprove(vm.model.Id, putSectionProjectsApproveSuccess,
            putSectionProjectsApproveFail, () => { vm.loading = false; });
    }

    function putSectionProjectsApproveSuccess(){
    	TbUtils.displayNotification('success', 'Exitoso',
            'Horas aprobadas correctamente.');
    	//TbUtils.reload()
        TbUtils.go('main.admin-dashboard'); 
    }

    function putSectionProjectsApproveFail(resp){
    	TbUtils.showErrorMessage(resp);
    }
}

module.exports = {
    name: 'ApproveHourController',
    ctrl: ApproveHourController
};