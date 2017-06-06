var particleGeometry = new THREE.SphereGeometry(10, 32, 32),
  particleMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    transparent: true,
    opacity: 0.8,
    //uniforms:
    //{
    //  "c":   { type: "f", value: 0.5 },
    //  "p":   { type: "f", value: 4.0 }
    //},
    //vertexShader:   document.getElementById( 'vertexShaderAtmosphere'   ).textContent,
    //fragmentShader: document.getElementById( 'fragmentShaderAtmosphere' ).textContent
  }),
  particleCount = 200,
  particles = [],
  primaryColor,
  primaryColorHue = 0;

function CreateParticles() {

  primaryColor = randomColor();
  pColor = changeHue(primaryColor, primaryColorHue);
  pColor = pColor.replace('#', '0x');

  // create a random set of particles
  for (var i = 0; i < particleCount; i++) {

    particles[i] = new THREE.Mesh( particleGeometry, particleMaterial );

    //randomize positions
    particles[i].position.x = Math.random() * WIDTH * 2 - WIDTH;
    particles[i].position.y = Math.random() * HEIGHT * 2 - HEIGHT;
    particles[i].position.z = Math.random() * WIDTH * 6 - WIDTH * 3;

    //console.log(particles[i].material);

    particles[i].material.color.setHex(pColor);
    particles[i].material.opacity = Math.random() * 20 / 100;
    particles[i].originalOpacity = particles[i].material.opacity;

    particles[i].speed = (Math.random() * 10);

    scene.add(particles[i]);
  }
}




function UpdateParticles() {

  //return;

  var avgFrequency = analyser.getAverageFrequency();
  var frequencies = analyser.getFrequencyData();

  var avgFrequencySpeed = ((avgFrequency - 70)) + ((avgFrequency - 70) / 2) ; //((avgFrequency * 10 / 255));

  var bassFrequency = (frequencies[0] + frequencies[1] + frequencies[2]) / 3;
  //console.log(bassFrequency);


  avgFrequencySpeed = (avgFrequencySpeed < 0) ? 1 : avgFrequencySpeed;

  if (bassFrequency > 200) {
    avgFrequencySpeed+= ((bassFrequency - 200 ) / 3 );
  }

  //console.log(avgFrequencySpeed);

  var bassFrequencyOpacity = ((bassFrequency > 200)) ? (bassFrequency * 3 / 255) : (bassFrequency * 1 / 255);
  //console.log(bassFrequencyOpacity);

  primaryColorHue = (primaryColorHue >= 256) ? 0 : primaryColorHue+0.5;
  pColor = changeHue(primaryColor, primaryColorHue);
  pColor = pColor.replace('#', '0x');

  for (var i = 0; i < particleCount; i++) {
    particles[i].position.z+= particles[i].speed + avgFrequencySpeed;

    if (particles[i].position.z > WIDTH * 3) {
      particles[i].position.z-= WIDTH * 6;
    }

    particles[i].material.color.setHex(pColor);
    particles[i].material.opacity = particles[i].originalOpacity + (bassFrequency * 2.5 / 255);
  }

}





// Changes the RGB/HEX temporarily to a HSL-Value, modifies that value
// and changes it back to RGB/HEX.

function changeHue(rgb, degree) {
  var hsl = rgbToHSL(rgb);
  hsl.h += degree;
  if (hsl.h > 360) {
    hsl.h -= 360;
  }
  else if (hsl.h < 0) {
    hsl.h += 360;
  }
  return hslToRGB(hsl);
}

// exepcts a string and returns an object
function rgbToHSL(rgb) {
  // strip the leading # if it's there
  rgb = rgb.replace(/^\s*#|\s*$/g, '');

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if(rgb.length == 3){
    rgb = rgb.replace(/(.)/g, '$1$1');
  }

  var r = parseInt(rgb.substr(0, 2), 16) / 255,
    g = parseInt(rgb.substr(2, 2), 16) / 255,
    b = parseInt(rgb.substr(4, 2), 16) / 255,
    cMax = Math.max(r, g, b),
    cMin = Math.min(r, g, b),
    delta = cMax - cMin,
    l = (cMax + cMin) / 2,
    h = 0,
    s = 0;

  if (delta == 0) {
    h = 0;
  }
  else if (cMax == r) {
    h = 60 * (((g - b) / delta) % 6);
  }
  else if (cMax == g) {
    h = 60 * (((b - r) / delta) + 2);
  }
  else {
    h = 60 * (((r - g) / delta) + 4);
  }

  if (delta == 0) {
    s = 0;
  }
  else {
    s = (delta/(1-Math.abs(2*l - 1)))
  }

  return {
    h: h,
    s: s,
    l: l
  }
}

// expects an object and returns a string
function hslToRGB(hsl) {
  var h = hsl.h,
    s = hsl.s,
    l = hsl.l,
    c = (1 - Math.abs(2*l - 1)) * s,
    x = c * ( 1 - Math.abs((h / 60 ) % 2 - 1 )),
    m = l - c/ 2,
    r, g, b;

  if (h < 60) {
    r = c;
    g = x;
    b = 0;
  }
  else if (h < 120) {
    r = x;
    g = c;
    b = 0;
  }
  else if (h < 180) {
    r = 0;
    g = c;
    b = x;
  }
  else if (h < 240) {
    r = 0;
    g = x;
    b = c;
  }
  else if (h < 300) {
    r = x;
    g = 0;
    b = c;
  }
  else {
    r = c;
    g = 0;
    b = x;
  }

  r = normalize_rgb_value(r, m);
  g = normalize_rgb_value(g, m);
  b = normalize_rgb_value(b, m);

  return rgbToHex(r,g,b);
}

function normalize_rgb_value(color, m) {
  color = Math.floor((color + m) * 255);
  if (color < 0) {
    color = 0;
  }
  return color;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}