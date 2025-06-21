import React, { useRef, useState } from "react";

const Contact = () => {
	const formRef = useRef();

	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = () => {
		console.log("Enviado");
	};

	return (
		<section className="c-space my-20 relative ">
			<div className="relative h-fit flex items-center justify-center flex-col -slate-600">
				<img
					src="assets/terminal.png"
					alt="terminal bakcground"
					className="inset-0 h-full absolute top-0 w-full"
				/>

				<div className="relative top-14 z-10 contact-container w-full mb-28">
					<h3 className="head-text mt-1">Let's talk</h3>
					<p className="text-lg text-white-600 mt-3 ">
						Wheter you're looking to build a new
						website, improve your existing platform, or
						bring a unique project to life, I'm here to
						help.
					</p>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-10  flex flex-col space-y-7"
					>
						<label className="space-y-3">
							<span className="field-label">
								Full Name
							</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="Aaron Hernandez"
							/>
						</label>
						<label className="space-y-3">
							<span className="field-label">
								Email
							</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="aaronhero@gmail.com"
							/>
						</label>
						<label className="space-y-3">
							<span className="field-label">
								Your message
							</span>
							<textarea
								name="message"
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								className="field-input"
								placeholder="Hi I'm interested in..."
							/>
						</label>
						<button
							className="field-btn"
							type="submit"
							disabled={loading}
						>
							{loading
								? "Sending..."
								: "Send Message"}

							<img
								src="assets/arrow-up.png"
								className="field-btn_arrow"
							/>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
