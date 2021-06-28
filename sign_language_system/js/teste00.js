var speech = ""
var kit = "";
var l = "";
var lmin = "";

function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "pt-BR";

    recognition.onresult = function(event) {
        // console.log(event);
        document.getElementById('speechToText').value = event.results[0][0].transcript;
    }
    recognition.start();
    record.start();
}

let camera, scene, renderer;

var mixer, clock;

function init() {

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = -30;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); //0x191919
	



    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load('ultimo.glb', function(gltf) {

        scene.add(gltf.scene);
        var animations = gltf.animations;
		
        var CLS = THREE.AnimationClip.findByName(animations, 'CLS');
        var Libras = THREE.AnimationClip.findByName(animations, 'Libras');
        var Linguagem = THREE.AnimationClip.findByName(animations, 'Linguagem');
        var Obrigado = THREE.AnimationClip.findByName(animations, 'Obrigado');
        var Programação = THREE.AnimationClip.findByName(animations, 'Programação');
        var A = THREE.AnimationClip.findByName(animations, 'A');
        var B = THREE.AnimationClip.findByName(animations, 'B');
        var D = THREE.AnimationClip.findByName(animations, 'D');
		var keyRotationClip = THREE.AnimationClip.findByName( animations, 'Idle' );
		
		
        mixer = new THREE.AnimationMixer(gltf.scene);
        var tree = mixer.clipAction(CLS);
        var tree1 = mixer.clipAction(Libras);
        var tree2 = mixer.clipAction(Linguagem);
        var tree3 = mixer.clipAction(Obrigado);
        var tree4 = mixer.clipAction(Programação);
        var tree5 = mixer.clipAction(A);
        var tree6 = mixer.clipAction(B);
        var tree7 = mixer.clipAction(D);
		// var tree8 = mixer.clipAction(Idle);
		
		var play = mixer.clipAction( keyRotationClip );
		// play.loop = THREE.LoopOnce;
		
		
		


        function i() {
            res.forEach(i);
        }
		
			if(speechToText.value == null){
				play.play();
			
			 }
		
		
        document.getElementById("btnSubmit").onclick = function() {

            kit = document.getElementById("speechToText").value;
            lmin = kit.toLowerCase();
            l = lmin.split("")

			
			
            if (l[0] == "c" && l[1] == "l" && l[2] == "s") {
                tree.loop = THREE.LoopOnce;
                tree.fadeIn(2);
                tree.play();
				play.stop();
				

            } else if (l[0] == "l" && l[1] == "i" && l[2] == "b" && l[3] == "r" && l[4] == "a" && l[5] == "s") {
                tree1.loop = THREE.LoopOnce;
                tree1.fadeIn(2);
                tree1.play();

            } else if (l[0] == "l" && l[1] == "i" && l[2] == "n" && l[3] == "g" && l[4] == "u" && l[5] == "a" && l[6] == "g" && l[7] == "e" && l[8] == "m") {
                tree2.loop = THREE.LoopOnce;
                tree2.fadeIn(2);
                tree2.play();

            } else if (l[0] == "o" && l[1] == "b" && l[2] == "r" && l[3] == "i" && l[4] == "g" && l[5] == "a" && l[6] == "d" && l[7] == "o") {
                tree3.loop = THREE.LoopRepeat;
                tree3.fadeIn(2);
                tree3.play();

            } else if (l[0] == "p" && l[1] == "r" && l[2] == "o" && l[3] == "g" && l[4] == "r" && l[5] == "a" && l[6] == "m" && l[7] == "a" && l[8] == "ç" && l[9] == "ã" && l[10] == "o") {
                tree4.loop = THREE.LoopOnce;
                tree4.fadeIn(2);
                tree4.play();

            }
					
			
			
            if (lmin = "letra a") {
                tree5.stop();
                tree5.loop = THREE.LoopOnce;
                tree5.fadeIn(1.3);
                tree5.play();

            }
            if (lmin = "letra b") {
                tree6.loop = THREE.LoopOnce;
                tree6.fadeIn(1.3);
                tree6.play();

            }
            if (lmin = "letra d") {
                tree7.loop = THREE.LoopOnce;
                tree7.fadeIn(1.5);
                tree7.play();

            }
			
				play.stop(reset);	
							


        }
		
			

        // center model
		
		
         gltf.scene.scale.set(1, 1.2, 1);

        gltf.scene.position.x = 0; //Position (x = right+ left-) 
        gltf.scene.position.y = -10; //Position (y = up+, down-)  //-10
        gltf.scene.position.Z = 0; //Position (z = front +, back-)

        const object = gltf.scene;

        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());

        //	object.position.x += ( object.position.x - center.x );
        //	object.position.y += ( object.position.y - center.y );
        //	object.position.z += ( object.position.z - center.z );

        // disable view frustum culling

        object.traverse(function(child) {

            child.frustumCulled = false;

        });


    });

    let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    let d = 8.25;
    let dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
    dirLight.position.set(-8, 12, 8);
    dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 1500;
    dirLight.shadow.camera.left = d * -1;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = d * -1;
    scene.add(dirLight);

    //

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth * 1, window.innerHeight * 0.8, updateStyle = false); //Cena aqui
    document.body.appendChild(renderer.domElement);

    clock = new THREE.Clock();

    //

    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth * 1, window.innerHeight * 0.8, updateStyle = false);

}

function animate() {

    requestAnimationFrame(animate);

    if (mixer) {

        var delta = clock.getDelta();
        mixer.update(delta);

    }

    renderer.render(scene, camera);

}

init();
animate();