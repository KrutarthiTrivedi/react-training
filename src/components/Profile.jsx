function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <ProfileCard  name="John Doe" age={30} greeting="Hello, welcome to my profile!" >
      <p>Hobby : AAbv, bbc,wsdqad</p>
      <button>Update profile</button>
      </ProfileCard>
       <ProfileCard  name="John Doe" age={30} greeting="Hello, welcome to my profile!" >
      <p>Hobby : AAbv, bbc,wsdqad</p>
      <button>Update profile</button>
      </ProfileCard>
    </div>
  );
}

export default Profile;

function ProfileCard(props) {
    const {name,age,greeting,children} = props
    return(
        <>
            <h1>Name {name}</h1>
            <p>Age: {age}</p>
            <p>Greeting: {greeting}</p>
            {children}
        </>
    )   
}