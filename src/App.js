// import logo from './logo.svg';
import "./App.css";
// import Button from "../node_modules/react-bootstrap/Button";
import Button from "react-bootstrap/Button";

// import { Container } from "react-bootstrap";

function App() {
  return (
    <article class="vh-100 dt center">
      <div class="dtc v-mid tc white ph3 ph4-l">
        <h1 class="f6 f2-m f-subheadline-l fw6 tc">audit app</h1>
        <>
          <a href="client-docs">
            <span class="p-5">
              <Button variant="dark">Client</Button>{" "}
            </span>
          </a>
          <span class="p-5 t-5">
            <a href="/auditor-config">
              <Button class="mr-1" variant="secondary">
                Auditor
              </Button>
            </a>
          </span>
        </>
      </div>
    </article>
  );
}

export default App;
