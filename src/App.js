import "./App.css";
import Background from "./Components/background/Background";
import { WeatherApp } from "./Components/WeatherApp/WeatherApp";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className=" App">
      <Background></Background>
      <WeatherApp />
    </div>
  );
}

export default App;
