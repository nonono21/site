import React, { Component } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';



import BabylonScene from '../BabylonScene/'; // import the component above linking to file we just created.

export default class Viewer extends Component {
    onSceneMount = (e) => {
        const { canvas, scene, engine } = e;

        // This creates and positions a free camera (non-mesh)
        const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.9;
        // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
     //   const sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
        // Move the sphere upward 1/2 its height
      //  sphere.position.y = 1;
        // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
        const ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

        //    const test = BABYLON.SceneLoader.ImportMesh(
        //        "",
        //        "",
        //        "bab.gltf",
        //        scene,
        //        function(m) {
        //          console.log(m);
        //        }
        //      );

        BABYLON.SceneLoader.ImportMesh(
            "",
            "",
            "bab.gltf",
            scene,
        );

        BABYLON.SceneLoader.Append("", "bab.glb", scene, function (newMeshes) {
        scene.activeCamera = null;
        scene.createDefaultCameraOrLight(true);
        scene.activeCamera.attachControl(canvas, false);
    });


        console.log(BABYLON);

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });
    }

    render() {               
        return (
             <div>
                 rfgd

                 totogro
                 totogro

                <BabylonScene onSceneMount={this.onSceneMount} />
                totogro
                totogro
                totogro
                totogro
                totogro
                totogro
                totogro

                totogro
                totogro

             </div>
        )
    }
}