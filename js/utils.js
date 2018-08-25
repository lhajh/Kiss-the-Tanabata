/**
 * @description 获取 min 到 max 之间的随机数
 * @author lhajh
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @returns 随机数
 */
function getRandomNum(min, max) {
  if (min < max) {
    var range = max - min
    var rand = Math.random()
    return min + Math.round(rand * range)
  } else {
    console.log('参数不合理')
  }
}

/**
 * @description 获取 min 到 max 之间 length 为 length 的不重复数组
 * @author lhajh
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @param {*} length 数组 length
 * @returns 随机数组
 */
function getRandomArray(min, max, length) {
  //校验数据合法性
  if (
    typeof min === 'number' &&
    typeof max === 'number' &&
    max >= min &&
    typeof length === 'number' &&
    max - min + 1 >= length
  ) {
    // 初始化数字数组
    var array = [...Array(max + 1).keys()].slice(min),
      randomArray = []
    //随机从数组中取数
    while (array.length && length--) {
      var cursor = ~~(Math.random() * array.length)
      randomArray.push(...array.splice(cursor, 1))
    }
    return randomArray
  } else {
    console.log('参数不合理')
  }
}

/**
 * @description 随机生成十六进制颜色
 * @author lhajh
 * @returns 十六进制颜色值
 */
function randomHexColor() {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6)
}
