import React from 'react'

import * as R from 'ramda'
import { uid } from 'uid'

import { ContentDataInterface } from '../lib/types'
import { keysToComponentMap } from './keysToComponentMap'

const getComponent = id => keysToComponentMap[id]

const childrenRenderer = (children, block) => {
  if (!children) return null

  return Object.values(children).map(({ component, ...props }) => {
    return React.createElement(getComponent(component), {
      key: uid(),
      block: block,
      ...props,
    })
  })
}

const block = (tree: ContentDataInterface) => {
  if (!tree) return null

  return Object.values(tree).map(({ component, ...props }) => {
    const Component = getComponent(component)
    if (!R.isNil(Component)) {
      const { children } = props
      const secondLevel =
        children &&
        Object.values(children).map(({ component: comp2nd, ...props2nd }) => {
          const Component2nd = getComponent(component)
          const thirdLevel = childrenRenderer(props2nd.children, block)

          return React.createElement(
            Component2nd,
            {
              key: uid(),
              block: block,
              ...props2nd,
            },
            thirdLevel
          )
        })

      return React.createElement(
        Component,
        {
          key: uid(),
          block: block,
          ...props,
        },
        secondLevel
      )
    }

    return React.createElement(
      () => (
        <div className='container px-5 mx-auto border-2 border-red'>
          The component {component} has not been created yet.
        </div>
      ),
      { key: uid() }
    )
  })
}

export const Renderer = (tree: ContentDataInterface) => {
  return block(tree)
}
