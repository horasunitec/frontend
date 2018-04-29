NewSectionController.$inject = [ 'TbUtils', 'sections', 'classes', 
                                 'professors', 'students', '$rootScope', 'filterFilter' ];

function NewSectionController (TbUtils, sections, classes, professors, students, rs, filterFilter) {

    const vm = this;

    vm.formTitle = 'Nueva Sección';

    vm.section = {
        Code: '',
        ClassId: undefined,
        ProffesorAccountId: rs.Role === 'Professor' ? rs.ProfessorDBId : ''
    };
    vm.classes = [];
    vm.professors = [];
    vm.students = [];

    vm.selectedStudents = [];
    vm.tableSchema = require('../../../table-schemas/form-students-table-schema');

    vm.submit = submit;
    vm.addStudent = addStudent;
    vm.search = search;

    vm.removeStudent = student => { TbUtils.removeItemFromList(student, vm.selectedStudents); };

    vm.classesLoading = true;
    vm.professorLoading = true;
    vm.studentsLoading = true;
    vm.submitting = false;

    TbUtils.getAndLoad(classes.getAlpha, vm.classes, () => { vm.classesLoading = false; });
    TbUtils.getAndLoad(professors.getAlpha, vm.professors, () => { vm.professorsLoading = false; });
    TbUtils.getAndLoad(students.get, vm.students, () => { vm.studentsLoading = false; });

    function submit () {
        vm.submitting = true;
        
        sections.post(vm.section, assignStudents, 
            resp => { TbUtils.showErrorMessage(resp); vm.submitting = false; });
    }

    function assignStudents (resp) {
        const studentIds = vm.selectedStudents.map(obj => obj.AccountId);
        TbUtils.assignAndGoToSection(sections.assignStudents, 
                                    resp.data.Id, 
                                    studentIds, 
                                    'main.section', 
                                    resp.data,
                                    'La sección se creó con exito.', 
                                    () => { vm.submitting = false; });
    }

    function search (term) {
        let results = filterFilter(vm.students, { AccountId: term });

        if (results.length === 0)
            results = filterFilter(vm.students, { Name: term });

        return results;
    }

    function addStudent () {
        if (vm.selectedStudents.indexOf(vm.selectedStudent) >= 0) return;
        if (vm.selectedStudent !== null) {
            vm.selectedStudents.push(vm.selectedStudent);
        }
        else{
            TbUtils.displayNotification('error', "Escoja un alumno y presione el boton de Agregar");
        }
        
    }

}

module.exports = { name: 'NewSectionController', ctrl: NewSectionController };