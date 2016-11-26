angular
.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache','ngAnimate','ui.router'])

// cConfiguracion de rutas
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

      // route to show our basic form (/form)
      .state('form', {
          url: '/form',
          templateUrl: 'form.html',
          controller: 'DemoCtrl'
      })

      // nested states
      // each of these sections will have their own view
      // url will be nested (/form/profile)
      .state('form.bienvenida', {
          url: '/bienvenida',
          templateUrl: 'form-bienvenida.html'
      })

      // url will be /form/interests
      .state('form.appliance', {
          url: '/appliance',
          templateUrl: 'form-appliance.html'
      })

      // url will be /form/payment
      .state('form.telefonos', {
          url: '/telefonos',
          templateUrl: 'form-telefonos.html'
      });

  // catch all route
  // send users to the form page
  $urlRouterProvider.otherwise('/form/bienvenida');
})


.controller('DemoCtrl', function($scope) {






  $scope.mantenimientoSelect = [
        {opcion : "Estandar", id : 1},
        {opcion : "Supremo", id : 2},
        {opcion : "Avanzado", id : 3}
    ];
    $scope.servicioSelect = [
          {opcion : "Local", id : 1},
          {opcion : "Foraneo", id : 2}
      ];



$scope.productoShow=false;
$scope.detalleShow=false;
  $scope.productos = [

    {
      id:1,
      nombre: 'NLX MiniUCS',
      precio: 10,
      extensiones:50,
      concurrentes:32,
      analogicos:12,
      digital :1,
      extensionesMin:0,
      extensionesMax:45,
      tipo: 'Appliance',
      imagen: '/home/zorrox/Downloads/flex-with-nested-containers/img/miniucs360_19.png'
    },
    {
      id:2,
      nombre: 'ELX 025-SSD',
      precio: 11,
      extensiones:100,
      concurrentes:50,
      analogicos:12,
      digital :1,
      extensionesMin:46,
      extensionesMax:95,
      tipo: 'Appliance',
      imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg'
    },
    {
      id:3,
      nombre: 'NLX 4000',
      precio: 12,
      extensiones:250,
      concurrentes:120,
      analogicos:4,
      digital :48,
      extensionesMin:96,
      extensionesMax:245,
      tipo: 'Appliance',
      imagen: '/home/zorrox/Downloads/flex-with-nested-containers/img/miniucs360_19.png'
    },
    {
      id:4,
      nombre: 'ELX 5000 ',
      precio: 13,
      extensiones:500,
      concurrentes:250,
      analogicos:72,
      digital :8,
      extensionesMin:246,
      extensionesMax:500,
      tipo: 'Appliance',
      imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg'
    }
  ];


  $scope.productoSeleccionado = {
    id:$scope.productos[0].id,
    nombre:$scope.productos[0].nombre,
    precio:$scope.productos[0].precio,
    extensiones:$scope.productos[0].extensiones,
    concurrentes:$scope.productos[0].concurrentes,
    analogicos:$scope.productos[0].analogicos,
    digital :$scope.productos[0].digital,
    extensionesMin:$scope.productos[0].extensionesMin,
    extensionesMax:$scope.productos[0].extensionesMax
  };


  $scope.lista=[


    {  tipo:'Hardware', categoria:'Gateways', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',     cantidad:1,nombre: 'UMG-100 RJ',       descripcion:'Gateway UMG con 01 link E1 30 canales VoIP',       precio: 1},
    {  tipo:'Hardware', categoria:'Gateways', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg'   ,  cantidad:1,nombre: 'CODEC G.729',       descripcion:'Licencia Codec G.729',       precio: 1},
    {  tipo:'Hardware', categoria:'Telefonos', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg'  ,   cantidad:1,nombre: 'Gama Media',       descripcion:'Teléfono Gama Media ejecutivo con pantalla gráfica, 2 SIP, 3 Botones XML, PoE, Manos libres, Dual Switch, Audio HD, 5 Teclas Navegación, 10 Teclas Función',       precio: 1},
    {  tipo:'Hardware', categoria:'Telefonos', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',    cantidad:1,nombre: 'Directivo',       descripcion:'Teléfono Directivo con pantalla gráfica, 3 SIP, PoE, Manos libres, Dual Switch, Audio HD, 4 Teclas Programables',       precio: 1},
    { tipo:'Hardware',  categoria:'Telefonos', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'Operadora',       descripcion:'Teléfono de Operadora ejecutivo con pantalla gráfica, 3 SIP, PoE, Manos libres, Dual Switch, Audio HD, 4 Teclas Programables',       precio: 1},
    { categoria:'Mantenimiento',imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'ELX-PS-ABC-PACKAGE',       descripcion:'Contrato de Mantenimiento Paquete de 10 Horas Servicio Remoto Anual para Altas, Bajas & Cambios',       precio: 1},
    { categoria:'Mantenimiento', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'ELX-REEMINM-025-SSD',       descripcion:'Poliza de Reemplazo Inmediato Elastix Appliance ELX025 VoIP Appliance 1U 1xPCI SSD',       precio: 1}

  ];


   // Adds an item to the invoice's items
   $scope.addItem = function() {
     $scope.lista.push({ cantidad:0, precio:0, nombre:"" });
   }

   // Remotes an item from the invoice
$scope.removeItem = function(item) {
   $scope.lista.splice($scope.lista.indexOf(item), 1);
};

$scope.totalHardware = function() {
  var total = 0.00;
  angular.forEach($scope.lista, function(item, key){
    if (item.tipo=='Hardware') {
    total += (item.cantidad * item.precio);
    }

  });
  return total;
};

$scope.totalServicios = function() {
  var total = 0.00;
  angular.forEach($scope.lista, function(item, key){
    if (item.tipo=='Servicios') {
    total += (item.cantidad * item.precio);
    }

  });
  return total;
};

$scope.totalMantenimiento = function() {
  var total = 0.00;
  angular.forEach($scope.lista, function(item, key){
    if (item.tipo=='Mantenimiento') {
    total += (item.cantidad * item.precio);
    }

  });
  return total;
};

// Calculates the sub total of the invoice
$scope.invoiceSubTotal = function() {
  var total = 0.00;
  angular.forEach($scope.lista, function(item, key){
    total += (item.cantidad * item.precio);
  });
  return total;
};


  // Calculates the tax of the invoice
  $scope.ivaTotal = function() {
    return ((16 * $scope.invoiceSubTotal())/100);
  };

  // Calculates the total of the invoice
  $scope.invoiceTotal = function() {
    return $scope.invoiceSubTotal()+$scope.ivaTotal();
  };

  // change selector
  $scope.onEditChange = function(item) {

     $scope.lista[item].precio=$scope.productos.model;
  };




  $scope.seleccionaProducto = function(index) {
if ($scope.productoSeleccionado.id==1) {
  $scope.lista.push({  categoria:'Appliances',    nombre: 'NLX MiniUCS',descripcion:'Elastix Appliance NLX MiniUCS', cantidad:1, precio:1,   imagen: '/home/zorrox/Downloads/flex-with-nested-containers/img/miniucs360_19.png' });
}else if ($scope.productoSeleccionado.id==2) {
  $scope.lista.push({  tipo:'Hardware', categoria:'Appliances', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',     cantidad:1,nombre: 'ELX 025-SSD',       descripcion:'Elastix Appliance ELX025 VoIP Appliance 1U 1xPCI SSD',       precio: 1});
}
else if ($scope.productoSeleccionado.id==3) {
  $scope.lista.push({  tipo:'Hardware', categoria:'Appliances', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',     cantidad:1,nombre: 'NLX 4000',       descripcion:'Elastix Appliance 4000',       precio: 1});
}
else if ($scope.productoSeleccionado.id==4) {
  $scope.lista.push({  tipo:'Hardware', categoria:'Appliances', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',     cantidad:1,nombre: 'ELX 5000',       descripcion:'Elastix Appliance ELX 5000',       precio: 1});
}

if ($scope.mantenimientoSeleccionado==1) {
$scope.lista.push( { categoria:'Mantenimiento',imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'ELX-SUSCRP-STANDARD',       descripcion:'Contrato de Mantenimiento Suscripción Anual Nivel Standard',       precio: 1})
}else if ($scope.mantenimiento==2) {
$scope.lista.push( { categoria:'Mantenimiento', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'ELX-SUSCRP-AVANZADO',       descripcion:'Contrato de Mantenimiento Suscripción Anual Nivel Avanzado',       precio: 1})
}else if ($scope.mantenimiento==3) {
$scope.lista.push({ categoria:'Mantenimiento',imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'ELX-SUSCRP-SUPREMO',       descripcion:'Contrato de Mantenimiento Suscripción Anual Nivel Supremo',       precio: 1})
}

if ($scope.servicioSeleccionado==1) {
$scope.lista.push( { categoria:'Servicios',imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'Locales',       descripcion:'Servicios Profesionales Locales',       precio: 1})
}else if ($scope.servicios==2) {
$scope.lista.push( { categoria:'Servicios',imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'Foraneos',       descripcion:'Servicios Profesionales Foraneos',       precio: 1})
}

    $scope.detalleShow=true;
  };

  $scope.buscaProducto = function() {
    $scope.productoShow=true;
    if($scope.extensiones>0 && $scope.extensiones<46){
      $scope.productoSeleccionado = {
        id:1,
        nombre: 'NLX MiniUCS',
        precio: 10,
        extensiones:50,
        concurrentes:32,
        analogicos:12,
        digital :1,
        extensionesMin:0,
        extensionesMax:45,
        tipo: 'Appliance',
        imagen: '/home/zorrox/Downloads/flex-with-nested-containers/img/miniucs360_19.png'
      };
    }else if($scope.extensiones>46 && $scope.extensiones<95){
      $scope.productoSeleccionado = {  id:2,
      nombre: 'ELX 025-SSD',
      precio: 11,
      extensiones:100,
      concurrentes:50,
      analogicos:12,
      digital :1,
      extensionesMin:46,
      extensionesMax:95,
      tipo: 'Appliance',
      imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg'
    };
    } else if($scope.extensiones>95 && $scope.extensiones<245){
      $scope.productoSeleccionado = {  id:3,
      nombre: 'NLX 4000',
      precio: 12,
      extensiones:250,
      concurrentes:120,
      analogicos:4,
      digital :48,
      extensionesMin:96,
      extensionesMax:245,
      tipo: 'Appliance',
      imagen: '/home/zorrox/Downloads/flex-with-nested-containers/img/miniucs360_19.png'
    };
    } else {
      $scope.productoSeleccionado = {   id:4,
        nombre: 'ELX 5000 ',
        precio: 13,
        extensiones:500,
        concurrentes:250,
        analogicos:72,
        digital :8,
        extensionesMin:246,
        extensionesMax:500,
        tipo: 'Appliance',
        imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg'
    };
    }

    if($scope.extensiones>2){
      $scope.lista[4].cantidad=$scope.extensiones-2;
    }



  };


  $scope.tksip = function() {
    $scope.lista[2].cantidad=$scope.TKSIP;
    return $scope.TKSIP;
  };



  $scope.digitalesF = function() {
if ($scope.digitales>0 && $scope.extensiones<=4){
  $scope.lista[3]={  categoria:'Tarjetas', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',        cantidad:1,nombre: 'A400P04',       descripcion:'4 Port Analog PCI card + 4 FXO modules',       precio: 1};

} else if($scope.digitales>4 && $scope.digitales<=8){
    $scope.lista[3]= {   categoria:'Tarjetas', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'A800P08',       descripcion:'8 Port Analog PCI card + 8 FXO modules',       precio: 1};
  }else{
    $scope.lista[3]=  { categoria:'Tarjetas', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',         cantidad:1,nombre: 'A1200P0012',       descripcion:'12 Port Analog PCI card + 12 FXO modules',       precio: 1};
  }

  };


  $scope.mantenimientoF = function() {
    if ($scope.mantenimiento=='estandar') {
    $scope.lista.push( { categoria:'Mantenimiento',imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'ELX-SUSCRP-STANDARD',       descripcion:'Contrato de Mantenimiento Suscripción Anual Nivel Standard',       precio: 1})
    }else if ($scope.mantenimiento=='premium') {
$scope.lista.push( { categoria:'Mantenimiento', imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'ELX-SUSCRP-AVANZADO',       descripcion:'Contrato de Mantenimiento Suscripción Anual Nivel Avanzado',       precio: 1})
    }else if ($scope.mantenimiento=='avanzado') {
$scope.lista.push({ categoria:'Mantenimiento',imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'ELX-SUSCRP-SUPREMO',       descripcion:'Contrato de Mantenimiento Suscripción Anual Nivel Supremo',       precio: 1})
    }
  };

  $scope.serviciosF = function() {
    if ($scope.servicios=='local') {
    $scope.lista.push( { categoria:'Servicios',imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'ELX025-PS-QUOTE*^',       descripcion:'Servicios Profesionales Locales',       precio: 1})
  }else if ($scope.servicios=='foraneo') {
    $scope.lista.push( { categoria:'Servicios',imagen:'/home/zorrox/Downloads/flex-with-nested-containers/img/elx025.jpg',       cantidad:1,nombre: 'ELX025-PS-QUOTE*^',       descripcion:'Servicios Profesionales Foraneos',       precio: 1})
    }
    };



})
.config(function($mdThemingProvider) {

  // Configure a dark theme with primary foreground yellow

  $mdThemingProvider
    .theme('default')



});



/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/
