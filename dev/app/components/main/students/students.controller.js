StudentsController.$inject = [ 'TbUtils', 'students' ];

function StudentsController (TbUtils, students) {
	const vm = this;

    vm.searchResults = [];
    vm.studentObj = term => { return { AccountId: term }; };

    vm.students = [];
    vm.tableSchema = require('../../../table-schemas/users-table-schema')('student');

    vm.pageSize = 10;
    vm.get = students.getWithPagination;
    vm.getAll = students.get;
    vm.hideLoadBtn = () => vm.students.length !== vm.searchResults.length;

    vm.goToNewStudent = () => { TbUtils.go('main.new-student'); };
    vm.goToImportStudents = () => { TbUtils.go('main.import-students'); };
    vm.editStudent = student => { TbUtils.go('main.edit-student', { student: btoa(JSON.stringify(student)) }); };

    vm.loading = true;

    TbUtils.getAndLoad(vm.get, vm.students, () => { vm.loading = false; }, 0, vm.pageSize);

}

module.exports = { name: 'StudentsController', ctrl: StudentsController };