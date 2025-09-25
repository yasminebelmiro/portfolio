import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";
interface ProfileProps {
  imageProfile: string;
  name: string;
  role: string;
  location: string;
  email: string;
  linkedinURL: string;
  githubURL: string;
}
const Profile = ({
  imageProfile,
  name,
  role,
  location,
  email,
  linkedinURL,
  githubURL,
}: ProfileProps) => {
  return (
    <section className="w-full lg:w-1/3 text-white p-5 pt-10">
      <div className="flex lg:flex-col gap-5 text-center justify-start md:justify-center items-center">
        <img
          className="rounded-full w-30 h-30 md:w-50 md:h-50 border-4 border-white"
          src={imageProfile}
          alt="Foto de perfil"
        />
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-xl md:text-3xl font-bold">{name}</h1> 
          <h2 className="bg-white rounded-2xl text-black text-sm md:text-xl px-1 py-3 md:p-3">
            {role}
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-md mt-4 md:justify-center md:items-center">
        <p className="flex items-center gap-2 md:text-xl">
          <span className="text-2xl ">
            <FaLocationDot />
          </span>
          {location}
        </p>
        <p className="flex items-center gap-2 md:text-xl">
          <span className="text-2xl">
            <MdAlternateEmail />
          </span>
          {email}
        </p>
        <div className="flex gap-4 text-4xl md:text-5xl mt-2 ">
          <Link
            className="cursor-pointer hover:text-gray-500"
            to={linkedinURL}
          >
            <FaLinkedin />
          </Link>
          <Link
            className="cursor-pointer hover:text-gray-500"
            to={githubURL}
          >
            <SiGithub />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
