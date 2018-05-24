DeleteSectionController.$inject = [ 'TbUtils', 'sections', '$stateParams' ];

function DeleteSectionController (TbUtils, sections, stateParams) {

    const vm = this;

    vm.formTitle = 'Delete Sección';

    vm.section = JSON.parse(atob(stateParams.section));

    //delete section
    TbUtils.confirm('Borrar Sección', `Esta seguro de eliminar la sección de la clase: ${vm.section.Class.Name} con código:${vm.section.Code}?`, 
        resolve => {
            if (resolve) {
                vm.loading = true;
                TbUtils.deleteAndNotify(sections.deleteSection, vm.section, [], 
                    'La sección se borro exitosamente.', () => { vm.loading = false; });
            }
        }
    );
    TbUtils.go('main.sections'); 
}

module.exports = { name: 'DeleteSectionController', ctrl: DeleteSectionController };