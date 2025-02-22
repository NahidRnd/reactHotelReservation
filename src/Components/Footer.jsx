import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <div>
      <div className="container footer">
        <div className="footer-about footer-flex">
            <img src={logo} alt="logo" />
            <p>
            At Travel Nest, we simplify your travel planning by offering seamless hotel reservations. We provide a wide array of options tailored to your preferences, ensuring an unforgettable stay.
            </p>
        </div>
        <div className="footer-flex">
            <h3>
                LATEST NEWS
            </h3>
            <ul>
                <li>
                10 Things You Should Know
                </li>
                <li>
                Live your myth in Greece
                </li>
                <li>
                Post without feuatured image
                </li>
                <li>
                Travel Nest in pictures
                </li>
                <li>
                Travel Nest Weddings
                </li>
            </ul>
        </div>
        <div className="footer-flex">
            <h3>
            USEFUL LINKS
            </h3>
            <ul>
                <li>Gallery</li>
                <li>Contact us</li>
                <li>About us</li>
                <li>My Bookings</li>
                <li>Hotels</li>
            </ul>
        </div>
        <div className="footer-flex">
            <h3>
            CONTACT US
            </h3>
            <ul>
                <li>
                    <IoLocationOutline />
                    123 Rue de Rivoli 75001 Paris, France
                </li>
                <li>
                    <FiPhone />
                    +33 1 23 45 67 89
                </li>
                <li>
                    <MdOutlineMailOutline />
                    info@travelnest.fr
                </li>
            </ul>
            <div className="social">
                <FaFacebookF size={22} />
                <FaInstagram size={22} />
                <FaPinterest size={22} />
                <TfiYoutube size={22} />
                <FaTwitter size={22} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
