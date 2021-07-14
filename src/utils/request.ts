import { extend } from 'umi-request';

import { getRequestBody, Options } from '@/api/utils';
const request = extend({
  // prefix: '/api',
  // baseUrl: baseUrl,
  // charset: 'utf8',
  responseType: 'json',
  timeout: 2 * 60 * 1000,
  useCache: false,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  credentials: 'include',
});
export default async function <T>(url: string, options: Options) {
  const body: BodyInit | undefined = getRequestBody(options);
  const data = await request<T>(url, Object.assign(options, { body }));
  return data;
}
