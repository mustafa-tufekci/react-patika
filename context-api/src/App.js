import "./App.css";
import Container from "./components/Container";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

function App() {

  /// Bu durumda userContexti ThemeContextini kullanabilir durumda
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
          <Container />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
