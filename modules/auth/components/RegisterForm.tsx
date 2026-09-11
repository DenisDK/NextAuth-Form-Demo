import AuthInputsRegistration from "./AuthInputsRegistration";
import SocialAuthButtons from "./SocialAuthButtons";

type RegisterFormProps = {
  onSwitch: () => void;
};

const RegisterForm = ({ onSwitch }: RegisterFormProps) => {
  return (
    <div className="w-sm max-w-[calc(100vw-2rem)] rounded-lg border bg-white p-5 dark:bg-[#0a0a0a]/70 backdrop-blur-xs">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      <SocialAuthButtons />
      <AuthInputsRegistration />
      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <button type="button" onClick={onSwitch} className="underline">
          Login
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
