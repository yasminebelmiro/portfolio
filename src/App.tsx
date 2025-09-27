import Profile from "./components/Profile";
import imageProfile from "./assets/imageProfile.jpeg";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="w-full h-auto lg:h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Menu />
      <div className=" flex flex-col lg:flex-row h-full justify-center items-start mb-16 lg:pt-16 md:mb-0 lg:overflow-hidden">
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
        <div className="bg-white flex flex-col py-10 px-4 rounded-0 md:rounded-tr-3xl lg:rounded-tr-none lg:rounded-tl-3xl md:mt-16 md:px-10 w-full lg:h-full md:w-[95%] lg:w-2/3 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
