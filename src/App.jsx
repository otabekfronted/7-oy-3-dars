import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./Components/Contact"));

function App() {
    return (
        <Router>
            <div className="container mx-auto px-5 max-w-4xl font-sans">
                <nav className="bg-gray-800 p-4 rounded-lg mt-2">
                    <ul className="list-none p-0 flex justify-around">
                        <li className="m-2">
                            <Link
                                to="/"
                                className="text-white no-underline text-lg hover:text-blue-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="m-2">
                            <Link
                                to="/about"
                                className="text-white no-underline text-lg hover:text-blue-400"
                            >
                                About
                            </Link>
                        </li>
                        <li className="m-2">
                            <Link
                                to="/contact"
                                className="text-white no-underline text-lg hover:text-blue-400"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Suspense
                    fallback={
                        <div className="flex items-center justify-center h-screen">
                            <div className="loader"></div>
                        </div>
                    }
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
