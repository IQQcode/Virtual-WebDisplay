import { Scene, PerspectiveCamera, WebGLRenderer, PlaneBufferGeometry, Mesh, MeshBasicMaterial, DoubleSide, GridHelper, AmbientLight, AnimationMixer, Clock,} from "three";
import Stats from "stats.js";
import { OrbitControls } from "./controls/OrbitControls"; //鼠标控制缩放位移模块
import { GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"; //加载GLTF格式-3D模型
import { FBXLoader} from "three/examples/jsm/loaders/FBXLoader"; //加载FBX格式-3D模型



export class Application {
    private scene : Scene; //场景舞台
    private camera: PerspectiveCamera; //相机
    private renderer : WebGLRenderer; 
    private stats : Stats;
    private gltfLoader: GLTFLoader; //模型
    private animationMixer : AnimationMixer; //模型动画 
    private clock : Clock; //动画时钟信息

    constructor() {
        this.scene = new Scene();
        //视角  视图宽高比  相机近景  相机远景
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new WebGLRenderer({antialias : true}); //消除锯齿
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.gltfLoader = new GLTFLoader();
        this.animationMixer = new AnimationMixer(this.scene);
        this.clock = new Clock();
        document.body.appendChild(this.renderer.domElement); //画布添加到DOM
        //配适浏览器窗口大小
        window.addEventListener('resize',() =>this.onWindowResize());

        //设置相机位置    
        this.camera.position.set(0, 5, 5);

        //fps指示器
        this.stats = new Stats();
        this.stats.showPanel(0);
        window.document.body.appendChild(this.stats.dom);

        //通过鼠标来缩放控制         
        new OrbitControls(this.camera,this.renderer.domElement);

        //添加100*100平面
        const planeBufferGeometry =  new PlaneBufferGeometry(100,100);
        //为平面添加颜色
        const plane = new Mesh(planeBufferGeometry, new MeshBasicMaterial({ color : 0xFFFFFF,side : DoubleSide}));
        //绕x轴旋转90度
        plane.rotation.x = -Math.PI / 2;
        //添加到场景中
        this.scene.add(plane);

        //添加网格
        this.scene.add(new GridHelper(100,100)); 

        //模型加载
        this.gltfLoader.load('../assets/Soldier.glb',gltf => {
            console.log(gltf); //回调方法
            this.scene.add(gltf.scene);
            //添加环境光
            this.scene.add(new AmbientLight(0xFFFFFF, 2)); //光照强度
            
            //加载模型动画
            const animationClip = gltf.animations.find(animationClip => animationClip.name === 'Walk');
            const action = this.animationMixer.clipAction(animationClip);
            action.play();
        });

        this.rander();
    }

    //渲染函数
    private rander() {
        this.stats.begin();
        window.requestAnimationFrame(() => this.rander());

        this.animationMixer.update(this.clock.getDelta());

        this.renderer.render(this.scene,this.camera);
        this.stats.end();
    }

    //配适浏览器窗口大小
    private onWindowResize() {
        //画布缩放比例
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        //相机缩放比例
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }
}
