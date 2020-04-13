"use strict";

//entry point :
function main(){
    THREE.JeelizHelper.init({
      canvasThreeId: 'webojiCanvas',
      canvasId: 'jeefacetransferCanvas',

      assetsParentPath: '../../../assets/3D/',
      NNCpath: '../../../dist/',

      //RACCOON:
      meshURL: 'meshes/fox11_v0.json',
      matParameters: {
        diffuseMapURL: 'textures/Fox_albedo.png',
        specularMapURL: 'textures/Fox_specular.png',
        flexMapURL: 'textures/Fox_flex.png'
      },
      
      position: [0,-80,0],
      scale: 1.2
    });
} //end main()
