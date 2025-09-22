import { useEffect, useState } from "react"

export default function Exchange(){

    const [sum, setSum] = useState(0)
    const[current, setCurrent] = useState('$')
    const [itog, setItog] = useState(null)


    useEffect(() =>{
        if (current === '$'){
            setItog((sum / 83).toFixed(2))
        } else if (current === 'Euro')
            setItog((sum / 93).toFixed(2))
    },[sum, current])


    return(
        <div>
            <input value={sum} onInput={(e) => setSum(e.target.value)} className="bg-lime-400" type="number" placeholder="Введите сумму" />
            <select onChange={(e) => setCurrent(e.target.value)}>
                <option  value="$">$</option>
                <option value="Euro">Euro</option>
            </select>


            

            <div>
                <span>Вы получите {itog} {current}</span>
            </div>
        </div>
    )
}