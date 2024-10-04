import './App.css';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Authorization from "./components/authorization/authorization";

export default function App() {
  return (
    <div>
        <Header />
        <Authorization />
        {false && <Footer />}
    </div>
  );
}
