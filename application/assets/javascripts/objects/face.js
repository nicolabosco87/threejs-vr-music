// Instantiate the sea and add it to the scene:

var face = function(){

};
faceLoaded = false;

function createFace(){

  // add the mesh of the face to the scene
  //scene.add(face.mesh);


  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath( 'assets/models/face/' );
  mtlLoader.load( 'mesh.mtl', function( materials ) {

    materials.preload();

    //materials.materials.default.map.magFilter = THREE.NearestFilter;
    //materials.materials.default.map.minFilter = THREE.LinearFilter;

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials( materials );
    objLoader.setPath( 'assets/models/face/' );
    objLoader.load( 'mesh.obj', function ( object ) {

      face.mesh = object;
      face.mesh.position.y = 300;
      face.mesh.position.x = 400;
      face.mesh.scale.set(800, 800, 800);
      scene.add( face.mesh );

      faceLoaded = true;

    } ); // , onProgress, onError

  });


  /*objLoader.load( 'assets/models/face/mesh.obj', function ( obj ) {

    face.mesh = obj;

    face.mesh.scale.set(20, 20, 20);
    face.mesh.position.y = -100;
    face.mesh.position.z = 600;
    face.mesh.rotation.x = -(Math.PI/6);
    face.mesh.rotation.y = -(Math.PI/2);

    face.mesh.name = 'face';

    face.mesh.receiveShadow = true;

    scene.add( face.mesh );

    faceLoaded = true;
  });*/
}



//Face.prototype.moveRun() = function (){
//
//}