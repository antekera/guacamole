/**
 * Components home
 */

import { Component, ContentDataInterface } from '../../lib/types'

export const components: ContentDataInterface = {
  main_1: {
    component: Component.container,
  },
  main_2: {
    component: Component.container,
    children: {
      main_1_b: {
        component: Component.container,
        children: {
          text_1: {
            component: Component.text,
          },
          text_2: {
            component: Component.text,
          },
        },
      },
      main_2_b: {
        component: Component.container,
      },
    },
  },
}
