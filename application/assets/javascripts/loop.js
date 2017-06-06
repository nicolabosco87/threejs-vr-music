function loop(dt){
  // Rotate the propeller, the sea and the sky
  //sky.mesh.rotation.x += .01;
  //planet.mesh.rotation.x += .01;

  // update the plane on each frame
  if (steveLoaded) {
    updateSteve();
  }

  if (faceLoaded) {
    updateFace();
  }

  if (paolaLoaded) {
    updatePaola();
  }

  //steve.pilot.updateHairs();

  //sea.moveWaves();

  UpdateParticles();

  // render the scene
  renderer.render(scene, camera);

  effect.render(scene, camera);

  controls.update(dt);

  // call the loop function again
  requestAnimationFrame(loop);
}

function updateSteve(){

  // let's move the steve between -100 and 100 on the horizontal axis,
  // and between 25 and 175 on the vertical axis,
  // depending on the mouse position which ranges between -1 and 1 on both axes;
  // to achieve that we use a normalize function (see below)

  var targetX = normalize(mousePos.x, -1, 1, -180, 180);
  var targetY = normalize(mousePos.y, -1, 1, -40, 0);

  // update the steve's position
  //airplane.mesh.position.y = targetY;

  steve.mesh.position.y += (targetY-steve.mesh.position.y)*0.1;

  steve.mesh.position.x = targetX;

  steve.mesh.rotation.z = (targetY-steve.mesh.position.y)*0.00128;
  steve.mesh.rotation.y = - (Math.PI/2) + (Math.sin(mousePos.x))/2;
  //
  console.log(Math.sin(steve.mesh.position.x));

  // - (Math.PI/2)

  //steve.propeller.rotation.x += 0.3;
}

function normalize(v,vmin,vmax,tmin, tmax){

  var nv = Math.max(Math.min(v,vmax), vmin);
  var dv = vmax-vmin;
  var pc = (nv-vmin)/dv;
  var dt = tmax-tmin;
  var tv = tmin + (pc*dt);
  return tv;

}



function updateFace(){

  // let's move the steve between -100 and 100 on the horizontal axis,
  // and between 25 and 175 on the vertical axis,
  // depending on the mouse position which ranges between -1 and 1 on both axes;
  // to achieve that we use a normalize function (see below)

  var targetX = normalize(mousePos.x, -1, 1, -180, 180);
  var targetY = normalize(mousePos.y, -1, 1, -40, 0);

  // update the steve's position
  //airplane.mesh.position.y = targetY;

  //steve.mesh.position.y += (targetY-steve.mesh.position.y)*0.1;
  //steve.mesh.position.x = targetX;

  face.mesh.rotation.x = -(Math.sin(mousePos.y))/2;
  face.mesh.rotation.y = (Math.sin(mousePos.x))/2;
  //
  //console.log(Math.sin(steve.mesh.position.x));

  // - (Math.PI/2)

  //steve.propeller.rotation.x += 0.3;
}


function updatePaola(){

  //face.mesh.rotation.x = -(Math.sin(mousePos.y))/2;
  paola.mesh.rotation.y+= 0.1;
  paola.mesh.rotation.z+= 0.05;

}