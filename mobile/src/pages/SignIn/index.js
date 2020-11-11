import React, { useCallback, useRef } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { Form } from "@unform/mobile";
import styles from "./styles";
import Header from "../../components/PageHeader";

import * as Yup from "yup";
import Input from "../../components/Input";

import getValidationErrors from "../../utils/getValidationErrors";

import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";

const SignIn = () => {
  const { signIn} = useAuth();

  const navigation = useNavigation();
  const formRef = useRef(null);

  const inputRef = useRef(null);

  const handleSignIn = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail várlido"),
        password: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

     await signIn({
        email: data.email,
        password: data.password,
      });

      
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        const array = [];
        Object.entries(errors).forEach((entry) => {
          const [key, value] = entry;
          array.push(value);
        });
        Alert.alert(
          "Error no logar",
          array.toString().replace(/,/g, "\n")
        );
        formRef.current?.setErrors(errors);
        formRef.current?.setErrors(errors);

        return;
      }
    }
  }, [signIn]);

  return (
    <>
      <Header title="Login" />

      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <View style={{ ...styles.container, marginTop: -30 }}>
          <Form ref={formRef} onSubmit={handleSignIn}>
            <View style={styles.InputsGroup}>
              <Input
                autoCorrect={false}
                multiline={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  inputRef.current?.focus();
                }}
              />

              <Input
                ref={inputRef}
                name="password"
                icon="lock"
                multiline={false}
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              <View elevation={5} style={{ ...styles.button, top: -5 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  SIGN IN
                </Text>
              </View>
            </TouchableOpacity>
          </Form>
          <TouchableOpacity activeOpacity={0.3} onPress={() => {}}>
            <Text style={styles.Recoverpassword}>Recuperar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SignIn;
