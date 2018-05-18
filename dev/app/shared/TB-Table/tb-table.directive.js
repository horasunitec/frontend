tbTable.$inject = [ 'tableBuilder' ];

function tbTable(tableBuilder) {
    var directive = 
    {
        restrict: 'E',
        scope: {
            schema: '=',
            model: '=',
            onRowClick: '=?',
            table: '=?',
            customStyle: '='
        },
        link: (scope, elem, attrs) => {
            if (!scope.onRowClick) scope.onRowClick = data => {};

            scope.blockRowClick = false;
            scope.customstyle = attrs.customstyle;

            scope.$watch('model', newModel => {
                if (newModel) 
                    scope.table = tableBuilder.newTable(scope.schema, newModel);
                else
                    scope.table = tableBuilder.emptyTable();
            }, true);

            scope.btnClicked = (data, onBtnClick) => {
                scope.blockRowClick = true;
                onBtnClick(data);
            };

            scope.rowClicked = data => {
                if (scope.blockRowClick) {  scope.blockRowClick = false; return };
                scope.onRowClick(data);
            };
        },
        templateUrl: 'templates/shared/TB-Table/tb-table.html'           
    };

    return directive;
}

module.exports = { name: 'tbTable', drtv: tbTable };