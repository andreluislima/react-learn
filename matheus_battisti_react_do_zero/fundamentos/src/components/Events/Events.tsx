export function Events(){

    const handleMyEvent = ()=>{
        console.log('oi')
    }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => alert('clicou')}>Clique Aqui também</button>
            </div>
        </div>
    )
}