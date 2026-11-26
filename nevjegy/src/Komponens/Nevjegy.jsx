export default function Nevjegy(){
    const nevjegy = {
        "nev": "Zolnai Ákos",
        "osztaly": "13.c",
        "kor": 19,
        "email": "zolako311@logiker.hu",
        "bemutatkozás": "Zolnai Ákos Logiker tanulója"
    }

    const monogram =  nevjegy.nev.split(' ').map(r => r[0]).join('')
    
    return(
        <div>
            <div style={{ width: 80, height: 80, borderRadius: '50%', display: 'grid', placeItems: 'center', backgroundColor: "navy" }}>
                {monogram}
            </div>
         <h2>{nevjegy.nev}</h2>   
         <p>{nevjegy.osztaly}</p>
         <p>{nevjegy.kor} éves</p>
         <p>{nevjegy.bemutatkozás}</p>

         <a href={`mailto:${nevjegy.email}`}>
            {nevjegy.email}
        </a>
        </div>
    )
}