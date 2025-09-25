import Profile from "./components/Profile";
import imageProfile from "./assets/imageProfile.jpeg";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="w-full h-auto lg:h-screen ">
      <Menu />
      <div className=" flex flex-col lg:flex-row h-full justify-center items-start mb-16 md:pt-32 md:mb-0 lg:overflow-hidden">
        <Profile
          imageProfile={imageProfile}
          name={"Yasmine Belmiro"}
          role={"Front-end Developer"}
          location={"Pires do Rio - Goiás"}
          email={"devyasminebelmiro@gmail.com"}
          linkedinURL={
            "https://www.linkedin.com/in/yasmine-oliveira-belmiro-471612282/"
          }
          githubURL={"https://github.com/YasmineBelmiro"}
        />
        <div className="lg:overflow-y-auto lg:h-full md:w-[90%] lg:w-2/3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
