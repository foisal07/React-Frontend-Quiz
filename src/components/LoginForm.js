import { Link } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
  return (
    <>
      <Form style={{ height: '300px', marginTop: '100px' }}>
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
        />

        <TextInput type="password" placeholder="Enter password" icon="lock" />

        <Button>
          <span>Submit Now</span>
        </Button>

        <div class="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </>
  );
}
