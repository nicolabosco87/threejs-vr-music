// Instantiate the sea and add it to the scene:

var paola = function(){

};
paolaLoaded = false;

function createPaola(){

  // add the mesh of the paola to the scene
  //scene.add(paola.mesh);


  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath( 'assets/models/paola/' );
  mtlLoader.load( 'mesh.mtl', function( materials ) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials( materials );
    objLoader.setPath( 'assets/models/paola/' );
    objLoader.load( 'mesh.obj', function ( object ) {

      paola.mesh = object;
      paola.mesh.position.y = 300;
      paola.mesh.position.x = -400;
      paola.mesh.scale.set(1000, 1000, 1000);
      scene.add( paola.mesh );

      paolaLoaded = true;

    } ); // , onProgress, onError

  });


  /*objLoader.load( 'assets/models/paola/mesh.obj', function ( obj ) {

    paola.mesh = obj;

    paola.mesh.scale.set(20, 20, 20);
    paola.mesh.position.y = -100;
    paola.mesh.position.z = 600;
    paola.mesh.rotation.x = -(Math.PI/6);
    paola.mesh.rotation.y = -(Math.PI/2);

    paola.mesh.name = 'paola';

    paola.mesh.receiveShadow = true;

    scene.add( paola.mesh );

    paolaLoaded = true;
  });*/
}



//Paola.prototype.moveRun() = function (){
//
//}