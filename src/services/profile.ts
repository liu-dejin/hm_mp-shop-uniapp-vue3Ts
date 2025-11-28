import type { ProfileDetail } from '@/types/member'
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
