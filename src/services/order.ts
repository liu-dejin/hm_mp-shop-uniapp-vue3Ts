import type { OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'
/**
 * 填写订单-获取预付订单
 * @returns
 */
export const getMemberOrderPreApi = () =>
  http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
/**
 * 填写订单-获取立即购买订单
 * @param data
 * @returns
 */
export const getMemberOrderPreNowApi = (data: {
  skuId: string
  count: string
  addressId?: string
}) =>
  http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
