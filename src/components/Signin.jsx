import "../assets/signin.css";
import Img from "../assets/shopping.jpg";
import Joi from "joi";
import { SingleInput } from "./Input";
import { errorChange, errorSubmit } from "../utils/LoginErrorHandler";
import { useState } from "react";
import { useAuth } from "../utils/Auth";
import { useLocation, useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const redirectPath = location.state?.path || "/cart";
  const [error, setError] = useState(null);
  const [signup, setSignup] = useState({ email: "", password: "" });
  const schema = Joi.object({
    password: Joi.string()
      .min(5)
      .max(15)
      .label("Password Field")
      .regex(/^(?=.*[A-Z])(?=.*\d).{5,15}$/)
      .messages({
        "string.pattern.base":
          '"Password" Field must have number, Uppercase letter',
      }),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSignup({ ...signup, [name]: value });
    const error = errorChange(schema, target);
    if (error) {
      const { message, path } = error;
      return setError({ [path[0]]: message });
    } else {
      setError(null);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = errorSubmit(schema, signup);
    console.log(auth.user);
    if (!error) {
      auth.login(signup);
      navigate(redirectPath, { replace: true });
    }
    setError(error);
  };
  return (
    <div className="signUp">
      <div className="signUp-main">
        <div className="title">Sign In</div>

        <div className="content">
          <form onSubmit={handleSubmit} action="">
            <SingleInput
              value={signup.email}
              name={"email"}
              onChange={handleChange}
              label={"Enter email"}
              type={"email"}
            />
            {error && <div className="error">{error.email}</div>}

            <SingleInput
              value={signup.password}
              name={"password"}
              onChange={handleChange}
              label={"Enter password"}
              type={"password"}
            />
            {error && <div className="error">{error.password}</div>}

            <button className="submit">Sign In</button>
          </form>
          <div className="contact-bottom">
            The Google Privacy Policy and Terms of Service apply. Cart
          </div>
        </div>
      </div>
      <div className="contact-img">
        <img src={Img} alt="" />
      </div>
    </div>
  );
}
