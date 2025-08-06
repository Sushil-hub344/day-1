import "./App.css";
import Card from "./components/Card";
import Conditional from "./components/Conditional";
import Navbar from "./components/Navbar";
import Props from "./components/Props";
import Movies from "./data/movies";
import CompA from "./components/CompA";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import MoviesPage from "./pages/MoviesPage";
import Useeffect from "./components/Useeffect";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";

function App() {
	return (
		<>
			{/* <h1 className="my-class">Hello World</h1> */}

			<BrowserRouter> 
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/moviespage" element={<MoviesPage />} />
				<Route path="/register" element={<SignupForm />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			</BrowserRouter>
			{/* <div className="app-container"> */}
				{/* <Card
					title="Avengers: Endgame"
					director="Anthony & Joe Russo"
					release="2019-04-26"
					image="https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg"
				/>

				<Card
					title="Interstellar"
					director="Christopher Nolan"
					release="2014-11-07"
					image="https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg"
				/>
				<Card
					title="The Godfather"
					director="Francis Ford Coppola"
					release="1972-03-24"
					image="https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg"
				/>

				<Card
					title="Forrest Gump"
					director="Robert Zemeckis"
					release="1994-07-06"
					image="https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_SY679_.jpg"
				/>
				<Card
					title="Fight Club"
					director="David Fincher"
					release="1999-10-15"
					image="https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg"
				/>
				<Card
					title="The Matrix"
					director="Lana & Lilly Wachowski"
					release="1999-03-31"
					image="https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"
				/>
				<Card
					title="Avengers: Endgame"
					director="Anthony & Joe Russo"
					release="2019-04-26"
					image="https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg"
				/>

				<Card
					title="Interstellar"
					director="Christopher Nolan"
					release="2014-11-07"
					image="https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg"
				/>
				<Card
					title="The Godfather"
					director="Francis Ford Coppola"
					release="1972-03-24"
					image="https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg"
				/>

				<Card
					title="Forrest Gump"
					director="Robert Zemeckis"
					release="1994-07-06"
					image="https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_SY679_.jpg"
				/>
				<Card
					title="Fight Club"
					director="David Fincher"
					release="1999-10-15"
					image="https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg"
				/>
				<Card
					title="The Matrix"
					director="Lana & Lilly Wachowski"
					release="1999-03-31"
					image="https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"
				/>	 */}
				{/* <div className="container">
					{Movies.map((item, i) => {
					return <Card 
					title={item.title}
					release={item.release}
					director={item.director}
					image={item.image}/>;
				})}
				</div> */}
				
			{/* </div> */}
			{/* <CompA data="this is data from component l" /> */}
			{/* <Conditional /> */}
			{/* <Props title="Lumbini City College" /> */}

			
		</>
	);
}

export default App;
