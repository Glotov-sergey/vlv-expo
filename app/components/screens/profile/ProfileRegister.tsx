import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Controller, useForm } from "react-hook-form";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { ProfileStackParams } from "../../../navigation/navigation.interface";
import { BlackTitle } from "../../styled/global";
import axios from "axios";

type ProfileLoginScreenProps = NativeStackScreenProps<ProfileStackParams>;

type FormData = {
  name: string;
  city: string;
  email: string;
  password: string;
};

const ProfileRegister = ({ navigation }: ProfileLoginScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    const response = await axios.post("http://46.19.64.140:8080/registration", {
      ...data,
      orders: "",
      wishlist: "",
    });
    console.log(response.data);
  };

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#F0EBE7" }}>
      <View style={{ paddingTop: 10 }}>
        <View style={styles.container}>
          <BlackTitle style={{ maxWidth: 167 }}>Регистрация</BlackTitle>
          <View style={styles.formContainer}>
            <Controller
              control={control}
              name="name"
              rules={{
                required: { value: true, message: "Email обязателен!" },
              }}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    placeholder="Имя"
                    style={[
                      styles.defaultInput,
                      errors.name && styles.errorInput,
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
                      {errors.name?.message}
                    </Text>
                  ) : null}
                </>
              )}
            />
            <Controller
              control={control}
              name="city"
              rules={{
                required: {
                  value: true,
                  message: "Пожалуйста, введите свою фамилию!",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    placeholder="Город"
                    style={[
                      styles.defaultInput,
                      errors.city && styles.errorInput,
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
                      {errors.city?.message}
                    </Text>
                  ) : null}
                </>
              )}
            />
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
              <Text style={styles.buttonText}>Регистрация</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.push("profileLogin")}
              style={{ flexDirection: "column", alignItems: "center" }}
            >
              <Text style={{ fontFamily: "Circle-regular" }}>
                Уже есть аккаунт?
              </Text>
              <Text style={{ color: "#F7553D" }}>Войти</Text>
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

export default ProfileRegister;
