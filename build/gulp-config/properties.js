module.exports = {

    deployStrategy: 'rsync', //`rsync` or `ftp`

    livereload: true, //set to `true` to enable livereload

    styleguideDriven: false, //will rebuild the styleguide whenever stylesheets change

    buildOnly: false, //set to `true` when paired with Phing

    viewmatch: '*.html', //for php projects use: '*.{html,php,phtml}'

    phpBin: 'C:\\php-56\\php.exe', //binary for php execution

    vendors: [
        "/threejs/build/three.min.js",
        "/threejs/examples/js/effects/StereoEffect.js",
        "/threejs/examples/js/controls/DeviceOrientationControls.js",
        "/threejs/examples/js/controls/OrbitControls.js",
        "/randomColor/randomColor.js"

    ]

};



