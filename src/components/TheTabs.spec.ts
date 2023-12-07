/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import TheTabs from './TheTabs.vue'

describe('src/components/TheTabs.vue', () => {
  it('expect tab to  emit its key', () => {
    const wrapper = mount(TheTabs, {
      props: {
        activeTab: 'overview',
        tabs: [
          {
            key: 'overview',
            label: 'Overview',
          },
          {
            key: 'graph',
          },
        ],
      },
      slots: {
        graph: 'test graph',
      },
    })

    const overviewTab = wrapper.find('[data-testid="overview"]')

    overviewTab.trigger('click')

    expect(wrapper.emitted().changeTab).toBeDefined()
  })
  it('expect tab to display the proper value', () => {
    const wrapper = mount(TheTabs, {
      props: {
        activeTab: 'overview',
        tabs: [
          {
            key: 'overview',
            label: 'Overview',
          },
          {
            key: 'graph',
          },
        ],
      },
      slots: {
        graph: 'test graph',
      },
    })

    const overviewTab = wrapper.find('[data-testid="overview"]')
    const graphTab = wrapper.find('[data-testid="graph"]')

    expect(overviewTab.text()).toBe('Overview')
    expect(graphTab.text()).toBe('test graph')
  })
})
