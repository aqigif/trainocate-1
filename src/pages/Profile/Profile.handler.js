import { useNavigate } from "react-router-dom";

function useProfile() {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }
  return {handleBackToHome};
}

export default useProfile;
