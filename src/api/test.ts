/*
 * @Author: djw
 * @Description: 测试封装axios
 */

import { request } from './index'

//登录
export const LoginApi = <T>(params: any) => request.post<T>('/service/home/load', params);
