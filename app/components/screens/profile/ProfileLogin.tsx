import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { ProfileStackParams } from "../../../navigation/navigation.interface";
import { createTokenPairs, getUserInfo } from "../../../services/auth/auth";
import { setUser } from "../../../store/slices/authSlice";
import { getToken, setToken } from "../../../utils/jwt";
import { BlackTitle } from "../../styled/global";

type ProfileLoginScreenProps = NativeStackScreenProps<ProfileStackParams>;

type FormData = {
  email: string;
  password: string;
};

const ProfileLogin = ({ navigation }: ProfileLoginScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const tokenPairs = await createTokenPairs(data);
    await setToken(tokenPairs.data.access_token);
    const access_token = await getToken();
    const response = await getUserInfo(access_token || "");
    dispatch(setUser(response.data.client));
    setIsLoading(false);
    navigation.push("profileMain");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F0EBE7" }}>
      <View style={{ paddingTop: 10 }}>
        <View style={styles.container}>
          <BlackTitle style={{ maxWidth: 167 }}>Вход и регистрация</BlackTitle>
          <View style={styles.formContainer}>
            <Controller
              control={control}
              name="email"
              rules={{
                required: { value: true, message: "Email обязателен!" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Некорректный адрес электронной почты",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    placeholder="Email"
                    style={[
                      styles.defaultInput,
                      errors.email && styles.errorInput,
                    ]}
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor="#A09793"
                  />
                  {errors.email ? (
                    <Text
                      style={{
                        textAlign: "left",
                        alignSelf: "flex-start",
                        paddingLeft: 20,
                        fontFamily: "Circle-regular",
                        color: "#BA1A1A",
                      }}
                    >
                      {errors.email.message}
                    </Text>
                  ) : null}
                </>
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{
                required: {
                  value: true,
                  message: "Пароль обязателен для ввода!",
                },
                minLength: {
                  value: 8,
                  message: "Некорректный пароль",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  secureTextEntry={true}
                  placeholder="Пароль"
                  style={[styles.defaultInput]}
                  value={value}
                  onChangeText={onChange}
                  placeholderTextColor="#A09793"
                />
              )}
            />
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.buttonContainer}
            >
              {isLoading ? (
                <ActivityIndicator size={"small"} color="white" />
              ) : (
                <Text style={styles.buttonText}>Войти</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.push("profileRegister")}
              style={{ flexDirection: "column", alignItems: "center" }}
            >
              <Text style={{ fontFamily: "Circle-regular" }}>
                Ещё нет аккаунта?
              </Text>
              <Text style={{ color: "#F7553D" }}>Регистрация</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ textAlign: "center", color: "#A09793" }}>
            Я ознакомлен и согласен с условиями оферты и политики
            конфиденциальности
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    paddingVertical: 20,
  },
  errorInput: {
    backgroundColor: "#F4DADA",
    color: "#BA1A1A",
  },
  defaultInput: {
    borderColor: "#F7553D",
    borderWidth: 1,
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    fontSize: 14,
    fontFamily: "Circle-regular",
  },
  formContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Circle-bold",
    color: "white",
    fontSize: 14,
    textTransform: "uppercase",
  },
  buttonContainer: {
    backgroundColor: "#F7553D",
    width: "90%",
    paddingVertical: 12,
    borderRadius: 16,
  },
  policyText: {},
});

export default ProfileLogin;
