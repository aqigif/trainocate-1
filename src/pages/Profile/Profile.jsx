import useProfile from "./Profile.handler";

function Profile() {
  const {handleBackToHome} = useProfile()
  return (
    <>
      <p>Profile</p>
      <button style={{cursor: 'pointer'}} onClick={handleBackToHome}>back to home</button>
    </>
  );
}

export default Profile;
