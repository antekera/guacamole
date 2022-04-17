import * as R from 'ramda'

import { IComponent, IContent, IStyles } from '../lib/types'

const matchComponentsProps = (
  comps: IComponent,
  cont?: IContent,
  st?: IStyles
) => {
  let props: any = {}

  if (cont && st) {
    props = R.mergeDeepLeft(cont, st)
  }

  Object.keys(comps).map(id => {
    const { children } = comps[id]
    if (!R.isNil(children)) {
      matchComponentsProps(children, cont, st)
    }
    if (Object.keys(props).includes(id)) {
      comps[id] = { ...comps[id], ...props[id] }
    }
  })

  return comps
}

export default matchComponentsProps
