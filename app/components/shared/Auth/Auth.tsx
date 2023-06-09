import { FC } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { loginAsync } from '../../../store/slices/authSlice'
import { login } from '../../../utils/jwt'

const Auth: FC = () => {

  const handleAuth = async (email: string, password: string) => {
    const res = await login(email, password)
    console.log(res)
  }

  return (
    <View>
      <Text>{1}</Text>
      <TouchableOpacity onPress={() => { handleAuth("test@mail.ru", "testtest") }}><Text>Отправить запрос</Text></TouchableOpacity>
    </View>
  )
}

export default Auth
