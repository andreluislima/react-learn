
export function Challenge(){
    const valor01 = 12;
    const valor02 = 42;
    
    function Somar(n1:number, n2:number){
        console.log(n1 + n2);
    }

    return(
        <div>
            <h1>Soma de dois valores</h1>
            <p>Valor 1: {valor01}</p>
            <p>Valor 2: {valor02}</p>
        
            <hr />
            <p>Soma dos valores. Clique no botão para somar os dois valores acima</p>
            <button onClick={()=> Somar(valor01, valor02)}>Somar</button>
            {/* <p>Resultado: {Somar(valor01, valor02)}</p> */}
        </div>
        
        
    )   

}