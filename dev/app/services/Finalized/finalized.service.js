finalized.$inject = ['$http'];

function finalized($http) {
    const url = 'http://backend-4.apphb.com/api/Students';
    const service = {
        getFinalizedFiniquitos: getFinalizedFiniquitos,
        dowloadFiniquitoReport: dowloadFiniquitoReport
    };

    function getFinalizedFiniquitos(success, error, fin) {
        $http.get(url + '/PendingFiniquitoStudents')
        .then(success)
        .catch(error)
        .finally(fin);
    }

    function dowloadFiniquitoReport(accountId) {
        return url + '/FiniquitoReport/' + accountId;
    }

    return service;
}

module.exports = {
    name: 'finalized',
    srvc: finalized
};