import type { NextApiRequest, NextApiResponse } from 'next'
import * as R from 'ramda'

import { components, content, styles } from '../../data/home'

const props = R.mergeDeepLeft(content, styles)

const matchComponentsProps = comps => {
  Object.keys(comps).map(id => {
    const { children } = comps[id]
    if (!R.isNil(children)) {
      matchComponentsProps(children)
    }
    if (Object.keys(props).includes(id)) {
      comps[id] = { ...comps[id], ...props[id] }
    }
  })

  return comps
}

const data = matchComponentsProps(components)

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
