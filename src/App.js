import './App.css';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Authorization from "./components/authorization/registration";

export default function App() {
  return (
    <div>
        <Header />
        <Authorization />
        <Footer />
    </div>
  );
}
