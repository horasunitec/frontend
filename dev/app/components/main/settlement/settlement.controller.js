SettlementController.$inject = [ 'TbUtils', 'settlement' ];

function SettlementController(TbUtils, settlement) {
    const vm = this;

    vm.searchResults = [];
    vm.searchObj = term => { return { AccountId: term }; };

    vm.tableData = [];
    vm.tableSchema = require('../../../table-schemas/settlement-table-schema')(downloadSettlement);

    vm.settlementLoading = true;
    vm.periodYear = '';
    vm.periodYears = getYearsList();

    //TbUtils.getAndLoad(settlement.getPendingFiniquitos, vm.tableData, () => { vm.settlementLoading = false; });

    vm.filterByYear = () => {
        vm.settlementLoading = true;

        if (vm.periodYear === '' || vm.periodYear === null) {
            vm.periodYear = 0;
        }
        settlement.getPendingFiniquitosByYear(vm.periodYear,
                                    getPendingFiniquitosByYearSuccess,
                                    getPendingFiniquitosByYearFail);
    };

    settlement.getPendingFiniquitosByYear((new Date()).getFullYear()-5, getPendingFiniquitosByYearSuccess, getPendingFiniquitosByYearFail);

    function downloadSettlement (student) {
        TbUtils.confirm('Descargar Finiquito', 
            'Una vez lo descargue, no podra volver a hacerlo. Continuar?', result => {
            if (result) {
                window.open(settlement.dowloadFiniquitoReport(student.AccountId));
                TbUtils.reload();
            }
        });
    }

    function getPendingFiniquitosByYearSuccess(response){
        vm.searchResults = response.data;
        vm.tableData = response.data;
        vm.settlementLoading = false;
    }

    function getPendingFiniquitosByYearFail(response){
        TbUtils.showErrorMessage(response);
        vm.settlementLoading = false;
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

module.exports = {
    name: 'SettlementController',
    ctrl: SettlementController
};