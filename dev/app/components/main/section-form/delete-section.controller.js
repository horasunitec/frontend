DeleteSectionController.$inject = [ 'TbUtils', 'sections', '$stateParams' ];

function DeleteSectionController (TbUtils, sections, stateParams) {

    const vm = this;

    vm.formTitle = 'Delete Seccion';

    vm.section = JSON.parse(atob(stateParams.section));

    //delete section
    TbUtils.displayNotification('success', 'title', vm.section);
    TbUtils.go('main.sections'); 
}

module.exports = { name: 'DeleteSectionController', ctrl: DeleteSectionController };