ProjectsController.$inject = [ 'TbUtils', 'projects', '$rootScope', 'periods'];

function ProjectsController(TbUtils, projects, $rootScope, periods) {
    const vm = this;

    vm.searchObj = term => { return { Name: term }; };
    vm.searchResults = [];

    vm.pageSize = 9;
    vm.get = projects.getProjectsWithPagination;
    vm.getAll = projects.getProjects;
    vm.hideLoadBtn = () => vm.projects.length !== vm.searchResults.length;

    vm.projects = [];
    vm.periodNumbers = ['',1,2,3,4,5];
    vm.periodYears = getYearsList();

    vm.goToProject = project => { TbUtils.go('main.project', { project: btoa(JSON.stringify(project)) }); };
    vm.goToNewProject = project => { TbUtils.go('main.new-project'); };
    vm.goToEdit = project => { TbUtils.go('main.edit-project', { project: btoa(JSON.stringify(project)) }); };

    vm.loading = true;

    vm.removeProjectClicked = removeProjectClicked;
    vm.toTitleCase = TbUtils.toTitleCase;
    
    TbUtils.getAndLoad(vm.get, vm.projects, () => { vm.loading = false; }, 0, vm.pageSize);

    vm.periodNumber = '';
    vm.periodYear = '';

    vm.filterByPeriod = () => {
        vm.loading = true;
        if (vm.periodNumber === '' || vm.periodNumber === null) {
            vm.periodNumber = 0;
        }
        if (vm.periodYear === '' || vm.periodYear === null) {
            vm.periodYear = 0;
        }
        projects.getProjectsByPeriod(vm.periodNumber,
                                    vm.periodYear,
                                    getProjectsByPeriodSuccess,
                                    getAnyFail);
    };

    function removeProjectClicked(project) {
        TbUtils.confirm('Eliminar Proyecto', `Esta seguro de eliminar ${project.Name}?`, 
            resolve => {
                if (resolve) {
                    vm.loading = true;
                    TbUtils.deleteAndNotify(projects.deleteProject, project, vm.projects, 
                        'El proyecto se borro exitosamente.', () => { vm.loading = false; });
                }
            });
    }

    function getProjectsByPeriodSuccess(response){
        vm.projects = response.data;
        vm.searchResults = response.data;
        vm.loading = false;
    }

    function getAnyFail(response){
        TbUtils.showErrorMessage(response);
        vm.loading = false;
    }

    function getYearsList(){
        let initialYear = 2011;
        let currentYear = (new Date()).getFullYear();
        var yearArray = [];
        for(var i=initialYear; i<=currentYear; i++){
            yearArray.push(i);
        }
        return yearArray.reverse();
    }
}

module.exports = { name: 'ProjectsController', ctrl: ProjectsController };