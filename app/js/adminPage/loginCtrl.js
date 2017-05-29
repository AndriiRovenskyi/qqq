app.controller('loginCtrl',['AdminService', function (AdminService) {
    var vm=this;

    vm.check=function () {
        console.log('work');
    }

    vm.submit=function () {
        AdminService.checkLogin(vm.username, vm.password);
    }


}])
