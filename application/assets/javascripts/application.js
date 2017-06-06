/**
 * Main Application File
 *
 * Use for bootstrapping large application
 * or just fill it with JS on small projects
 *
 */




window.addEventListener('load', init, false);

function init() {
  // set up the scene, the camera and the renderer
  createScene();

  // add the lights
  createLights();

  // add particles
  CreateParticles();

  StartAudio();

  // add the objects
  //createPlanet();
  //createSteve();
  //createSky();
  //createFace();
  //createPaola();

  //add the listener
  document.addEventListener('mousemove', handleMouseMove, false);

  // start a loop that will update the objects' positions
  // and render the scene on each frame
  loop();
}


var mousePos={x:0, y:0};

// now handle the mousemove event

function handleMouseMove(event) {

  // here we are converting the mouse position value received
  // to a normalized value varying between -1 and 1;
  // this is the formula for the horizontal axis:

  var tx = -1 + (event.clientX / WIDTH)*2;

  // for the vertical axis, we need to inverse the formula
  // because the 2D y-axis goes the opposite direction of the 3D y-axis

  var ty = 1 - (event.clientY / HEIGHT)*2;
  mousePos = {x:tx, y:ty};

}