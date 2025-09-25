import Profile from "./components/Profile";
import imageProfile from "./assets/imageProfile.jpeg"
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className=" w-screen h-screen">
      <Menu />
      <div className=" flex flex-col lg:flex-row h-full justify-center items-start pt-32">
        <Profile
        imageProfile={imageProfile}
        name={"Yasmine Belmiro"}
        role={"Front-end Developer"}
        location={"Pires do Rio - Goiás"}
        email={"devyasminebelmiro@gmail.com"}
        linkedinURL={"https://www.linkedin.com/in/yasmine-oliveira-belmiro-471612282/"}
        githubURL={"https://github.com/YasmineBelmiro"}
      />
      {/* <Outlet/> */}
      <div className="w-full h-full lg:w-2/3 bg-amber-300">ola</div>
      </div>
    </div>
  );
};

export default App;
