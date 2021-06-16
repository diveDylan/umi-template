import React from 'react'
import style from './index.module.less'
import { history } from 'umi'
export default () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <img src={require('@/assets/404.png')} alt="" className={style.img} />
        <button className={style.btn} onClick={() => history.push('/')}>
          返回首页
        </button>
      </div>
    </div>
  )
}
