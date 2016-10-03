(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:SaathiController
   * @description
   * # SaathiController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('SaathiController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.images = [
        'images/saathi/1.png',
        'images/saathi/2.png',
        'images/saathi/3.png'
      ]

      vm.deliverables = [
        'images/saathi/3.png'
      ]

      //Declare methods here

    });
})();
