import React, { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
	return (
		<ul className="flex gap-6 list-none m-0 p-0 ">
			{navLinks.map(({ id, href, name }) => (
				<li key={id} className="flex items-center">
					<a
						href={href}
						className="text-neutral-200 px-4 py-2 transition-colors hover:text-white focus:outline-none"
					>
						{name}
					</a>
				</li>
			))}
		</ul>
	);
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center py-5 mx-auto c-space ">
					<a
						href="/"
						className="text-neutral-200 font-bold text-xl hover:text-white transition-colors"
					>
						Aaron
					</a>

					<button
						onClick={toggleMenu}
						className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
						aria-label="Toggle menu"
					>
						<img
							src={
								import.meta.env.BASE_URL +
								(isOpen
									? "assets/close.svg"
									: "assets/menu.svg")
							}
							alt="toggle"
							className="w-6 h-6"
						/>
					</button>

					<nav className="sm:flex hidden">
						<NavItems />
					</nav>
				</div>
			</div>

			<div
				className={`nav-sidebar  sm:hidden ${
					isOpen ? "max-h-screen" : "max-h-0"
				}`}
			>
				<nav className="p-5">
					<NavItems />
				</nav>
			</div>
		</header>
	);
};
export default Navbar;
