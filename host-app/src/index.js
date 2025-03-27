const app = angular.module("app", ['ngRoute']);



// // ✅ Bootstrap AngularJS App
// angular.element(document).ready(function () {
//   console.log("AngularJS is loaded:", angular.module("app"));
//   angular.bootstrap(document, ["app"]);
// });

app.controller("MainController", function($scope) {
  $scope.message = "Welcome to the Home Page!";
});




app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider
    .when("/xyz", {
      template: "<h1>AngularJS Shell uuuu</h1>",
    })
    .when("/abc", {
      template: '<div id="angular-mfe-container">aaaaaaaaaa</div>', // Angular 19 will load here
      controller: "MFEController",
    })
    .otherwise({
      template: "<h1>AngularJS Shell zzzz</h1>",
    });


    // $rootScope.$on("$routeChangeSuccess", function (event, current) {
    //   console.log("✅ Route Matched:", current);
    // });
  
    // $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
    //   console.error("❌ Route Change Error:", rejection);
    // });
  
    // $rootScope.$on("$routeChangeStart", function (event, next) {
    //   console.log("🔄 Navigating to:", next.$$route.originalPath); 
    // });

    
}]);

// app.controller`("MainController", function ($scope) {
//   console.log("📦 Loading Angular Remote Component...");

//   async function loadAngularComponent() {
//     try {
//       // ✅ Dynamically import the Remote Component from Angular MFE
//       const { bootstrapAngularApp } = await import("mfeApp/bootstrap");

//       console.log("✅ Angular MFE Bootstrap Loaded:", bootstrapAngularApp);

//       const container = document.getElementById("angular-mfe-container");
//       if (container) {
//         container.innerHTML = "<app-remote></app-remote>"; // ✅ Render Angular Component

//         // ✅ Explicitly bootstrap the Angular component in the container
//         bootstrapAngularApp("angular-mfe-container");
//       } else {
//         console.error("❌ Container not found for Angular MFE!");
//       }
//     } catch (error) {
//       console.error("❌ Error loading Angular Component:", error);
//     }
//   }

//   loadAngularComponent();
// });

