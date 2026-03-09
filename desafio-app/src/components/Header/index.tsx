import "./index.css";

export default function Header() {
  return (
    <>
      <div className="container-header">
        <div className="row align-items-center">
          <div className="col-12 col-md-10 p-4">
            <h1 className="mb-3 mb-md-0">Title</h1>
          </div>

          <div className="col-12 col-md-2">
            <button className="btn btn-primary">Novo Registro</button>
          </div>
        </div>
      </div>
    </>
  );
}


