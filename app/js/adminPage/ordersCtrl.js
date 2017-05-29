app.controller('ordersCtrl',['AdminService',function (AdminService) {
    var vm=this;
    vm.editOrd={}


    vm.changeOrder=function (order) {
        vm.editOrd=Object.assign({},order);
        console.log(vm.editOrd);
    }

    vm.saveChangeOrder=function () {
        if(vm.editOrd!=null){
            AdminService.updateOrder(vm.editOrd);
        }
    }

    vm.deleteOrder=function (id) {
        AdminService.deleteOrder(id);
    }

    vm.archiveOrder=function (id) {
        AdminService.orderToArchive(id);
    }

    vm.archiveBack=function (id) {
        AdminService.archiveBack(id);
    }



    vm.init=function () {
        vm.orders=AdminService.getOrder();
        vm.archive=AdminService.getArchive();
    }
    vm.init();


}])