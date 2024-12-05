import logo from "../assets/curriculumvitae.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6 h-20">
        <div className="flex flex-shrink-0 items-center">
            <a href="../public/resume/vyshnavresume.pdf" target="_blank" rel="noopener noreferrer"><img className="mx-2 w-10" src={logo} alt="logo"/></a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a target="_blank" href="https://www.linkedin.com/in/vyshnavk1/"><FaLinkedin/></a>
            <a target="_blank" href="https://github.com/vyshnavkandamath"><FaGithub/></a>
            <a target="_blank" href="https://www.instagram.com/vyshnavk_"><FaInstagram/></a>
        </div>
       
    </nav>
};

export default Navbar;