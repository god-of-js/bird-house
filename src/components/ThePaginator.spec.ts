/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import ThePaginator from './ThePaginator.vue'

describe('src/components/ThePaginator.vue', () => {
  it('prev button should be disabled when currentPage is at 1', () => {
    const wrapper = mount(ThePaginator, {
      props: {
        totalPages: 50,
        currentPage: 1,
      },
    })

    const prevButton = wrapper.find('[data-testid="prev-btn"]')

    prevButton.trigger('click')

    expect(wrapper.emitted().changePage).not.toBeDefined()
  })
  it('next button should be disabled when currentPage is at its peak', () => {
    const wrapper = mount(ThePaginator, {
      props: {
        totalPages: 50,
        currentPage: 50,
      },
    })

    const nextButton = wrapper.find('[data-testid="next-btn"]')

    nextButton.trigger('click')

    expect(wrapper.emitted().changePage).not.toBeDefined()
  })
  it('Clicking on number should take you to the page', () => {
    const wrapper = mount(ThePaginator, {
      props: {
        totalPages: 50,
        currentPage: 50,
      },
    })

    const firstItem = wrapper.find('[data-testid="item-1-0"]')

    firstItem.trigger('click')
    const emittedValue = (wrapper.emitted().changePage[0] as number[])[0]
    expect(emittedValue).toBe(1)
  })
  it('Clicking on dots should take you to the next item that is currently not visible', () => {
    const wrapper = mount(ThePaginator, {
      props: {
        totalPages: 50,
        currentPage: 1,
      },
    })

    const firstDottedItem = wrapper.find('[data-testid="item-...-1"]')

    firstDottedItem.trigger('click')
    const emittedValue = (wrapper.emitted().changePage[0] as number[])[0]
    expect(emittedValue).toBe(2)
  })
})
