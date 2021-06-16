/**
 * @description 格式化数字 1000 -> 1,000
 */
export function formatNumber(val: string | number) {
  if (isNumber(val) ) return ''
  return ('' + val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function isNumber(val: any): val is number {
  return /\d/.test(val)
}
/**
 * @description 是否是空对象 {} []
 */
export const isEmptyObject = (obj: any) => {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return Object.keys(obj).length === 0
  }
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    return obj.length === 0
  }
  return !obj
}