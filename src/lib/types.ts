export enum Component {
  bar = 'bar', //
  button = 'button', //
  card = 'card', //
  carousel = 'carousel', //
  columns = 'columns', //1
  contacform = 'contacform',
  contact = 'contact', //
  container = 'container', //1
  dropdown = 'dropdown',
  faq = 'faq', //
  footer = 'footer', //
  gallery = 'gallery', //
  gridcontent = 'gridcontent', //
  header = 'header', //
  hero = 'hero', //
  icon = 'icon', //
  image = 'image', //
  input = 'input',
  link = 'link', //
  map = 'map',
  modal = 'modal',
  pricing = 'pricing',
  reviews = 'reviews', //
  separator = 'separator', //
  slider = 'slider', //
  socialicons = 'socialicons', //
  spinner = 'spinner', //
  stats = 'stats', //
  tab = 'tab',
  text = 'text', //1
  title = 'title', //
  video = 'video',
}

export interface IChildren {
  [name: string]: {
    component: Component
    children?: IChildren
  }
}

export interface IContent {
  [name: string]: {
    title?: string
    text?: string
  }
}

export interface IStyles {
  [name: string]: {
    className: string
  }
}

export interface IComponent {
  [name: string]: {
    component: Component
    children?: IChildren
  }
}

export interface IData {
  [name: string]: IComponent | IStyles | IContent
}
