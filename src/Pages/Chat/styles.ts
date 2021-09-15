import styled from 'styled-components/native'
import icon from '../../assets/icon.png'

interface IconProps {
  icon: string
}

export const Container = styled.View<IconProps>`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;

  border-radius: 40px;
  background: #e8e8e8;
`
