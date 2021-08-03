import IconFavourite from '@/components/icon-favourite.vue'
import { mount } from '@vue/test-utils'

const alt = 'icon purpose description'

describe('IconFavourite', () => {
  it('renders img with alt', () => {
    const wrapper = mount(IconFavourite, {
      propsData: { alt },
    })

    expect(wrapper.attributes('alt')).toBe(alt)
  })
})

describe('IconFavourite', () => {
  it('renders img with title', () => {
    const wrapper = mount(IconFavourite, {
      propsData: { alt },
    })

    expect(wrapper.attributes('title')).toBe(alt)
  })
})
