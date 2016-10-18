function ContactController() {
  var vm = this;
  vm.name = 'Simon';
  vm.phone = '2123333333';
  vm.email = 'test@test.com';

  this.changeName = function() {
    vm.name = 'Michael';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
