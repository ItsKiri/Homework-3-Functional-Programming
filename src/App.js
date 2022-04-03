import "./App.css";
import ShoppingPage from "./pages/ShoppingPage";
import CartManager from "./modules/CartManager";

function App() {
  const cm = new CartManager();
  return (
    <div className="App">
      <ShoppingPage cm={cm}></ShoppingPage>
    </div>
  );
}

export default App;
