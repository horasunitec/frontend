SectionsController.$inject = [ 'TbUtils', 'sections' ];

function SectionsController (TbUtils, sections) {
	const vm = this;

    let goToEdit = section => { TbUtils.go('main.edit-section', { section: btoa(JSON.stringify(section)) }); };
    let goToDelete = section => { TbUtils.go('main.delete-section', { section: btoa(JSON.stringify(section)) }); };

    vm.searchResults = []   ;
    vm.sectionObj = term => { return { Class: { Name: term } }; };

    vm.sections = [];
    vm.tableSchema = require('../../../table-schemas/ext-sections-table-schema')(goToEdit,goToDelete);
    vm.goToSection = section => { TbUtils.go('main.section', { section: btoa(JSON.stringify(section)) }); };

    vm.pageSize = 10;
    vm.get = sections.getSectionsWithPagination;
    vm.getAll = sections.getSections;
    vm.hideLoadBtn = () => vm.sections.length !== vm.searchResults.length;

    vm.goToNewSection = () => { TbUtils.go('main.new-section'); };
    vm.loading = true;

    //remove funcion
    vm.removeSectionClicked = removeSectionClicked;

    TbUtils.getAndLoad(sections.getCurrentPeriodSections, vm.sections, () => { vm.loading = false; });

    function removeSectionClicked(section) {
        // TbUtils.confirm('Eliminar Seccion', `Esta seguro de eliminar ${section.Name}?`, 
        //     resolve => {
        //         if (resolve) {
        //             vm.loading = true;
        //             TbUtils.deleteAndNotify(sections.deleteSection, section, vm.sections, 
        //                 'La seccion se borro exitosamente.', () => { vm.loading = false; });
        //         }
        //     });
    }

}

module.exports = { name: 'SectionsController', ctrl: SectionsController };