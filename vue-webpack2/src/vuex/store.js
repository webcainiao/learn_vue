import Vue from 'vue'
import Vuex from 'vuex'

// 引入不同状态模块
import com from './modules/com'
import list from './modules/list'
import topic from './modules/topic'
import publish from './modules/publish'
import message from './modules/message'
import user from './modules/user'

// Vue启用Vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    com,
    list,
    topic,
    publish,
    message,
    user
  },
  strict: process.env.NODE_ENV !== 'production'
})
