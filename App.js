import Footer from "./Component/Footer";
import Header from "./Component/Header";

function App() {
  function clik(){
    alert ("function call")
  }
  return (
    <div>
       
       <button onClick={clik()}>Click me</button>
    </div>
  );
}

export default App;