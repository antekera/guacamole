import { Container, Text } from '../components/'
import { Component } from '../lib/types'

export interface Mapping {
  [name: string]: React.FC<any>
}

export const keysToComponentMap: Mapping = {
  [Component.container]: Container,
  [Component.text]: Text,
}
