import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ onAuthRegister }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    onAuthRegister({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h1>Register Now!</h1>
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="inputName"
          value={name}
          onChange={onNameChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="inputEmail"
          value={email}
          onChange={onEmailChange}
          className="form-control"
          placeholder="email@example.com"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          value={password}
          onChange={onPasswordChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-4 text-end">
        <button type="submit" className="btn-signup">
          Sign Up
        </button>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  onAuthRegister: PropTypes.func.isRequired,
};

export default RegisterInput;
