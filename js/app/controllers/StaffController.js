function StaffController() {
  var vm = this;
  vm.name = 'Jordan';
  vm.phone = '2126666666';
  vm.email = 'jordan@michael.com';
}

angular
  .module('app')
  .controller('StaffController', StaffController);
