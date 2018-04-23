
classes.$inject = [ '$http', 'TbUtils' ];

function classes($http, TbUtils) {
    var url = 'http://backend-4.apphb.com/api/Classes';
    var service = {
        get: get,
        getAlpha: getAlpha,
        postClass: postClass,
        update: update,
        getWithPagination: getWithPagination
    };

    return service;

    function get (success, error, fin) {
        $http.get(url)
            .then(success)
            .catch(error)
            .finally(fin);
    }

    function getAlpha (success, error, fin) {
        $http.get(url + '/alpha')
            .then(success)
            .catch(error)
            .finally(fin);
    }

    function postClass(data, success, error, fin) {
        $http.post(url, JSON.stringify(data))
            .then(success)
            .catch(error)
            .finally(fin);
    }

    function update (id, data, success, error, fin) {
        $http.put(url + '/' + id, data)
            .then(success)
            .catch(error)
            .finally(fin);
    }

    function getWithPagination (page, size, success, error, _finally) {
        $http.get(url + '?$top=' + size + '&$skip=' + (page * size) + '&$orderby=Id desc')
            .then(success)
            .catch(error)
            .finally(_finally);
    }

}

module.exports = {
    name: 'classes',
    srvc: classes
};