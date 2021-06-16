
let extraRoutes
/**
 * @description 修改路由
 */
export function patchRoutes({routes: any[]}) {

}

/**
 * @description render
 * @param oldRender
 */
export function render(oldRender: Function) {
  fetch('/api/routes').then(res=>res.json()).then((res) => {
    extraRoutes = res.routes;
    oldRender();
  })
}
