import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Players from "./components/Players";

const App = () => {
  return (
    <div className="min-h-[100vh]">
      <Header />
      {/* <Players /> */}
      <Outlet />
    </div>
  );
};

export default App;
