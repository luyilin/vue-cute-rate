import Kokk from 'kokk'

const doc = new Kokk({
  root: 'https://raw.githubusercontent.com/luyilin/vue-cute-rate/master/',
  loadingColor: '#f2c1d9'
})

doc.addComponent({
  order: 1,
  component: () => import('./App.vue')
})

doc.start('#app')
