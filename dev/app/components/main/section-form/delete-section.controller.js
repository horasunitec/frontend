DeleteSectionController.$inject = [ 'TbUtils', 'sections', '$stateParams' ];

function DeleteSectionController (TbUtils, sections, stateParams) {

    const vm = this;

    vm.formTitle = 'Delete Seccion';

    vm.section = JSON.parse(atob(stateParams.section));

    //delete section
    TbUtils.confirm('Borrar Seccion', `Esta seguro de eliminar la seccion de la clase: ${vm.section.Class.Name} con codigo:${vm.section.Code}?`, 
        resolve => {
            if (resolve) {
                vm.loading = true;
                TbUtils.deleteAndNotify(sections.deleteSection, vm.section.Id, [], 
                    'La seccion se borro exitosamente.', () => { vm.loading = false; });
            }
        }
    );
    TbUtils.go('main.sections'); 
}

module.exports = { name: 'DeleteSectionController', ctrl: DeleteSectionController };