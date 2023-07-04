import { proxy } from 'valtio';

const state = proxy ({
    intro: true,
    color: '#1ae8de',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',

});

export default state;