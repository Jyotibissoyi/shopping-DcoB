import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
    const navigate=useNavigate();

	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
       console.log(data)
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3001/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
            console.log(data)

			window.location = "/Home";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className='login_container'>
			<div className='login_form_container'>
				<div className='left'>
					<form className='form_container' onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className='input'
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className='input'
						/>
						{error && <div className='error_msg'>{error}</div>}
						<button type="submit" className='green_btn'>
							Sing In
						</button>
					</form>
				</div>
				<div className='right'>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className='white_btn'>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;