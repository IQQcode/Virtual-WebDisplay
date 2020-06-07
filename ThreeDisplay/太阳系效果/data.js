function data() {
  let K = 5;
  return {
    // 太阳
    sun: {
      name: '太阳',
      R: 10 * K, //天体半径
      URL: './贴图/太阳.jpg', //天体纹理路径
    },
    // 普通行星
    planet: [{

      name: '水星',
      R: 2.5 * K,
      URL: './贴图/水星.jpg',
      revolutionR: 20 * K, //公转半径
    }, {

      name: '金星',
      R: 3 * K,
      URL: './贴图/金星.jpg',
      revolutionR: 30 * K, //公转半径
    }, {

      name: '地球',
      R: 3.2 * K,
      URL: './贴图/地球.jpg',
      revolutionR: 40 * K, //公转半径
    }, {

      name: '火星',
      R: 2.5 * K,
      URL: './贴图/火星.jpg',
      revolutionR: 50 * K, //公转半径
    }, {

      name: '木星',
      R: 5 * K,
      URL: './贴图/木星.jpg',
      revolutionR: 60 * K, //公转半径
    }, {

      name: '土星',
      sphere: {
        R: 3.5 * K, //半径
        URL: './贴图/土星.jpg',
      },
      ring: {
        r: 4 * K, //内径
        R: 6 * K, //外径
        URL: './贴图/土星环.jpg',
      },
      revolutionR: 70 * K,
    }, {

      name: '天王星',
      sphere: {
        R: 3.5 * K, //半径
        URL: './贴图/天王星.jpg',
      },
      ring: {
        r: 4 * K, //内径
        R: 6 * K, //外径
        URL: './贴图/天王星环.jpg',
      },
      revolutionR: 80 * K,
    }, {

      name: '海王星',
      R: 4 * K,
      URL: './贴图/海王星.jpg',
      revolutionR: 100 * K, //公转半径
    }, ],
    // 环行星
    ringPlanet: [],
    // 月球
    moon: {
      R: K,
      URL: 'tu.png',
      revolutionR: 10 * K,
    },
  };
}
