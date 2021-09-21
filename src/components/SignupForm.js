import { Link, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [agree, setAgree] = useState();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // confirm password vaildation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    //signup user
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (err) {
      setLoading(false);
      setError("Cant create account");
    }
  };

  return (
    <>
      <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter name"
          icon="person"
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <TextInput
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
          required
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />

        <Checkbox
          text="I agree to the Terms &amp; Conditions"
          required
          value={agree}
          onChange={(e) => {
            setAgree(e.target.value);
          }}
        />

        <Button type="submit" disabled={loading}>
          <span>Submit Now</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </>
  );
}
