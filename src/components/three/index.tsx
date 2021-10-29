import { Button, CircularProgress, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { style } from "../../theme/theme-context";

import "./style.scss";

declare var THREE: any;

const Three = () => {
  const useStyles: any = () => {
    return style();
  };

  const classes = useStyles();

  const myRef = useRef<HTMLDivElement>(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://my-bsg-asset.s3.amazonaws.com/javascript/three/three.js";
    script.async = false;
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      console.log("initializing three.js ...");
      init();
    });
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  var scene: any;
  var camera: any;
  var renderer: any;

  const init = () => {
    var placeholderDiv = document.getElementById("three-container");

    // === THREE.JS CODE START ===
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    renderer = new THREE.WebGLRenderer();
    //renderer.setSize(window.innerWidth, window.innerHeight);

    //document.body.appendChild(renderer.domElement);

    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(myRef.current?.offsetWidth, myRef.current?.offsetHeight);

    //placeholderDiv?.appendChild(renderer.domElement);
    myRef.current?.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
    window.addEventListener("resize", onWindowResize, false);

    // === THREE.JS EXAMPLE CODE END ===
  };

  const onWindowResize = () => {
    renderer.setSize(myRef.current?.offsetWidth, myRef.current?.offsetHeight);

    renderer.render(scene, camera);
  };

  return <div id="three-container" ref={myRef} className="three"></div>;
};

export default Three;
