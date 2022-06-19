import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
