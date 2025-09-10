
export function TemplateExpressions(){
    const name = "André";
    const data = {
        age:24,
        name: "Celso"
    }

    return(
        <div>
            <h1>Olá {name}</h1>
            <p>O {data.name} tem {data.age} anos</p>
            <p>{10*10 + 100}</p>
        </div>
    )
}