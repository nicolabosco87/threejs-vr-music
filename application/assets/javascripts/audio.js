var listener = new THREE.AudioListener();
var sound = new THREE.Audio( listener );
var audioLoader = new THREE.AudioLoader();
var analyser;

function StartAudio() {


  //Create an AudioListener and add it to the camera
  camera.add( listener );

  // create an Audio source


  //Load a sound and set it as the Audio object's buffer
  audioLoader.load( 'assets/audio/mus1.mp3', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop(true);
    sound.setVolume(1);
    sound.play();
  });

  //Create an AudioAnalyser, passing in the sound and desired fftSize
  analyser = new THREE.AudioAnalyser( sound, 1024 );

  //Get the average frequency of the sound
  console.log(analyser.getFrequencyData());

}

