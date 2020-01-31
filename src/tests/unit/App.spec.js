import { shallowMount } from '@vue/test-utils'

import App from '@/App'
import Search from '@/components/Search'

describe('App', () => {
  it('Should change movie results when search event is triggered', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.vm.movies).toEqual([])

    const movies = ['Kingsman: The Secret Service', 'Kingsman: The Golden Circle']
    let search = wrapper.find(Search)
    search.vm.$emit('search', movies)

    expect(wrapper.vm.movies).toBe(movies)
  })
})