import AuthInputsAuthorization from "./AuthInputsAuthorization";
import SocialAuthButtons from "./SocialAuthButtons";

type LoginFormProps = {
  onSwitch: () => void;
};

const LoginForm = ({ onSwitch }: LoginFormProps) => {
  return (
    <div className="w-sm max-w-[calc(100vw-2rem)] rounded-lg border bg-white p-5 dark:bg-[#0a0a0a]/70 backdrop-blur-xs">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

      <SocialAuthButtons />

      <AuthInputsAuthorization />

      <p className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <button type="button" onClick={onSwitch} className="underline">
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
