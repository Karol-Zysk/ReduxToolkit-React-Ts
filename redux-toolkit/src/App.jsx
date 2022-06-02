import "./App.css";
import UserViev from "./features/user/UserViev";
import IceCreamViev from "./features/icecream/icecreamViev";
import CakeViev from "./features/cake/cakeViev";

function App() {
  return (
    <div className="App">
      <CakeViev />
      <IceCreamViev />
      <UserViev />
    </div>
  );
}

export default App;
