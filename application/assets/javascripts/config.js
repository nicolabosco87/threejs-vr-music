
var Colors = {
  red:0xf25346,
  white:0xd8d0d1,
  brown:0x59332e,
  pink:0xF5986E,
  brownDark:0x23190f,
  blue:0x68c3c0,

};

var manager = new THREE.LoadingManager();
manager.onProgress = function ( item, loaded, total ) {

  console.log( item, loaded, total );

};
var loader = new THREE.ObjectLoader();

var objLoader = new THREE.OBJLoader( manager );

