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

interface Children {
  [name: string]: {
    component: Component
    children?: Children
  }
}

interface ContentInterface {
  title?: string
  text?: string
}

interface StylesInterface {
  className: string
}

interface ComponentInterface {
  component: Component
  children?: Children
}

export interface ContentDataInterface {
  [name: string]: ComponentInterface | StylesInterface | ContentInterface
}
