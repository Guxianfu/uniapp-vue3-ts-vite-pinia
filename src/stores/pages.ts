import { defineStore } from 'pinia'
interface State {
    userList: UserInfo[]
    user: UserInfo | null
    message: string
}


interface UserInfo {
    name: string
    age: number
}
  
export const pageStore = defineStore('storeId', {
    state: (): State  => {
        return {
            // 用于初始化空列表
            userList: [] as UserInfo[],
            // 用于尚未加载的数据
            user: null as UserInfo | null,
            message: 'hello'
        }
    },
})
