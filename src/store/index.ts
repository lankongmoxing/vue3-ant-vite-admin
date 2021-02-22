import { createStore } from 'vuex'
import permission from './modules/permission'


export default createStore({
  modules: {
    permission
  }
})