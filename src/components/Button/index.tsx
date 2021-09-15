import React from 'react'
import { Container, ButtonText, ContainerBorder } from './styles'
import { RectButtonProperties } from 'react-native-gesture-handler'

interface ButtonProps extends RectButtonProperties {
  children: string
  color?: string
  textColor?: string
  hasBorder?: boolean
  icon?: string
}
const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  color,
  textColor,
  hasBorder,
  ...rest
}) => {
  return (
    <Container hasBorder={hasBorder} color={color} {...rest}>
      <ContainerBorder hasBorder={hasBorder} color={color}>
        <ButtonText textColor={textColor}>{children}</ButtonText>
      </ContainerBorder>
    </Container>
  )
}

export default Button
