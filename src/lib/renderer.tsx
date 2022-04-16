import React from 'react'

import * as R from 'ramda'
import { uid } from 'uid'

import { keysToComponentMap } from './keysToComponentMap'

const component = id => keysToComponentMap[id]

const childrenRenderer = (innerTree, innerBlock) => {
  if (!innerTree) return null

  return Object.keys(innerTree).map(id => {
    return React.createElement(component(id), {
      key: uid(),
      block: innerBlock,
      ...innerTree[id],
    })
  })
}

const block = tree => {
  return Object.keys(tree).map(id => {
    const props = tree[`${id}`]
    const Component = component(id)

    if (!R.isNil(Component)) {
      const { components } = props
      const secondLevel =
        components &&
        Object.keys(components).map(idSecond => {
          const props2nd = components[idSecond]
          const { components: components2nd } = props
          const Component2nd = component(idSecond)

          // Third Level
          const thirdLevel = childrenRenderer(components2nd, block)

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
          The component {id} has not been created yet.
        </div>
      ),
      { key: uid() }
    )
  })
}

export const Renderer = tree => {
  return block(tree)
}
