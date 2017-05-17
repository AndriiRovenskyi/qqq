app.controller('loginCtrl',['UserService', function (UserService) {
    var vm=this;

    vm.check=function () {
        console.log('work');
    }

    vm.submit=function () {
        UserService.checkLogin(vm.username, vm.password);
    }


}])
