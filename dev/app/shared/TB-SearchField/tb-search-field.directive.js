tbSearchField.$inject = [ 'TbUtils', 'filterFilter' ];

function tbSearchField(TbUtils, filterFilter) {
    var directive = {
        restrict: 'E',
        scope: {
            obj: '=?',
            results: '=?',
            data: '=?',
            onClick: '=?',
            getAll: '=?',
            loading: '=?',
            auto: '=?',
            min: '=?',
            placeholder: '@?'
        },
        templateUrl: 'templates/shared/TB-SearchField/tb-search-field.html',
        link: scope => {
            if (!scope.placeholder) scope.placeholder = "Ingrese su búsqueda";
            if (scope.auto && !scope.min) scope.min = 1;
            if (!scope.onClick) { scope.onClick = searchAll; scope.tooltip = 'Has click para buscar más.'; }

            scope.all = null;
            scope.search = search;

            scope.$watch('searchText', term => {
                if (scope.auto && term.length >= scope.min)
                    scope.search(scope.data, term);
                else
                    scope.results = scope.data;
            });

            function searchAll (term) {
                if (term.length === 0) return;
                
                if (typeof scope.getAll === 'function' && !scope.all) {
                    scope.loading = true;
                    scope.getAll(resp => { scope.all = resp.data; search(scope.all, term); }, 
                                 TbUtils.showErrorMessage,
                                 () => { scope.loading = false; });
                }
                else
                    search(scope.all, term);
            }

            function search (list, term) {
                if (list && typeof scope.obj === 'function')
                    scope.results = filterFilter(list, scope.obj(term));
                else
                    scope.results = scope.data;
            }

        }
    }

    return directive;
}

module.exports = {
    name: 'tbSearchField',
    drtv: tbSearchField
};