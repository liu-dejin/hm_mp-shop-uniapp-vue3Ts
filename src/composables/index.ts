import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'
/**
 * 猜你喜欢模块
 * @returns 猜你喜欢实例和触底事件函数
 */
export const useGuessList = () => {
  // 获取猜你喜欢实例
  const guessRef = ref<XtxGuessInstance>()
  // 滚动触底
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }
  // 返回实例和触底事件函数
  return {
    guessRef,
    onScrolltolower,
  }
}
