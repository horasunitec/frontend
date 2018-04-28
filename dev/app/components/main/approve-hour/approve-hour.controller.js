ApproveHourController.$inject = [ 'TbUtils', 'hours' , 'sections', '$stateParams' ];

function ApproveHourController(TbUtils, hours, sections, stateParams) {
    const vm = this;

    // obtener el parametro
    vm.sectionProject = JSON.parse(atob(stateParams._sectionProject));
    
    //asignar funciones
    vm.toTitleCase = TbUtils.toTitleCase;
    vm.getPeriod = getPeriod;
    vm.approveHour = approveHour;
    
    //popular data
    vm.studentsHours = [];
    vm.model = vm.sectionProject;
    vm.loading = true;

    sections.getStudentsHoursBySectionProjectId(vm.sectionProject.Section.Id, 
                                                vm.sectionProject.Project.Id, 
                                                getStudentsHoursSuccess, 
                                                getStudentsHoursFail);

    function getStudentsHoursSuccess(response){
        vm.studentsHours = response.data.Hours;
        vm.loading = false;
    }

    function getStudentsHoursFail(response){
        vm.loading = false;
        TbUtils.showErrorMessage(response);
    }

    function getPeriod(period) {
        if (period.Number & period.Year) {
            return "" + period.Number + " - " + period.Year;
        }
        return "Periodo No Asignado";
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