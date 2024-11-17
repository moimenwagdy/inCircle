"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import FormContainer from "../FormContainer";
import Button from "../../Buttons/Button";
import GoogleSigninButton from "./GoogleSigninButton";
import LoginInput from "./LoginInput";
import LoginSubmitButton from "./LoginSubmitButton";
const LoginForm = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const passwordlHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const formHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", { email: email, password: password });
  };
  const session = useSession();
  const tInputs = useTranslations("auth");
  const tPlaceholders = useTranslations("authPlaceholders");
  const tButtons = useTranslations("buttons");
  const t_inputs = useTranslations("auth");
  return (
    <FormContainer>
      {!session.data ? (
        <form
          onSubmit={formHandler}
          className="flex flex-col w-1/2 mx-auto py-8 gap-y-8">
          <label className="text-6xl md:text-7xl text-center font-bold font-headerFont mb-4 text-redColor ">
            {t_inputs("formHeaderSignIn")}
          </label>
          <LoginInput
            type="email"
            onChange={emailHandler}
            placeholder={tPlaceholders("emailPlaceholder")}>
            {tInputs("emailInput")}
          </LoginInput>
          <LoginInput
            type="password"
            onChange={passwordlHandler}
            placeholder={tPlaceholders("passwordPlaceholder")}>
            {tInputs("passwordInput")}
          </LoginInput>
          <section className="space-y-3">
            <LoginSubmitButton />
            <GoogleSigninButton />
          </section>
        </form>
      ) : (
        <></>
      )}
    </FormContainer>
  );
};

export default LoginForm;
