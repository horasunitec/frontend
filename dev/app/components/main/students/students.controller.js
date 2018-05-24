StudentsController.$inject = [ 'TbUtils', 'students' ];

function StudentsController (TbUtils, students) {
	const vm = this;

    vm.searchResults = [];
    vm.studentObj = term => { return { AccountId: term }; };

    vm.students = [];
    
    vm.periodYears = getYearsList();
    vm.pageSize = 10;
    vm.get = students.getWithPagination;
    vm.getAll = students.get;
    vm.hideLoadBtn = () => vm.students.length !== vm.searchResults.length;

    vm.goToNewStudent = () => { TbUtils.go('main.new-student'); };
    vm.goToImportStudents = () => { TbUtils.go('main.import-students'); };

    vm.editStudent = student => { TbUtils.go('main.edit-student', { student: btoa(JSON.stringify(student)) }); };
    vm.tableSchema = require('../../../table-schemas/users-table-schema')('student', vm.editStudent);

    vm.loading = true;

    TbUtils.getAndLoad(vm.get, vm.students, () => { vm.loading = false; }, 0, vm.pageSize);

    vm.filterByYear = () => {
        vm.loading = true;

        if (vm.periodYear === '' || vm.periodYear === null) {
            vm.periodYear = 0;
        }
        students.getStudentsByYear(vm.periodYear,
                            getStudentsByYearSuccess,
                            getStudentsByYearFail);
    };

    function getStudentsByYearSuccess(response){
        vm.searchResults = response.data;
        vm.students = response.data;
        vm.loading = false;
    }

    function getStudentsByYearFail(response){
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

module.exports = { name: 'StudentsController', ctrl: StudentsController };