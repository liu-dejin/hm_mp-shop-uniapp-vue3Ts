import { http } from '@/utils/http'

/**
 * 加入购物车
 */
export const PostMemberCartApi = (data: { skuId: string; count: number }) =>
  http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
