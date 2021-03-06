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
            ignoreAccents: '=?',
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

            function searchAllParameters (term, term2) {
                if (term.length === 0) return;
                if (typeof scope.getAll === 'function' && !scope.all) {
                    scope.loading = true;
                    scope.getAll(resp => { 
                                            scope.all = resp.data; 
                                            search(scope.all, term);
                                            clearSelectFilter();
                                        }, 
                                            TbUtils.showErrorMessage,
                                 () => { scope.loading = false; });
                }
                else {
                    search(scope.all, term);
                    clearSelectFilter();
                }
            }

            function searchAll (term) {
                if (term.length === 0) return;
                if (typeof scope.getAll === 'function' && !scope.all) {
                    
                    scope.loading = true;
                    scope.getAll(resp => { 
                                            scope.all = resp.data; 
                                            search(scope.all, term);
                                            clearSelectFilter();                                            
                                         }, 
                                 TbUtils.showErrorMessage,
                                 () => { scope.loading = false; });
                }
                else {
                        search(scope.all, term);
                        clearSelectFilter();
                }
            }

            function clearSelectFilter () {
                [...document.getElementsByClassName('sectionProjectSelectFilter')]
                            .forEach(e => e.value = '');
            }

            function search (list, term) {
                if (list && typeof scope.obj === 'function') {
                    if (scope.ignoreAccents)
                        scope.results = scope.data = filterFilter(list, scope.obj(term), searchIgnoreAccents);
                    else
                        scope.results = scope.data = filterFilter(list, scope.obj(term))
                }
                else
                    scope.results = scope.data;
            }

            function searchIgnoreAccents (actual, expected) {
                let actualStrValue = actual.toLowerCase()
                    .replace(/á/g, 'a')            
                    .replace(/é/g, 'e')
                    .replace(/í/g, 'i')
                    .replace(/ó/g, 'o')
                    .replace(/ú/g, 'u');

                let expectedStrValue = expected.toLowerCase()
                    .replace(/á/g, 'a')            
                    .replace(/é/g, 'e')
                    .replace(/í/g, 'i')
                    .replace(/ó/g, 'o')
                    .replace(/ú/g, 'u');
                
                return actualStrValue.indexOf(expectedStrValue) > -1;
            }

        }
    }

    return directive;
}

module.exports = {
    name: 'tbSearchField',
    drtv: tbSearchField
};