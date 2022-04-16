export enum Component {
  bar = 'bar',
  button = 'button',
  card = 'card',
  carousel = 'carousel',
  columns = 'columns',
  contacform = 'contacform',
  contact = 'contact',
  container = 'container',
  dropdown = 'dropdown',
  faq = 'faq',
  footer = 'footer',
  gallery = 'gallery',
  gridcontent = 'gridcontent',
  header = 'header',
  hero = 'hero',
  icon = 'icon',
  image = 'image',
  input = 'input',
  link = 'link',
  map = 'map',
  modal = 'modal',
  pricing = 'pricing',
  reviews = 'reviews',
  separator = 'separator',
  slider = 'slider',
  socialicons = 'socialicons',
  spinner = 'spinner',
  stats = 'stats',
  tab = 'tab',
  text = 'text',
  title = 'title',
  video = 'video',
}

interface Content {
  title?: string
}
interface Styles {
  className: string
}
interface Components {
  id: Component
}

export interface ContentDataInterface {
  [name: string]: Content | Styles | Components
}
