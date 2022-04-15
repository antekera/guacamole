/**
 * Components home
 */

// TODO: DEFINIR PROPIEDADES DE ESTOS JSONS

export const components = {
  card: {
    component: 'card',
    components: {
      body2: {
        component: 'body2',
        title: 'hello body2',
        components: {
          body4: {
            component: 'body4',
            title: 'hello body4',
          },
          body5: {
            component: 'body5',
            title: 'hello body5',
          },
        },
      },
      body3: {
        component: 'body3',
        title: 'hello body3',
      },
    },
  },
  body: {
    component: 'body',
  },
  title: {
    component: 'title',
  },
  subtitle: {
    component: 'subtitle',
  },
  text: {
    component: 'text',
  },
  button: {
    component: 'button',
  },
}
