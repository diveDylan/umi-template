import { Params } from '@/hooks/useList'
export const isDev: boolean = process.env.NODE_ENV === 'development'


export enum JenkinsEnv {
  /**
   * @description jenkins dev环境
   */
  DEV = 'dev',
  /**
   * @description jenkins test03环境
   */
  TEST03 = 'test03',
  /**
   * @description jenkins test05环境
   */
  TEST05 = 'test05',
  /**
   * @description jenkins stage环境
   */
  STAGE = 'stage',
  /**
   * @description jenkins prod环境
   */
  PROD = 'prod'
}

export const PAGEINFO: Params<any> = {
  pageNo: 1,
  pageSize: 10
}