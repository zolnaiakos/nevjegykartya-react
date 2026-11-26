export default function Keszsegek(){
    const lista = [
        "készség1",
        "készség2",
        "készség3",
        "készség4",
        "készség5"
    ]

    return(
          <div>
            <h2>Készségek ({lista.length})</h2>

            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
                {lista.map((keszseg, index) => (
                    <span key={index}>{keszseg}</span>
                ))}
            </div>
        </div>
    )
}