(function(){
  var config = {
   apiKey: "AIzaSyCCw9PdOJ2mXekSbuW_T6g4h6_w8dxxTVI",
   authDomain: "toga-4f41e.firebaseapp.com",
   databaseURL: "https://toga-4f41e.firebaseio.com",
   storageBucket: "toga-4f41e.appspot.com",
   messagingSenderId: "1011046462585"
 };

firebase.initializeApp(config);

  angular.module('cotizadorToga',['firebase'])
  .factory("productos", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database location where we will store our data
    var ref = firebase.database().ref("productos");
    // this uses AngularFire to create the synchronized array
    return $firebaseArray(ref);
  }
])

.factory("usuariosFac", ["$firebaseArray",
function($firebaseArray) {
  return {
    traeTodos: function(){
      // create a reference to the database location where we will store our data
      var ref = firebase.database().ref("usuarios");
      // this uses AngularFire to create the synchronized array
      return $firebaseArray(ref);
    },
    add:function(usuario,id){
      var ref = firebase.database().ref("usuarios");
      // this uses AngularFire to create the synchronized array
      var usuarioParse={nombre:usuario.nombre,password:usuario.password,grupo:id};
      ref.push(usuarioParse);
    }
  }

}
])

.factory("privilegiosFac", ["$firebaseArray",
function($firebaseArray) {
  return {
    traeTodos: function(){
      // create a reference to the database location where we will store our data
      var ref = firebase.database().ref("privilegios");
      // this uses AngularFire to create the synchronized array
      return $firebaseArray(ref);
    },
    traeID: function(ID){
      // create a reference to the database location where we will store our data
      var ref = firebase.database().ref("privilegios").child(ID);
      // this uses AngularFire to create the synchronized array
      return $firebaseArray(ref);
    }
  }

}
])

.factory("gruposFac", ["$firebaseArray",
function($firebaseArray) {
  return {
    traeTodos: function(){
      // create a reference to the database location where we will store our data
      var ref = firebase.database().ref("grupos");
      // this uses AngularFire to create the synchronized array
      return $firebaseArray(ref);
    },
    traeID: function(ID){
      // create a reference to the database location where we will store our data
      var ref = firebase.database().ref("privilegios").child(ID);
      // this uses AngularFire to create the synchronized array
      return $firebaseArray(ref);
    },
    addUser: function(ID,usuario){
      var ref = firebase.database().ref("privilegios").child(ID);
      // this uses AngularFire to create the synchronized array
      ref.push(usuario);
    }
  }

}
])

  .controller('MyCtrl', ["$scope","$firebaseArray","usuariosFac","privilegiosFac","gruposFac",
  function($scope,$firebaseArray,usuariosFac,privilegiosFac,gruposFac){

    $scope.usuarioData={};

    $scope.usuarios=usuariosFac.traeTodos();
    $scope.grupos=gruposFac.traeTodos();
    $scope.privilegiosAll=privilegiosFac.traeTodos();

    $scope.userSave=function(){
      usuariosFac.add($scope.usuarioData,$scope.usuarioData.grupo.$id);
    };


    $scope.traePrivilegios=function(id){
      return privilegiosRef.child(id);

    };


    $scope.reset=function(){
      var grupo =firebase.database().ref("grupos");
      var toga ={nombre:$scope.usuarioData.nombre,password:$scope.usuarioData.password};
      grupo.push(toga );

    };


  }]);
}());
