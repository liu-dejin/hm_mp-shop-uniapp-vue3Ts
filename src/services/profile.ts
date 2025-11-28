import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

/**
 * 获取个人信息
 *
 */
export const getMemberProfileApi = () =>
  http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })

/**
 * 修改个人信息
 * @param data 个人信息修改请求体参数
 */

export const PutMemberProfileApi = (data: ProfileParams) =>
  http({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
