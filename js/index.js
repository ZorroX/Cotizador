angular
.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache','ngAnimate','ui.router', 'firebase'])

// cConfiguracion de rutas
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'login.html'

  })

  // route to show our basic form (/form)
  .state('form', {
    url: '/form',
    templateUrl: 'form.html'

  })
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
  })
  .state('form.adicionales', {
    url: '/adicionales',
    templateUrl: 'form-adicionales.html'
  })
  .state('form.result', {
    url: '/result',
    templateUrl: 'form-result.html'
  })

  .state('form.adminusuarios', {
    url: '/admin-usuarios',
    templateUrl: 'admin-usuarios.html'

  })
  .state('form.adminproductos', {
    url: '/admin-productos',
    templateUrl: 'admin-productos.html'

  });

  // catch all route
  // send users to the form page
  $urlRouterProvider.otherwise('/login');
})


.controller('DemoCtrl', function($scope,$mdSidenav,$mdDialog,$firebase) {


  var ref = new Firebase("https://toga-4f41e.firebaseio.com/productos");
  var fb = $firebase(ref);



  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.isOpen = false;

  $scope.demo = {
    isOpen: false,
    count: 0,
    selectedDirection: 'left'
  };


  $scope.tema = 'default';
  $scope.usuario='';
  $scope.logo='img/logoDefault.png';
  $scope.passwordShow=0;
  $scope.loginShow=1;
  $scope.buscaShow=1;
  $scope.usuarioDisable=0;

  $scope.formLogin ={};



  $scope.formData = {extensiones:0,analogos:0,digitales:0,TKSIP:0};

  $scope.usuariosData ={};
  $scope.productosData={};

  $scope.usuarios = [
    {nombre:"toga",password:"123",logo:"img/logo.svg",tema:"orange",
    privilegios: [
      {nombre:"usuarios",ref:"form.adminusuarios",icono:"img/icons/ic_comment_24px.svg"},
      {nombre:"productos",ref:"form.adminproductos",icono:"img/icons/ic_comment_24px.svg"},
      {nombre:"cotizacion",ref:"form.admincotizacion",icono:"img/icons/ic_comment_24px.svg"}
    ]},
    {nombre:"maxcom",password:"123",logo:"img/maxcomlogo.png",tema:"red",
    privilegios: [
      {nombre:"cotizacion",ref:"form.admincotizacion",icono:"img/icons/ic_comment_24px.svg"}
    ]},
    {nombre:"bestel",password:"123",logo:"img/bestel.jpg",tema:"green",
    privilegios: [
      {nombre:"cotizacion",ref:"form.admincotizacion",icono:"img/icons/ic_comment_24px.svg"}
    ]},
    {nombre:"marcatel",password:"123",logo:"img/marcatel.jpg",tema:"yellow",
    privilegios: [
      {nombre:"cotizacion",ref:"form.admincotizacion",icono:"img/icons/ic_comment_24px.svg"}]}
    ];

    $scope.privilegios = [
      {nombre:"usuarios",ref:"admin-usuarios.html",icono:"img/icons/ic_comment_24px.svg"},
      {nombre:"productos",ref:"admin-productos.html",icono:"img/icons/ic_comment_24px.svg"},
      {nombre:"cotizacion",ref:"admin-cotizacion.html",icono:"img/icons/ic_comment_24px.svg"}
    ];







    $scope.mantenimientoSelect = [
      {opcion : "Estandar", id : 1},
      {opcion : "Supremo", id : 2},
      {opcion : "Avanzado", id : 3}
    ];
    $scope.servicioSelect = [
      {opcion : "Local", id : 1},
      {opcion : "Foraneo", id : 2}
    ];
    $scope.pagoSelect = [
      {opcion : "Contado", id : 1},
      {opcion : "12 Meses", id : 2},
      {opcion : "24 Meses", id : 3},
      {opcion : "36 Meses", id : 4},
    ];



    $scope.productoShow=false;
    $scope.detalleShow=false;
    $scope.productos = [

      {
        id:1,
        nombre: 'NLX MiniUCS',
        descripcion:"",
        precio: 10,
        extensiones:50,
        concurrentes:32,
        analogicos:12,
        digital :1,
        extensionesMin:0,
        extensionesMax:45,
        tipo: 'Appliances',
        imagen: 'img/miniucs.png'
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
        tipo: 'Appliances',
        imagen:'img/elx025.jpg'
      },
      {
        id:3,
        nombre: 'NLX 4000',
        descripcion:"",
        precio: 12,
        extensiones:250,
        concurrentes:120,
        analogicos:4,
        digital :48,
        extensionesMin:96,
        extensionesMax:245,
        tipo: 'Appliances',
        imagen: 'img/nlx4000.jpeg'
      },
      {
        id:4,
        nombre: 'ELX 5000 ',
        descripcion:"",
        precio: 13,
        extensiones:500,
        concurrentes:250,
        analogicos:72,
        digital :8,
        extensionesMin:246,
        extensionesMax:500,
        tipo: 'Appliances',
        imagen:'img/elx025.jpg'
      }
    ];


    $scope.productoSeleccionado = {
      id:$scope.productos[0].id,
      nombre:$scope.productos[0].nombre,
      descripcion:"The miniUCS G2 is a unified communications server designed for small and medium-sized businesses. The device comes with pre-installed Elastix software and telephony integration configurable according to the customer’s needs.",
      precio:$scope.productos[0].precio,
      extensiones:$scope.productos[0].extensiones,
      concurrentes:$scope.productos[0].concurrentes,
      analogicos:$scope.productos[0].analogicos,
      digital :$scope.productos[0].digital,
      extensionesMin:$scope.productos[0].extensionesMin,
      extensionesMax:$scope.productos[0].extensionesMax,
      imagen: 'img/miniucs.png'
    };


    $scope.lista=[
      {  tipo:'Hardware', categoria:'Telefonos', imagen:'img/CC800-PN.jpeg'  ,   cantidad:1,nombre: 'TCS800-PN',       descripcion:'Teléfono IP Para Call Center ',       precio: 89},
      {  tipo:'Hardware', categoria:'Telefonos', imagen:'img/ES-290-PN.jpeg',    cantidad:1,nombre: 'TCS290-PN',       descripcion:'Teléfono IP avanzado',       precio: 120},
      { tipo:'Hardware',  categoria:'Telefonos', imagen:'img/ES206-PN.jpeg',       cantidad:1,nombre: 'TCS206-PN',       descripcion:'Teléfono Smart Office IP',       precio: 160},
      { tipo:'Hardware',  categoria:'Telefonos', imagen:'img/ES620-PN.jpeg',       cantidad:1,nombre: 'TCS620-PEGV4',       descripcion:'Teléfono IP para oficina',       precio: 160},
      { tipo:'Hardware',  categoria:'Telefonos', imagen:'img/WS330-PEGV4.jpeg',       cantidad:1,nombre: 'TCS330-PEGV4',       descripcion:'Teléfono IP inalambrico',       precio: 160},
      {  tipo:'Hardware', categoria:'Codec',  cantidad:0,nombre: 'CODEC G.729',       descripcion:'Licencia Codec G.729',       precio: 320},
      { categoria:'Mantenimiento', tipo:'Contrato', cantidad:1,nombre: 'ELX-PS-ABC-PACKAGE',       descripcion:'Paquete de 10 Horas Servicio Remoto Anual para Altas, Bajas & Cambios',       precio: 16200},
      {  tipo:'Hardware', categoria:'adicionales', imagen:'img/firewall.jpg'  ,   cantidad:1,nombre: 'Firewall',       descripcion:'Mantenga la seguridad de su red con este equipo',       precio: 14000},
      {  tipo:'Hardware', categoria:'adicionales', imagen:'img/diadema.jpg'  ,   cantidad:1,nombre: 'Diadema',       descripcion:'Mantenga sus manos libre, mientras habla por telefono',       precio: 1400}

    ];

    //admin-usuarios
    $scope.editarUsuario = function(usuario, event) {
      $mdDialog.show({
        controller: 'DemoCtrl',
        templateUrl: 'editaUsuario.tmpl.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true
      });
    };

    $scope.cancel = function() {
      $mdDialog.hide();
    };

    //admin-productos
    $scope.editarProducto = function(produto, event) {
      $mdDialog.show({
        controller: 'DemoCtrl',
        templateUrl: 'editaProductos.tmpl.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true
      });
    };


    $scope.removeTelefono = function(index){
      $scope.lista[index].cantidad -=1;
      if(index>0){

        $scope.lista[0].cantidad +=1;
      }
    }

    $scope.addTelefono = function(index){
      $scope.lista[index].cantidad +=1;
      if(index>0){

        $scope.lista[0].cantidad -=1;
      }

    }

    $scope.totalAppliance = function() {
      var total = 0.00;
      angular.forEach($scope.lista, function(item, key){
        if (item.categoria=='Appliances') {
          total += (item.cantidad * item.precio);
        }

      });
      return total;
    }
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
        if (item.categoria=='Servicios') {
          total += (item.cantidad * item.precio);
        }

      });
      return total;
    };


    $scope.totalMantenimiento = function() {
      var total = 0.00;
      angular.forEach($scope.lista, function(item, key){
        if (item.categoria=='Mantenimiento') {
          total += (item.cantidad * item.precio);
        }

      });
      return total;
    };





    $scope.totalPagoDiferido = function() {
      if ($scope.formData.pagoSeleccionado==1) {
        return '-'
      } else if ($scope.formData.pagoSeleccionado==2){
        return ((1.25 * ($scope.invoiceSubTotal())/12));
      }else if ($scope.formData.pagoSeleccionado==3) {
        return ((1.28 * ($scope.invoiceSubTotal())/24));
      }else if ($scope.formData.pagoSeleccionado==4) {
        return ((1.36 * ($scope.invoiceSubTotal())/36));
      }else {return '-'}
    };

    $scope.textoPagoDiferido = function() {
      if ($scope.formData.pagoSeleccionado==1) {
        return '-'
      } else if ($scope.formData.pagoSeleccionado==2){
        return '12 pagos mensuales'
      }else if ($scope.formData.pagoSeleccionado==3) {
        return '24 pagos mensuales'
      }else if ($scope.formData.pagoSeleccionado==4) {
        return '36 pagos mensuales'
      }else {return '-'}
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

    $scope.demo = function() {

      return $scope.extensiones;
    };


    $scope.seleccionaProducto = function() {
      $scope.lista[0].cantidad=$scope.formData.extensiones-2;
      $scope.lista[1].cantidad=1;
      $scope.lista[2].cantidad=1;
      $scope.lista[5].cantidad=$scope.formData.TKSIP;



            if($scope.productoSeleccionado.id==1 && $scope.formData.digitales == 0 &&  $scope.formData.analogos == 0 && $scope.formData.TKSIP==0){
              $scope.lista.push({  imagen: 'img/miniucs360_19.png', nombre:"NLX MiniUCS ",  descripcion:"The miniUCS G2 is a unified communications server designed for small and medium-sized businesses. The device comes with pre-installed Elastix software and telephony integration configurable according to the customer’s needs", precio:16400 , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });

            }
            else if($scope.productoSeleccionado.id==1 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=32){
              $scope.lista.push({  imagen: 'img/miniucs360_19.png', nombre:"NLX MiniUCS-1E1 ",  descripcion:"The miniUCS G2 is a unified communications server designed for small and medium-sized businesses. The device comes with pre-installed Elastix software and telephony integration configurable according to the customer’s needs", precio:30000  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
            }
            else if($scope.productoSeleccionado.id==1 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=32){
              $scope.lista.push({  imagen: 'img/miniucs360_19.png', nombre:"NLX MiniUCS-4FX ",  descripcion:"The miniUCS G2 is a unified communications server designed for small and medium-sized businesses. The device comes with pre-installed Elastix software and telephony integration configurable according to the customer’s needs", precio:22700  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
            }
            else if($scope.productoSeleccionado.id==1 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=32){
              $scope.lista.push({  imagen: 'img/miniucs360_19.png', nombre:"NLX MiniUCS-8FX ",  descripcion:"The miniUCS G2 is a unified communications server designed for small and medium-sized businesses. The device comes with pre-installed Elastix software and telephony integration configurable according to the customer’s needs", precio:30000  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
            }
            else if($scope.productoSeleccionado.id==1 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=32){
              $scope.lista.push({  imagen: 'img/miniucs360_19.png', nombre:"NLX MiniUCS-4FX ",  descripcion:"The miniUCS G2 is a unified communications server designed for small and medium-sized businesses. The device comes with pre-installed Elastix software and telephony integration configurable according to the customer’s needs", precio:22700  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"UMG-100 RJ ",  descripcion:"Gateway UMG con 01 link E1 30 canales VoIP", precio:18400  , categoria:"Gateways", tipo:"Hardware" , cantidad:1 });

            }
            else if($scope.productoSeleccionado.id==1 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=32){
              $scope.lista.push({  imagen: 'img/miniucs360_19.png', nombre:"NLX MiniUCS-8FX ",  descripcion:"The miniUCS G2 is a unified communications server designed for small and medium-sized businesses. The device comes with pre-installed Elastix software and telephony integration configurable according to the customer’s needs", precio:30000  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"UMG-100 RJ ",  descripcion:"Gateway UMG con 01 link E1 30 canales VoIP", precio:18400  , categoria:"Gateways", tipo:"Hardware" , cantidad:1 });

            }
            else if($scope.productoSeleccionado.id==2 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=50){
              $scope.lista.push({  imagen: 'img/miniucs360_19.png', nombre:"ELX 025-SSD ",  descripcion:"The ELX025 G3 along with our Elastix software keep your business communications smooth, always keeping you in touch with customers, suppliers, and partners no matter where you are.", precio:33700  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });

            }
            else if($scope.productoSeleccionado.id==2 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=50){
              $scope.lista.push({  imagen: 'img/miniucs360_19.png', nombre:"ELX 025-SSD ",  descripcion:"The ELX025 G3 along with our Elastix software keep your business communications smooth, always keeping you in touch with customers, suppliers, and partners no matter where you are.", precio:33700  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"A400P04 ",  descripcion:"Tarjeta Analogica", precio:6700  , categoria:"Tarjeta", tipo:"Hardware" , cantidad:1 });

            }
            else if($scope.productoSeleccionado.id==2 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=50){
              $scope.lista.push({  imagen: 'img/miniucs360_19.png', nombre:"ELX 025-SSD ",  descripcion:"The ELX025 G3 along with our Elastix software keep your business communications smooth, always keeping you in touch with customers, suppliers, and partners no matter where you are.", precio:33700  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"A400P08 ",  descripcion:"Tarjeta Analogica", precio:11200  , categoria:"Tarjeta", tipo:"Hardware" , cantidad:1 });


            }
            else if($scope.productoSeleccionado.id==2 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=50){
              $scope.lista.push({  imagen: 'img/miniucs360_19.png', nombre:"ELX 025-SSD ",  descripcion:"The ELX025 G3 along with our Elastix software keep your business communications smooth, always keeping you in touch with customers, suppliers, and partners no matter where you are.", precio:33700  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"A400P012 ",  descripcion:"Tarjeta Analogica", precio:16260  , categoria:"Tarjeta", tipo:"Hardware" , cantidad:1 });

            } else if ($scope.productoSeleccionado.id==2&& $scope.formData.digitales>=1&& $scope.formData.digitales<=30&& $scope.formData.analogos>=0&& $scope.formData.analogos<=0&& $scope.formData.TKSIP>=0&& $scope.formData.TKSIP<=50)
            {
              $scope.lista.push({  imagen: 'img/miniucs360_19.png', nombre:"ELX 025-SSD ",  descripcion:"The ELX025 G3 along with our Elastix software keep your business communications smooth, always keeping you in touch with customers, suppliers, and partners no matter where you are.", precio:33700  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"1E1DE – D130P/S ",  descripcion:"Tarjeta Digital", precio:23300  , categoria:"Tarjeta", tipo:"Hardware" , cantidad:1 });

            }
            else if($scope.productoSeleccionado.id==2 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=50){
              $scope.lista.push({ imagen: 'img/miniucs360_19.png',  nombre:"ELX 025-SSD ",  descripcion:"The ELX025 G3 along with our Elastix software keep your business communications smooth, always keeping you in touch with customers, suppliers, and partners no matter where you are.", precio:33700  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"A400P04 ",  descripcion:"Tarjeta Analogica", precio:6700  , categoria:"Tarjeta", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"UMG-100 RJ ",  descripcion:"Gateway UMG con 01 link E1 30 canales VoIP", precio:18400  , categoria:"Gateways", tipo:"Hardware" , cantidad:1 });
            }
            else if($scope.productoSeleccionado.id==2 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=50){
              $scope.lista.push({ imagen: 'img/miniucs360_19.png',  nombre:"ELX 025-SSD ",  descripcion:"The ELX025 G3 along with our Elastix software keep your business communications smooth, always keeping you in touch with customers, suppliers, and partners no matter where you are.", precio:33700  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"A400P08 ",  descripcion:"Tarjeta Analogica", precio:11200  , categoria:"Tarjeta", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"UMG-100 RJ ",  descripcion:"Gateway UMG con 01 link E1 30 canales VoIP", precio:18400  , categoria:"Gateways", tipo:"Hardware" , cantidad:1 });

            }
            else if($scope.productoSeleccionado.id==2 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=50){
              $scope.lista.push({ imagen: 'img/miniucs360_19.png',  nombre:"ELX 025-SSD ",  descripcion:"The ELX025 G3 along with our Elastix software keep your business communications smooth, always keeping you in touch with customers, suppliers, and partners no matter where you are.", precio:33700  , categoria:"Appliancess", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"A400P012 ",  descripcion:"Tarjeta Analogica", precio:16260  , categoria:"Tarjeta", tipo:"Hardware" , cantidad:1 });
              $scope.lista.push({  nombre:"UMG-100 RJ ",  descripcion:"Gateway UMG con 01 link E1 30 canales VoIP", precio:18400  , categoria:"Gateways", tipo:"Hardware" , cantidad:1 });

            }
            else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120)
            {
              $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });
            }
            else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120)
            {
              $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });
            }
            else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
              $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
              else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                  $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                  else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                    $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                    else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                      $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                      else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                        $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                        else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                          $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                          else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                            $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                            else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                              $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });
                              $scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                              else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                                $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                                  $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                  else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                                    $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                    else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                                      $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                      else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                                        $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                        else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                                          $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                          else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                                            $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                            else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                                              $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                              else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){
                                                $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120)
                                                {
                                                  $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });
                                                }
                                                else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120)
                                                {
                                                  $scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });
                                                }
                                                else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){$scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==3 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=120){$scope.lista.push({  nombre:"NLX 4000",  descripcion:"The NLX4000 is a unified communications server designed for medium and high performance environments in medium and large-sized businesses.", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"nlx4000.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=121 && $scope.formData.digitales<=150 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=151 && $scope.formData.digitales<=180 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=181 && $scope.formData.digitales<=210 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=211 && $scope.formData.digitales<=240 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=49 && $scope.formData.analogos<=52 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=53 && $scope.formData.analogos<=56 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=57 && $scope.formData.analogos<=60 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=51 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=49 && $scope.formData.analogos<=60 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=61 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=49 && $scope.formData.analogos<=60 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=61 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=49 && $scope.formData.analogos<=60 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=61 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=49 && $scope.formData.analogos<=60 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=61 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=121 && $scope.formData.digitales<=150 && $scope.formData.analogos>=1 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=121 && $scope.formData.digitales<=150 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==4 && $scope.formData.digitales>=121 && $scope.formData.digitales<=150 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=250){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=121 && $scope.formData.digitales<=150 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=151 && $scope.formData.digitales<=180 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=181 && $scope.formData.digitales<=210 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=211 && $scope.formData.digitales<=240 && $scope.formData.analogos>=0 && $scope.formData.analogos<=0 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=49 && $scope.formData.analogos<=52 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=53 && $scope.formData.analogos<=56 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=57 && $scope.formData.analogos<=60 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=0 && $scope.formData.digitales<=0 && $scope.formData.analogos>=51 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=49 && $scope.formData.analogos<=60 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=1 && $scope.formData.digitales<=30 && $scope.formData.analogos>=61 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=49 && $scope.formData.analogos<=60 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=31 && $scope.formData.digitales<=60 && $scope.formData.analogos>=61 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=49 && $scope.formData.analogos<=60 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=61 && $scope.formData.digitales<=90 && $scope.formData.analogos>=61 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=1 && $scope.formData.analogos<=4 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P04",  descripcion:"Tarjeta Analogica", precio:6700, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=5 && $scope.formData.analogos<=8 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P08",  descripcion:"Tarjeta Analogica", precio:11200, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P08.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=9 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=49 && $scope.formData.analogos<=60 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=91 && $scope.formData.digitales<=120 && $scope.formData.analogos>=61 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=121 && $scope.formData.digitales<=150 && $scope.formData.analogos>=1 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=121 && $scope.formData.digitales<=150 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=121 && $scope.formData.digitales<=150 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=121 && $scope.formData.digitales<=150 && $scope.formData.analogos>=49 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=121 && $scope.formData.digitales<=150 && $scope.formData.analogos>=73 && $scope.formData.analogos<=96 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"1E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=150 && $scope.formData.digitales<=180 && $scope.formData.analogos>=1 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=150 && $scope.formData.digitales<=180 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=150 && $scope.formData.digitales<=180 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=150 && $scope.formData.digitales<=180 && $scope.formData.analogos>=49 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=150 && $scope.formData.digitales<=180 && $scope.formData.analogos>=73 && $scope.formData.analogos<=96 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"2E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=181 && $scope.formData.digitales<=210 && $scope.formData.analogos>=1 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=181 && $scope.formData.digitales<=210 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=181 && $scope.formData.digitales<=210 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=181 && $scope.formData.digitales<=210 && $scope.formData.analogos>=49 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=181 && $scope.formData.digitales<=210 && $scope.formData.analogos>=73 && $scope.formData.analogos<=96 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"3E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=211 && $scope.formData.digitales<=240 && $scope.formData.analogos>=1 && $scope.formData.analogos<=12 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"A400P012",  descripcion:"Tarjeta Analogica", precio:16260, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=211 && $scope.formData.digitales<=240 && $scope.formData.analogos>=13 && $scope.formData.analogos<=24 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"24FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=211 && $scope.formData.digitales<=240 && $scope.formData.analogos>=25 && $scope.formData.analogos<=48 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=211 && $scope.formData.digitales<=240 && $scope.formData.analogos>=49 && $scope.formData.analogos<=72 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}
                                                else if($scope.productoSeleccionado.id==5 && $scope.formData.digitales>=211 && $scope.formData.digitales<=240 && $scope.formData.analogos>=73 && $scope.formData.analogos<=96 && $scope.formData.TKSIP>=0 && $scope.formData.TKSIP<=490){$scope.lista.push({  nombre:"ELX 5000",  descripcion:"Designed to operate in harsh environments, the ELX5000 G2 combines robustness with high availability features and a high level of telephony integration", precio:0, categoria:"Appliances", tipo:"Hardware", imagen:"elx5000Full.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"4E1DE – D130P/S",  descripcion:"Tarjeta Digital", precio:23300, categoria:"Tarjeta", tipo:"Hardware", imagen:"1e1.jpeg" , cantidad:1 });$scope.lista.push({  nombre:"48FXO/FXS",  descripcion:"Tarjeta Analogica", precio:0, categoria:"Tarjeta", tipo:"Hardware", imagen:"A400P04.jpeg" , cantidad:1 });}



                                          if ($scope.formData.mantenimientoSeleccionado==1) {
                                            var precioTotal=$scope.totalHardware()*.20;
                                            $scope.lista.push({  nombre:"ELX-SUSCRP-STANDARD ",  descripcion:"Contrato de Mantenimiento Suscripción Anual Nivel Standard", precio:precioTotal  , categoria:"Mantenimiento", tipo:"Contrato" , cantidad:1 });

                                          }else if ($scope.formData.mantenimientoSeleccionado==2) {
                                            var precioTotal=$scope.totalHardware()*.30;
                                            $scope.lista.push({  nombre:"ELX-SUSCRP-AVANZADO ",  descripcion:"Contrato de Mantenimiento Suscripción Anual Nivel Avanzado", precio:precioTotal , categoria:"Mantenimiento", tipo:"Contrato" , cantidad:1 });
                                          }else if ($scope.formData.mantenimientoSeleccionado==3) {
                                            var precioTotal=$scope.totalHardware()*.40;
                                            $scope.lista.push({  nombre:"ELX-SUSCRP-SUPREMO ",  descripcion:"Contrato de Mantenimiento Suscripción Anual Nivel Supremo", precio:precioTotal  , categoria:"Mantenimiento", tipo:"Contrato" , cantidad:1 });
                                          }

                                          if ($scope.formData.servicioSeleccionado==1 && $scope.productoSeleccionado.id==1) {
                                            $scope.lista.push({  nombre:"Locales Mini ",  descripcion:"Servicios Profesionales Locales", precio:12000  , categoria:"Servicios", tipo:"Servicios" , cantidad:1 });
                                          }else if ($scope.formData.servicioSeleccionado==2 && $scope.productoSeleccionado.id==1) {
                                            $scope.lista.push({  nombre:"Foraneos ",  descripcion:"No incluye Viaticos", precio:12000  , categoria:"Servicios", tipo:"Servicios" , cantidad:1 });
                                          }  else if ($scope.formData.servicioSeleccionado==1 && $scope.productoSeleccionado.id==2) {
                                            $scope.lista.push({  nombre:"Locales 025 ",  descripcion:"Servicios Profesionales Locales", precio:22400  , categoria:"Servicios", tipo:"Servicios" , cantidad:1 });
                                          }else if ($scope.formData.servicioSeleccionado==2 && $scope.productoSeleccionado.id==2) {
                                            $scope.lista.push({  nombre:"Foraneos ",  descripcion:"No incluye Viaticos", precio:22400  , categoria:"Servicios", tipo:"Servicios" , cantidad:1 });
                                          }






                                          var precioPoliza=$scope.totalAppliance()*.40;

                                          $scope.lista.push({ categoria:'Mantenimiento', tipo:'Contrato',imagen:'',       cantidad:1,nombre: 'Poliza de Reemplazo',       descripcion:'Poliza de Reemplazo Inmediato Elastix Appliances',       precio:precioPoliza});

                                          angular.forEach($scope.lista, function(item, key){
                                            if (item.tipo=='Contrato') {
                                              if ($scope.formData.pagoSeleccionado==1) {

                                              }else if ($scope.formData.pagoSeleccionado==2) {

                                              }else if ($scope.formData.pagoSeleccionado==3) {
                                                item.cantidad=2;
                                              }else if ($scope.formData.pagoSeleccionado==4) {
                                                item.cantidad=3;
                                              }
                                            }

                                          });

                                        };

                                        $scope.buscaProducto = function() {
                                          $scope.totalLineas=$scope.formData.TKSIP+$scope.formData.digitales+$scope.formData.analogos;
                                          if($scope.formData.extensiones>=0 && $scope.formData.extensiones<46 && $scope.totalLineas>=0 && $scope.totalLineas<=32){
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
                                              tipo: 'Appliances',
                                              imagen: 'img/miniucs.png'
                                            };
                                          }else if($scope.totalLineas>32 && $scope.totalLineas<50){  $scope.productoSeleccionado = {  id:2,
                                            nombre: 'ELX 025-SSD',
                                            precio: 11,
                                            extensiones:100,
                                            concurrentes:50,
                                            analogicos:12,
                                            digital :1,
                                            extensionesMin:46,
                                            extensionesMax:95,
                                            tipo: 'Appliances',
                                            imagen:'img/elx025.jpg'
                                          };}else if($scope.formData.extensiones>45 && $scope.formData.extensiones<95){
                                            $scope.productoSeleccionado = {  id:2,
                                              nombre: 'ELX 025-SSD',
                                              precio: 11,
                                              extensiones:100,
                                              concurrentes:50,
                                              analogicos:12,
                                              digital :1,
                                              extensionesMin:46,
                                              extensionesMax:95,
                                              tipo: 'Appliances',
                                              imagen:'img/elx025.jpg'
                                            };
                                          } else if($scope.totalLineas>51 && $scope.totalLineas<120){$scope.productoSeleccionado = {  id:3,
                                            nombre: 'NLX 4000',
                                            precio: 12,
                                            extensiones:250,
                                            concurrentes:120,
                                            analogicos:4,
                                            digital :48,
                                            extensionesMin:96,
                                            extensionesMax:245,
                                            tipo: 'Appliances',
                                            imagen: 'img/nlx4000.jpeg'
                                          };
                                        }else if($scope.formData.extensiones>96 && $scope.formData.extensiones<290){
                                          $scope.productoSeleccionado = {
                                            id:3,
                                            nombre: 'NLX 4000',
                                            precio: 12,
                                            extensiones:250,
                                            concurrentes:120,
                                            analogicos:4,
                                            digital :48,
                                            extensionesMin:96,
                                            extensionesMax:245,
                                            tipo: 'Appliances',
                                            imagen: 'img/nlx4000.jpeg'
                                          };
                                        }else if($scope.totalLineas>121 && $scope.totalLineas<250){$scope.productoSeleccionado = {
                                          id:4,
                                          nombre: 'ELX 5000 ',
                                          precio: 13,
                                          extensiones:500,
                                          concurrentes:250,
                                          analogicos:72,
                                          digital :8,
                                          extensionesMin:246,
                                          extensionesMax:500,
                                          tipo: 'Appliances',
                                          imagen:'img/elx5000.jpeg'
                                        };
                                      }else if($scope.formData.extensiones>291 && $scope.formData.extensiones<590){
                                        $scope.productoSeleccionado = {  id:3,
                                          nombre: 'NLX 4000',
                                          precio: 12,
                                          extensiones:250,
                                          concurrentes:120,
                                          analogicos:4,
                                          digital :48,
                                          extensionesMin:96,
                                          extensionesMax:245,
                                          tipo: 'Appliances',
                                          imagen: 'img/nlx4000.jpeg'
                                        };
                                      }else if($scope.totalLineas>250 && $scope.totalLineas<490){
                                        $scope.productoSeleccionado = {   id:5,
                                          nombre: 'ELX 5000 FULL',
                                          precio: 13,
                                          extensiones:500,
                                          concurrentes:250,
                                          analogicos:72,
                                          digital :8,
                                          extensionesMin:246,
                                          extensionesMax:500,
                                          tipo: 'Appliances',
                                          imagen:'img/elx5000.jpeg'
                                        };
                                      } else if($scope.formData.extensiones>591 && $scope.formData.extensiones<1200){
                                        $scope.productoSeleccionado = {   id:5,
                                          nombre: 'ELX 5000 FULL',
                                          precio: 13,
                                          extensiones:500,
                                          concurrentes:250,
                                          analogicos:72,
                                          digital :8,
                                          extensionesMin:246,
                                          extensionesMax:500,
                                          tipo: 'Appliances',
                                          imagen:'img/elx5000.jpeg'
                                        };
                                      }else {
                                        $scope.productoSeleccionado = {   id:4,
                                          nombre: 'ELX 5000 ',
                                          precio: 13,
                                          extensiones:500,
                                          concurrentes:250,
                                          analogicos:72,
                                          digital :8,
                                          extensionesMin:246,
                                          extensionesMax:500,
                                          tipo: 'Appliances',
                                          imagen:'img/elx5000.jpeg'
                                        };

                                      }



                                    };


                                    $scope.buscaUsuario = function() {
                                      angular.forEach($scope.usuarios, function(item, key){
                                        if (item.nombre==$scope.formLogin.usuario) {
                                          $scope.tema=item.tema;
                                          $scope.logo=item.logo;
                                          $scope.privilegios=item.privilegios;
                                          $scope.passwordShow=1;
                                          $scope.buscaShow=0;
                                          $scope.usuarioDisable=1;
                                        }

                                      });
                                    };

                                    $scope.validaUsuario = function() {
                                      if ($scope.usuario=='toga' && $scope.password=='Mexico123') {

                                      }else if ($scope.usuario=='maxcom'  &&  $scope.password=='Mexico123') {

                                      }
                                    };
                                    $scope.limpiarLista=function(){
                                      $scope.lista=[
                                        {  tipo:'Hardware', categoria:'Telefonos', imagen:'img/CC800-PN.jpeg'  ,   cantidad:1,nombre: 'TCS800-PN',       descripcion:'Teléfono IP Para Call Center ',       precio: 89},
                                        {  tipo:'Hardware', categoria:'Telefonos', imagen:'img/ES-290-PN.jpeg',    cantidad:1,nombre: 'TCS290-PN',       descripcion:'Teléfono IP avanzado',       precio: 120},
                                        { tipo:'Hardware',  categoria:'Telefonos', imagen:'img/ES206-PN.jpeg',       cantidad:1,nombre: 'TCS206-PN',       descripcion:'Teléfono Smart Office IP',       precio: 160},
                                        { tipo:'Hardware',  categoria:'Telefonos', imagen:'img/ES620-PN.jpeg',       cantidad:1,nombre: 'TCS620-PEGV4',       descripcion:'Teléfono IP para oficina',       precio: 160},
                                        { tipo:'Hardware',  categoria:'Telefonos', imagen:'img/WS330-PEGV4.jpeg',       cantidad:1,nombre: 'TCS330-PEGV4',       descripcion:'Teléfono IP inalambrico',       precio: 160},
                                        {  tipo:'Hardware', categoria:'Codec',  cantidad:0,nombre: 'CODEC G.729',       descripcion:'Licencia Codec G.729',       precio: 320},
                                        { categoria:'Mantenimiento', tipo:'Contrato', cantidad:1,nombre: 'ELX-PS-ABC-PACKAGE',       descripcion:'Paquete de 10 Horas Servicio Remoto Anual para Altas, Bajas & Cambios',       precio: 16200},
                                        {  tipo:'Hardware', categoria:'adicionales', imagen:'img/firewall.jpg'  ,   cantidad:1,nombre: 'Firewall',       descripcion:'Mantenga la seguridad de su red con este equipo',       precio: 14000},
                                        {  tipo:'Hardware', categoria:'adicionales', imagen:'img/diadema.jpg'  ,   cantidad:1,nombre: 'Diadema',       descripcion:'Mantenga sus manos libre, mientras habla por telefono',       precio: 1400}

                                      ];
                                    };









                                  })
                                  .config(function($mdThemingProvider) {


                                    $mdThemingProvider.theme('default');

                                    $mdThemingProvider.theme('red')
                                    .primaryPalette('red')
                                    .accentPalette('blue')
                                    .warnPalette('red');

                                    $mdThemingProvider.theme('orange')
                                    .primaryPalette('orange')
                                    .accentPalette('blue')
                                    .warnPalette('red');

                                    $mdThemingProvider.theme('yellow')
                                    .primaryPalette('yellow')
                                    .accentPalette('blue')
                                    .warnPalette('red');

                                    $mdThemingProvider.theme('green')
                                    .primaryPalette('green')
                                    .accentPalette('blue')
                                    .warnPalette('red');

                                    $mdThemingProvider.alwaysWatchTheme(true);

                                  });



                                  /**
                                  Copyright 2016 Google Inc. All Rights Reserved.
                                  Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
                                  **/
