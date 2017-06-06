// First let's define a Sea object :
Steve = function(){

  // create the geometry (shape) of the cylinder;
  // the parameters are:
  // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
  //var geom = new THREE.SphereGeometry(800, 7, 9);

  // create the material
  //var mat = new THREE.MeshPhongMaterial({
  //  color: Colors.brownDark,
  //  transparent:true,
  //  opacity:.6,
  //  shading:THREE.FlatShading,
  //});

  //var mat = new THREE.MeshBasicMaterial( {color: 0x000000} );

  // To create an object in Three.js, we have to create a mesh
  // which is a combination of a geometry and some material
  this.mesh = new THREE.Mesh(geom, mat);

  this.mesh.name = 'steve';

  // Allow the sea to receive shadows
  this.mesh.receiveShadow = true;

}

// Instantiate the sea and add it to the scene:

var steve = function(){

};
steveLoaded = false;

function createSteve(){

  // add the mesh of the steve to the scene
  //scene.add(steve.mesh);

  loader.load( 'assets/images/minecraft-steve.json', function ( obj ) {

    steve.mesh = obj;

    steve.mesh.scale.set(20, 20, 20);
    steve.mesh.position.y = -100;
    steve.mesh.position.z = 600;
    steve.mesh.rotation.x = -(Math.PI/6);
    steve.mesh.rotation.y = -(Math.PI/2);

    scene.add( steve.mesh );

    steveLoaded = true;
  });
}



//Steve.prototype.moveRun() = function (){
//
//}