import StarRate from './star.vue'

export default StarRate

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(StarRate.name, StarRate)
}
