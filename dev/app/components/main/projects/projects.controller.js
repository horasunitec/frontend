ProjectsController.$inject = [ 'TbUtils', 'projects', '$rootScope' ];

function ProjectsController(TbUtils, projects, $rootScope) {
    const vm = this;

    vm.searchObj = term => { return { Name: term }; };
    vm.searchResults = [];

    vm.pageSize = 9;
    vm.get = projects.getProjectsWithPagination;
    vm.getAll = projects.getProjects;
    vm.hideLoadBtn = () => vm.projects.length !== vm.searchResults.length;

    vm.projects = [];
    vm.periodNumbers = ['',1,2,3,4,5];
    vm.periodYears = ['', 2018,2017,2016,2015,2014];

    vm.goToProject = project => { TbUtils.go('main.project', { project: btoa(JSON.stringify(project)) }); };
    vm.goToNewProject = project => { TbUtils.go('main.new-project'); };
    vm.goToEdit = project => { TbUtils.go('main.edit-project', { project: btoa(JSON.stringify(project)) }); };

    vm.loading = true;

    vm.removeProjectClicked = removeProjectClicked;
    vm.toTitleCase = TbUtils.toTitleCase;
    
    TbUtils.getAndLoad(vm.get, vm.projects, () => { vm.loading = false; }, 0, vm.pageSize);

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

}

module.exports = { name: 'ProjectsController', ctrl: ProjectsController };