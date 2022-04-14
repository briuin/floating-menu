// derive the publicPath with your own logic and set it with the __webpack_public_path__ API
console.log('start set path');
__webpack_public_path__ = 'https://briuin.github.io/floating-menu/';
console.log('url', document.currentScript.src + '/../');