(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:ProjectsController
   * @description
   * # ProjectsController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('ProjectsController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.projects = [
        {
          name: 'Saathi',
          thumb: 'images/covers/saathi.jpg',
          state: 'start.saathi',
          keywords: 'Assistive Technologies | Time Perception',
          desc: 'Saathi is a smart watch which taps the problem of lack of time perception amongst children with learning disabilities, by displaying time in the form of visuals, audio feedback and images from the daily life...'
        },
        {
          name: 'Sigcloud',
          thumb: 'images/covers/sigcloud.jpg',
          state: 'start.sigcloud',
          keywords: 'Big Data | Cloud Comp',
          desc: 'SigCloud caters to easy deployment of packages of big data services on cloud based infrastructure, along with the provision of monitoring & management capabilities for the infrastructure deployed on cloud...'
        },
        {
          name: 'Sociotags',
          thumb: 'images/covers/sociotags.jpg',
          state: 'start.sociotags',
          keywords: 'Social Interaction | Airports',
          desc: 'Sociotags are color coded smart tags, brought in place of Airport handbag tags, which tries to cater the problem of social isolation by depicting similar interests in people travelling and motivating them to interact...'
        },        
        {
          name: 'Alz-Mob',
          thumb: 'images/covers/mobcustom.jpg',
          state: 'start.alzmob',
          keywords: 'Alzheimer | Mobile Phone',
          desc: 'Alz-Mob is a customized mobile phone for Alzheimer patients. It builds upon assumptions based on movable buttons in 3D space matrix, and contextually adjusts gutter space and evident buttons on panel...'
        }
        // ,
        // {
        //   name: 'Statusbrew',
        //   thumb: 'images/covers/statusbrew.jpg',
        //   state: 'start.statusbrew',
        //   keywords: 'Social Community | Organization',
        //   desc: 'Statusbrew is basically a tool for managing user’s social community (Facebook, Twitter, Instagram etc.). The organization segment of the tool caters to adding members to team, assigning permissions to members...'
        // }
      ];

      //Declare methods here
      vm.goToProject = goToProject;

      function goToProject(state){
        $state.go(state);
      }
    });
})();


      // vm.projects = [
      //   {
      //     name: 'Sigcloud',
      //     thumb: 'images/sig-cloud.png',
      //     state: 'start.sigcloud'
      //   },
      //   {
      //     name: 'Sociotags',
      //     thumb: 'images/socioTags.png',
      //     state: 'start.sociotags'
      //   },
      //   {
      //     name: 'Chat.io',
      //     thumb: 'images/chat.io.png',
      //     state: 'start.chatIo'
      //   },
      //   {
      //     name: 'Flexflights',
      //     thumb: 'images/flexFlights.png',
      //     state: 'start.flexflights'
      //   },
      //   {
      //     name: 'Salsa',
      //     thumb: 'images/foodPrinting.png',
      //     state: 'start.salsa'
      //   },
      //   {
      //     name: 'Techniche Website',
      //     thumb: 'images/technicheWeb.png',
      //     state: 'start.techwebsite'
      //   }
      // ];