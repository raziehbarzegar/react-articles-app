import { useState } from "react";
import Input from "../../components/input/Input";
import axios from "axios";
import { useNavigate } from "react-router";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (formData.password.length < 6) {
      validationErrors.password =
        "Your password must be at least 6 characters.";
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword =
        "The passwords you entered don’t match.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      const dataToSend = { ...formData };
      delete dataToSend.confirmPassword;

      axios
        .post("http://localhost:8000/users", dataToSend)
        .then(() => {
          alert("Registration completed successfully!");
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section className="registerForm pt-32">
      <div className="container md:max-w-lg">
        <div className="flex flex-col">
          <h3 className="text-3xl mb-4">Create your account</h3>
          <form action="" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Enter your First name"
              required
              label={"First name"}
              name={"firstName"}
              onChange={handleFormChange}
            />
            <Input
              type="text"
              placeholder="Enter your Last name"
              required
              label="Last name"
              name={"lastName"}
              onChange={handleFormChange}
            />
            <Input
              type="email"
              placeholder="Enter your Email"
              label="Email"
              required
              name={"email"}
              onChange={handleFormChange}
            />

            <Input
              type="password"
              placeholder="Enter a Password"
              label="Password"
              required
              name={"password"}
              onChange={handleFormChange}
              error={errors.password}
            />

            <Input
              type="password"
              placeholder="Enter Confirm password"
              required
              label="Confirm password"
              name={"confirmPassword"}
              onChange={handleFormChange}
              error={errors.confirmPassword}
            />
            <div className="text-center w-full p-3 flex justify-center">
              <button
                className="text-lg text-primary text-center py-1 px-3 rounded font-semibold bg-secondary hover:text-secondary hover:bg-white transition-colors duration-500 my-3 ml-3 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
