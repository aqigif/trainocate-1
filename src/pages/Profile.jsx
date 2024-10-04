import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }
  return (
    <>
      <p>Profile</p>
      <button style={{cursor: 'pointer'}} onClick={handleBackToHome}>back to home</button>
    </>
  );
}

export default Profile;
