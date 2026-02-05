export default function jsx2(){
    
    const subititulo = "Java Script"

    return(
        <div>
            <h1>Integração entre JS e JSX</h1>
            <p>{subititulo}</p>
            <p>{3 * 3}</p>
            <p>{Math.max(12, 25)}</p>
            <p>{entreValores(10, 1,40)}</p>
        </div>
    )
}

function entreValores(valor, min, max){
    if(valor >= min && valor <= max){
        return "sim"
    }else{
        return "não"
    }
}