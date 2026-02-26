import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="card">
        <div>
          <img
            src="https://blog.unyleya.edu.br/wp-content/uploads/2019/07/298696-conheca-os-4-principais-tipos-de-perfis-profissionais.jpg"
            alt="Carro - Onix 2020"
          />
          <strong>Clara</strong>
        </div>
        <button>Follow</button>
      </div>

      <div className="card">
        <div>
          <img
            src="https://etalent.com.br/wp-content/uploads/2019/09/Harvey-Specter.jpg"
            alt="Carro - Onix 2022"
          />
          <strong>Harvey</strong>
        </div>
        <button>Follow</button>
      </div>
    </div>
  );
}

export default App;
