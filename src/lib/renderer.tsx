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
    const Component = component(props.component)

    if (!R.isNil(Component)) {
      const secondLevel =
        props.components &&
        Object.keys(props.components).map(idSecond => {
          const propsSecondLevel = props.components[idSecond]

          // Third Level
          const thirdLevel = childrenRenderer(
            propsSecondLevel.components,
            block
          )

          return React.createElement(
            component(propsSecondLevel.component),
            {
              key: uid(),
              block: block,
              ...propsSecondLevel,
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
