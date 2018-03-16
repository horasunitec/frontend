periods.$inject = [ '$http' ];

function periods ($http) {
	const url = `http://${REMOTE_URL}:${PORT}/api/Periods`;
	const service = {
		get: get,
		post: post,
		getWithPagination: getWithPagination,
		setCurrentPeriod: setCurrentPeriod,
		getCurrentPeriod: getCurrentPeriod
	};

	return service;

	function get (success, error, fin) {
		$http.get(url)
            .then(success)
            .catch(error)
            .finally(fin);
	}

	function post (data, suc, err, fin) {
		$http.post(url, data)
            .then(suc)
            .catch(err)
            .finally(fin);
	}

	function getWithPagination (page, size, success, error, fin) {
		$http.get(url + '?$top=' + size + '&$skip=' + (page * size) + '&$orderby=Id desc')
            .then(success)
            .catch(error)
            .finally(fin);
	}

	function setCurrentPeriod (id, suc, err, fin) {
		$http.put(url+'/SetCurrentPeriod/'+id)
            .then(suc)
            .catch(err)
            .finally(fin);
	}

	function getCurrentPeriod (suc, err, fin) {
		$http.get(url+'/GetCurrentPeriod')
            .then(suc)
            .catch(err)
            .finally(fin);
	}

}

module.exports = { name: 'periods', srvc: periods };