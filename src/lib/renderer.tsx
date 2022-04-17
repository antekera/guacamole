import React from 'react'

import * as R from 'ramda'
import { uid } from 'uid'

import { IChildren, IData } from '../lib/types'
import { keysToComponentMap } from './keysToComponentMap'

const getComponent = (id: string) => keysToComponentMap[id]

const childrenRenderer = (children: IChildren, block: any) => {
  if (!children) return null

  return Object.values(children).map(({ component, ...props }) => {
    return React.createElement(getComponent(component), {
      key: uid(),
      block: block,
      ...props,
    })
  })
}

const block = (tree: IData) => {
  if (!tree) return null

  return Object.values(tree).map(props => {
    // @ts-ignore
    const Component1 = getComponent(props.component)
    if (!R.isNil(Component1)) {
      const { children } = props
      const secondLevel =
        children &&
        Object.values(children).map(({ component: comp2nd, ...props2nd }) => {
          const Component2nd = getComponent(comp2nd)
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
        Component1,
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
          The component {Component1} has not been created yet.
        </div>
      ),
      { key: uid() }
    )
  })
}

export const Renderer = (tree: IData) => {
  return block(tree)
}
