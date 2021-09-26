import Header from "./components/Header/js/Header";
import Main from "./components/Main/js/Main";
import Footer from "./components/Footer/js/Footer";
import Context from "./Context";

function App() {
  return (
    <Context>
      <Header/>
      <Main/>
      <Footer/>
    </Context>
  );
}

export default App;
