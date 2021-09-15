import { useField } from '@unform/core'
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { TextInputProps } from 'react-native'
import { Value } from 'react-native-reanimated'
import { Container, TextInput, Icon } from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon: string
}

interface InputValueReference {
  value: String
}

interface InputRef {
  focus(): void
}
const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setisFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    if (inputValueRef.current.value) {
      setisFilled(!!inputValueRef.current.value)
    }
  }, [])

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    },
  }))
  useEffect(() => {
    registerField(
      {
        name: fieldName,
        ref: inputValueRef.current,
        path: 'value',
        setValue(ref: any, value) {
          inputValueRef.current.value = value
          inputElementRef.current.setNativeProps({ text: value })
        },

        clearValue() {
          inputElementRef.current.value = ''
          inputElementRef.current.clear()
        },
      },
      [fieldName, registerField],
    )
  })
  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#666263' : '#666263'}
      />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="light"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholderTextColor="#666263"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value
        }}
        {...rest}
      />
    </Container>
  )
}

export default forwardRef(Input)
