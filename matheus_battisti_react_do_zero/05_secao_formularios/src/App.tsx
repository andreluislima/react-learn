import "./App.css";
import { MyForm } from "./components/MyForm/MyForm";

function App() {
  return (
    <>
      <MyForm
        user={{ name: "Ana", email: "ana@ig.com", bio: "Médico", role: "adm" }}
      />
    </>
  );
}

export default App;
