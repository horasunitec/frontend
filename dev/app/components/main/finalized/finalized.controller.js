FinalizedController.$inject = [ 'TbUtils', 'finalized' ];

function FinalizedController(TbUtils, finalized) {
    const vm = this;

    vm.searchResults = [];
    vm.searchObj = term => { return { AccountId: term }; };

    vm.tableData = [];
    vm.tableSchema = require('../../../table-schemas/settlement-table-schema')(downloadFinalized);

    vm.finalizedLoading = true;

    TbUtils.getAndLoad(finalized.getFinalizedFiniquitos, vm.tableData, () => { vm.finalizedLoading = false; });

    function downloadFinalized (student) {
        TbUtils.confirm('Descargar Finiquito', 
            'Continuar?', result => {
            if (result) {
                window.open(finalized.dowloadFiniquitoReport(student.AccountId));
                TbUtils.reload();
            }
        });
    }

}

module.exports = {
    name: 'FinalizedController',
    ctrl: FinalizedController
};