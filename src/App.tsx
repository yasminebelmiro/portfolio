import Profile from "./components/Profile";
import imageProfile from "./assets/imageProfile.jpeg"
const App = () => {
  return (
    <div className="bg-black w-screen h-screen">
      <Profile
        imageProfile={imageProfile}
        name={"Yasmine Belmiro"}
        role={"Front-end Developer"}
        location={"Pires do Rio - Goiás"}
        email={"devyasminebelmiro@gmail.com"}
        linkedinURL={"https://www.linkedin.com/in/yasmine-oliveira-belmiro-471612282/"}
        githubURL={"https://github.com/YasmineBelmiro"}
      />
    </div>
  );
};

export default App;
