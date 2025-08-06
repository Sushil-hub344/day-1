import { IoHome } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";
import Navitem from "../data/Navitem";
const Navbar = () => {
function handleclick() {
	alert("Button Clicked!");
}
	return (
		<div className="nav">
			<div>LOGO</div>
			<div className="search-box">
			<input className="search" type="text" placeholder="search movies"/>
			</div>
			<div className="nav-links">
				<ul>
					{/* <li>
						<Link to="/"><IoHome />Home</Link>
					</li>
					<li>
						<Link to="/about"><MdOutlineRoundaboutLeft />About</Link>
					</li>
					<li>
						<Link to="/contact"><IoMdContact />Contact</Link>
					</li>
					<li>
						<Link to="/blog"><FaBlog />Blog</Link>
					</li>
					<li>
						<Link to="/moviespage">< MdMovie />Movies</Link>
					</li>
					<li>
						<button onMouseOut={handleclick}>Click me</button>
					</li> */}
					{
						Navitem.map((item,i) => {
							return(
								<li 
								key={item.id}>
								<Link to={item.to}> 
								<item.icon /> {item.title}</Link>
								</li>
							);
						})
					}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
