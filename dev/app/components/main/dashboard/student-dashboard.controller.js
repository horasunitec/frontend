StudentDashboardController.$inject = ['$rootScope', '$state',
    'TbUtils', 'tableContent', 'sections', 'filterFilter', 'hours', 'students'];

function StudentDashboardController ($rootScope, $state, TbUtils, tableContent,
                                      sections, filterFilter, hours, students) {
	const vm = this;
  vm.accountId = null;
  vm.totalHours = null;
  vm.name = null;
  vm.projects = [];
  vm.unapprovedProjects = [];
  vm.sections = [];
  vm.goToSection = goToSection;
  vm.toTitleCase = TbUtils.toTitleCase;
  vm.studentsLoading = true;
  vm.sectionsLoading = true;
  vm.studentsUnApprovedLoading = true;
  students.getAccountId(getAccountIdSuccess, getStudentHourReportFail);

  function getAccountIdSuccess(response){
      vm.accountId = response.data.AccountId;
      vm.name = response.data.Name;
      hours.getStudentHourReport(vm.accountId, getStudentHourReportSuccess, getStudentHourReportFail);
      hours.getStudentUnApprovedHourReport(vm.accountId, getStudentUnApprovedHourReportSuccess, getStudentUnApprovedHourReportFail);
      students.getSectionHours(vm.accountId, getSectionHoursSuccess, getSectionHoursFail);
  }

  function goToSection(id){
    TbUtils.preventGeneralLoading();
    $state.go('main.section',{
      sectionId: id
    });
  }

  function getStudentHourReportSuccess(response) {
    vm.totalHours = response.data.TotalHours;
    vm.projects = response.data.Projects;
    vm.studentsLoading = false;
  }

  function getStudentHourReportFail(response) {
    TbUtils.displayNotification('Error', 'Error con Reportes', 'No se pudieron cargar las horas de los proyectos.');
    vm.studentsLoading = false;
  }

  function getStudentUnApprovedHourReportSuccess(response) {
    vm.projects = response.data.Projects;
    vm.studentsUnApprovedLoading = false;
  }

  function getStudentUnApprovedHourReportFail(response) {
    TbUtils.displayNotification('Error', 'Error con Reportes', 'No se pudieron cargar las horas no aprobadas de los proyectos.');
    vm.studentsUnApprovedLoading = false;
  }

  function getSectionHoursSuccess(response) {
    vm.sections = response.data;
    vm.sectionsLoading = false;
  }

  function getSectionHoursFail(response) {
    TbUtils.displayNotification('Error', 'Error con las Horas de Secciones',
      'No se pudieron cargar las horas de una sección.');
    vm.sectionsLoading = false;
  }


}

module.exports = { name: 'StudentDashboardController', ctrl: StudentDashboardController };
