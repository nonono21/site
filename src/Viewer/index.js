import React, { Component } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import * as GUI from 'babylonjs-gui';
import BabylonScene from '../BabylonScene/'; // import the component above linking to file we just created.


export default class Viewer extends Component {

    
    onSceneMount = (e) => {

        const { canvas, scene, engine } = e;

        function CustomLoadingScreen( /* variables needed, for example:*/ text) {
            //init the loader
            this.loadingUIText = text;
          }
          CustomLoadingScreen.prototype.displayLoadingUI = function() {
            console.log(this.loadingUIText);

          };
          CustomLoadingScreen.prototype.hideLoadingUI = function() {
            console.log("Loaded!");

          };
        
          
        var loadingScreen = new CustomLoadingScreen("I'm loading!!");
        // replace the default loading screen
        engine.loadingScreen = loadingScreen;
        // show the loading screen
        engine.displayLoadingUI();
        

        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
        // This targets the camera to scene origin
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
        camera.setPosition(new BABYLON.Vector3(0, 2, 5));

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(-2, 1, 0), scene);
        light.diffuse = new BABYLON.Color3(1, 0, 0);
        light.specular = new BABYLON.Color3(0, 1, 0);
        light.groundColor = new BABYLON.Color3(0, 1, 0);
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 2.5;
        // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
        
        // Loader GLTF
        var test = BABYLON.SceneLoader.Append(
            "",
            "bab.glb",
            scene
        );
        var anchor = new BABYLON.AbstractMesh("anchor", scene);







        var manager = new GUI.GUI3DManager(scene);



        var button = new GUI.HolographicButton("reset");
        manager.addControl(button);
        
    manager.addControl(button);
    button.linkToTransformNode(anchor);
    button.position.z = 2;
    button.position.x = 0;
    button.position.y = 0;

    button.onPointerUpObservable.add(function(){
        console.log(test);
    });




        scene.activeCamera = camera;
        scene.createDefaultCameraOrLight(true);
        scene.activeCamera.attachControl(canvas, false);

        
	

	









    scene.clearColor = new BABYLON.Color4(0, 0.5, 0.3, 0.1 ,0.1);



        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
                

            }
        });
    /* Use this in your actual scene to remove the loading screen instead of a timer
    -------------------------------------------------------------------------------------------
    scene.executeWhenReady(function () { //When everything is done loading
        engine.hideLoadingUI(); //Run our loading screen fadeout function
    }); 
    ----------------------------------------------------------------------------------------------
    */
    }

    render() {     
        return (
             <div>
                 <BabylonScene onSceneMount={this.onSceneMount} />
             </div>
        )
    }
}