import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../contexts/AuthContext";


export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { login} = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //login user
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push('/');
    } catch (err) {
      setLoading(false);
      setError("Failed to login!");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} style={{ height: '300px'} }>
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
                    value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}/>

        <TextInput type="password" placeholder="Enter password" icon="lock" value={password}
          onChange= {(e) => {
            setPassword(e.target.value);
          }}/>

        <Button type='submit'>
          <span>Submit Now</span>
        </Button>

        <div class="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </>
  );
}
