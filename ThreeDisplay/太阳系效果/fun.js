// 创建网格模型
function createMesh(geometry, URL) { // R半径,图片URL路径
  // Lambert
  var material = new THREE.MeshBasicMaterial({ //MeshLambertMaterial
    map: texLoader.load(URL),
    side:THREE.DoubleSide,
  }); //材质对象
  var mesh = new THREE.Mesh(geometry, material); //网格模型对象
  return mesh;
}
// 球体Mesh  参数：半径R  图片文理
function createSphereMesh(R, URL) { // R半径,图片URL路径
  var geometry = new THREE.SphereGeometry(R, 100, 100); //创建一个立方体几何对象
  return createMesh(geometry, URL);
}
// 圆环Mesh  参数：半径R  图片文理
function createRingMesh(r, R, URL) { // R半径,图片URL路径
  var geometry = new THREE.CylinderGeometry(r, R, 0, 100, 100, true);
  // var tu_huan_geometry2 = new THREE.RingGeometry(r, R, 32);
  return createMesh(geometry, URL);
}
// 环星球Mesh
function createringPlanetMesh(sphere_R, sphere_URL, ring_r, ring_R, ring_URL) {
  let group = new THREE.Group();
  let spere = createSphereMesh(sphere_R, sphere_URL);
  let ring = createRingMesh(ring_r, ring_R, ring_URL);
  group.add(spere, ring);
  return group;
}

// 公转轨迹圆弧线
function circle(r) {
  var arc = new THREE.ArcCurve(0, 0, r, 0, 2 * Math.PI, true); // 圆心  半径  起始角度
  var points = arc.getPoints(50); //返回一个vector2对象作为元素组成的数组
  var geometry = new THREE.Geometry();
  geometry.setFromPoints(points);
  var material = new THREE.LineBasicMaterial({
    color: 0x222222
  });
  var line = new THREE.LineLoop(geometry, material);
  line.rotateX(Math.PI / 2);
  return line;
}


// 背景
function cloudFun() {
  var geom = new THREE.Geometry();
  var material = new THREE.ParticleBasicMaterial({
    size: 0.01,
    vertexColors: true
  });
  var n = 1200;
  for (var i = 0; i < 3000; i++) {
    var particle = new THREE.Vector3(
      (Math.random() - 0.5) * n,
      (Math.random() - 0.5) * n,
      (Math.random() - 0.5) * n
    );
    geom.vertices.push(particle);
    let color_k = Math.random();
    geom.colors.push(new THREE.Color(color_k, color_k, color_k * 0.6));
  }

  var cloud = new THREE.ParticleSystem(geom, material);
  return cloud
}
