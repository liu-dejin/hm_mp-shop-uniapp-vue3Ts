import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore(
  'address',
  () => {
    const selectedAddress = ref<AddressItem>()
    const changeSelectAddress = (val: AddressItem) => {
      selectedAddress.value = val
    }
    return {
      selectedAddress,
      changeSelectAddress,
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, val) {
          uni.setStorageSync(key, val)
        },
      },
    },
  },
)
