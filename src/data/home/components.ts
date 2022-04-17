/**
 * Components home
 */

import { Component, IComponent } from '../../lib/types'

export const components: IComponent = {
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
