import type { GoodsItem } from './global'

/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}
/** 首页-分类面板数据类型 */
export type CategoryItem = {
  /** 展示图标 */
  icon: string
  /** id */
  id: string
  /** 分类名称 */
  name: string
}
/** 首页-热门推荐数据类型 */
export type HotItem = {
  /** 推荐说明 */
  alt: string
  /** id */
  id: string
  /** 图片集合 */
  pictures: string[]
  /** 跳转地址 */
  target: string
  /** 推荐标题   */
  title: string
  /** 推荐类型*/
  type: string
}

/** 猜你喜欢-商品类型 */
export type GuessItem = GoodsItem
