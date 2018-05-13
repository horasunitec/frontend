SectionsController.$inject = [ 'TbUtils', 'sections', 'filterFilter'];

function SectionsController (TbUtils, sections, filterFilter) {
	const vm = this;

    let goToEdit = section => { TbUtils.go('main.edit-section', { section: btoa(JSON.stringify(section)) }); };
    let goToDelete = section => { TbUtils.go('main.delete-section', { section: btoa(JSON.stringify(section)) }); };

    vm.searchResults = []   ;
    vm.sectionObj = term => { return { Class: { Name: term } }; };

    vm.sections = [];
    vm.tableSchema = require('../../../table-schemas/ext-sections-table-schema')(goToEdit,goToDelete);
    vm.goToSection = section => { TbUtils.go('main.section', { section: btoa(JSON.stringify(section)) }); };

    vm.periodNumbers = ['',1,2,3,4,5];
    vm.periodYears = ['', 2018,2017,2016,2015,2014];
    
    //selected fields
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
        sections.getSectionsByPeriod(vm.periodNumber,
                                    vm.periodYear,
                                    getSectionsByPeriodSuccess,
                                    getSectionsByPeriodFail);
    };

    vm.pageSize = 10;
    vm.get = sections.getSectionsWithPagination;
    vm.getAll = sections.getSections;
    vm.hideLoadBtn = () => vm.sections.length !== vm.searchResults.length;

    vm.goToNewSection = () => { TbUtils.go('main.new-section'); };
    vm.loading = true; 
    TbUtils.getAndLoad(sections.getCurrentPeriodSections, vm.sections, () => { vm.loading = false; });

    function getSectionsByPeriodSuccess(response) {
        vm.sections = response.data;
        vm.searchResults = response.data;
        vm.loading = false;
    }

    function getSectionsByPeriodFail(response) {
        TbUtils.showErrorMessage(response);
        vm.loading = false;
    }
}

module.exports = { name: 'SectionsController', ctrl: SectionsController };