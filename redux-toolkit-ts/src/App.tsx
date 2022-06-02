import "./App.css";
import UserViev from "./features/user/UserViev";
import IceCreamViev from "./features/icecream/IceCreamViev";
import CakeViev from "./features/cake/CakeViev";

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
