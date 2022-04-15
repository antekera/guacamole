import deepmerge from 'deepmerge'
import type { NextApiRequest, NextApiResponse } from 'next'

import { components, content, styles } from '../../data/home'

type Data = {
  name: string
}

const data = deepmerge.all([components, content, styles])

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
