import { useTranslations } from "next-intl";
import SignupInput from "./SignupInput";
import { ZodIssue } from "zod";

const SingupInputs: React.FC<{
  formState:
    | {
        success: boolean;
        errors: ZodIssue[];
        message?: undefined;
        data?: undefined;
      }
    | {
        success: boolean;
        message: string;
        errors?: undefined;
        data?: undefined;
      }
    | {
        success: boolean;
        data: any;
        errors?: undefined;
        message?: undefined;
      }
    | null;
  urlImagePath: string;
}> = ({ formState, urlImagePath }) => {
  const t_inputs = useTranslations("auth");
  const t_PlaceHolders = useTranslations("authPlaceholders");
  let usernameER;
  let emailER;
  let passwordER;
  let repeatedPasswordER;
  let ageER;
  formState?.errors?.forEach((error) => {
    if (error.path[0] === "username") {
      usernameER = error.message;
    }
    if (error.path[0] === "password") {
      passwordER = error.message;
    }
    if (error.path[0] === "repeatedPassword") {
      repeatedPasswordER = error.message;
    }
    if (error.path[0] === "email") {
      emailER = error.message;
    }
    if (error.path[0] === "age") {
      ageER = error.message;
    }
  });

  return (
    <>
      <SignupInput
        name="username"
        type="text"
        id="username"
        placeholder={t_PlaceHolders("usernamePlaceholder")}
        text={t_inputs("usernameInput")}
        error={usernameER}
      />
      <SignupInput
        name="email"
        id="email"
        type="email"
        placeholder={t_PlaceHolders("emailPlaceholder")}
        text={t_inputs("emailInput")}
        error={emailER}
      />
      <SignupInput
        type="password"
        name="password"
        id="password"
        placeholder={t_PlaceHolders("passwordPlaceholder")}
        text={t_inputs("passwordInput")}
        error={passwordER}
      />
      <SignupInput
        type="password"
        name="repeatedPassword"
        id="passwordCheck"
        placeholder={t_PlaceHolders("passwordRepeatPlaceholder")}
        text={t_inputs("passwordRepeatInput")}
        error={repeatedPasswordER}
      />
      <SignupInput
        type="date"
        id="age"
        name="age"
        text={t_inputs("ageInput")}
        error={ageER}
        className="w-[250px]  border border-gray-300 rounded-md px-10 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
      />
      <SignupInput
        type="text"
        id="imgPath"
        name="imgPath"
        defaultValue={urlImagePath}
        className="hidden"
      />
    </>
  );
};

export default SingupInputs;
