import request from 'umi-request'

// @ts-ignore
import { getRequestBody, Options  } from '@/api/utils'

export default async function <T>(url: string, options: Options) {
  const body: BodyInit | undefined = getRequestBody(options)
  const data = await request<T>(url, Object.assign(options, {body}))
  return data
}
