import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="pt-96 ">
      <div className="socials pt-96">
        <div className="pt-40 flex flex-wrap space-x-40 justify-center text-white">
          <div>
            <a href="">
              <FaInstagram size={26} />
            </a>
          </div>
          <div>
            <a href="">
              <FaTiktok size={26} />
            </a>
          </div>
          <div>
            <a href="">
              <FaTwitter size={26} />
            </a>
          </div>
        </div>
      </div>
      <div className="legals">
        <div className="flex flex-wrap justify-center space-x-4 mt-20 text-sm text-gray-700">
          <div className="mentions  hover:underline">
            <a href="">Mentions légales</a>{" "}
          </div>
          <div className="politique hover:underline">
            <a href="">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </div>
  );
}
