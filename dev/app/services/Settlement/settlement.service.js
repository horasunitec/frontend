settlement.$inject = ['$http'];

function settlement($http) {
    const url = 'http://backend-4.apphb.com/api/Students';
    const service = {
        getPendingFiniquitos: getPendingFiniquitos,
        dowloadFiniquitoReport: dowloadFiniquitoReport
    };

    function getPendingFiniquitos(success, error, fin) {
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
    name: 'settlement',
    srvc: settlement
};