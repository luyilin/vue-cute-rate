import starRate from './star.vue'

export default starRate

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(starRate.name, starRate)
}
