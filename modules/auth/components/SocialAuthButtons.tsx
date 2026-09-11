// Components
import { Button } from "@/components/ui/button";

// Icons
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const SocialAuthButtons = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button variant="outline">
        <FaGoogle />
      </Button>
      <Button variant="outline">
        <FaGithub />
      </Button>
      <Button variant="outline">
        <FaFacebook />
      </Button>
    </div>
  );
};

export default SocialAuthButtons;
