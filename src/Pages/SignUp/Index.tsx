import React, { useCallback, useRef } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native'
import logoImg from '../../assets/logo.png'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Title, ToSignIn, ToSignInText } from './styles'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import Api from '../../services/api'
import * as Yup from 'yup'

import getValidationErrors from '../../utils/getValidatonErrors'

const SignUp: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null)
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const navigation = useNavigation()

  interface SignInFormData {
    name: string
    username: string
    password: string
  }

  const handleSignUp = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          username: Yup.string().required('username é obrigatório'),
          password: Yup.string().min(8, 'Senha obrigatória'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await Api.post('/auth/register', data)

        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Você ja pode fazer login na aplicação',
        )

        navigation.navigate('SignIn')
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)
          formRef.current?.setErrors(errors)
        }
        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer cadastro, tente novamente',
        )
      }
    },
    [navigation],
  )
  return (
    <Container colors={['#312E37', '#282829']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Content>
            <Image source={logoImg} />
            <View>
              <Title>Realize seu cadastro</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                name="name"
                autoCapitalize="words"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
              />
              <Input
                autoCorrect={false}
                name="username"
                ref={emailInputRef}
                autoCapitalize="none"
                keyboardType="default"
                icon="user"
                placeholder="Username"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
              />
              <Input
                name="password"
                ref={passwordInputRef}
                secureTextEntry
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                textContentType="newPassword"
                onSubmitEditing={() => {
                  formRef.current?.submitForm()
                }}
              />
            </Form>

            <Button onPress={() => formRef.current?.submitForm()}>
              Cadastrar
            </Button>
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>

      <ToSignIn onPress={() => navigation.navigate('SignIn')}>
        <Icon name="log-in" size={20} color="#fbf4ee" />
        <ToSignInText>Fazer Login</ToSignInText>
      </ToSignIn>
    </Container>
  )
}

export default SignUp
