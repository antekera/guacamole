/**
 * Data pages
 */

import matchComponentsProps from './getData'
import { components, content, styles } from './home'

const data = {
  home: matchComponentsProps(components, content, styles),
}

export { data }
