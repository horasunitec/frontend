RegisterController.$inject = ['$rootScope', '$location', 'auth',
                                'role', 'toaster', 'TbUtils', '$state'];

function RegisterController ($rootScope, $location, auth, role, toaster, TbUtils, $state) {
    var vm = this;

    vm.username = "";
    vm.password = "";
    vm.register = register;
    vm.loading = false;

    let DBId = -1;

    auth.ClearCredentials();

    function register() {
        vm.loading = true;

        auth.Login( vm.username, vm.password, RegisterSuccess, RegisterFail);
    }

    function RegisterSuccess(response) {
        DBId = response.data.AccountId;
        auth.SetCredentials(response.data);
        window.localStorage['Session'] =
        $rootScope.Session =
        vm.username;

        window.localStorage['Username'] =
        $rootScope.Username =
        $rootScope.Session.slice(0, $rootScope.Session.indexOf('@'));

        role.get($rootScope.Session, getRoleSuccess);
    }

    function getRoleSuccess (response) {
        window.localStorage['Role'] =
        $rootScope.Role =
        response.data;

        if(response.data === 'Professor') {
            window.localStorage['ProfessorDBId'] =
            $rootScope.ProfessorDBId = DBId;
        }

        $rootScope.loggedIn = true;

        $state.go('main.'+$rootScope.Role.toLowerCase()+'-dashboard');

        vm.loading = false;
    }

    function RegisterFail(response) {
        TbUtils.showErrorMessage(response);
        vm.loading = false;
    }
}

module.exports = { name: 'RegisterController', ctrl: RegisterController };
