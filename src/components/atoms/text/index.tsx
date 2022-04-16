import cn from 'classnames'

type TextProps = {
  text?: string
  tag?: string
  className?: string
}

const defaultProps = {
  tag: 'p',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscin elit.',
}

const Text = ({ text, tag, className }: TextProps) => {
  const classes = cn('text', className)

  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements
  return (
    <CustomTag className={classes}>
      {text} - {className}
    </CustomTag>
  )
}

Text.defaultProps = defaultProps

export { Text }
export type { TextProps }
