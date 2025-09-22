import { useEffect, useState } from "react"

export default function New(){


    const[itog, setitog] = useState()

    const[good, setGood] = useState ()

    const otvet = 10

    useEffect(() => {
        if (good === ''){
            setitog('')
        }else if (Number(good) === otvet){
            setitog('Верно')
        }
        else{
            setitog('Неправильно')
        }
    }, [good])

    return(
        <div>
            <h1>Тест на iq</h1>

            <section >
                <h3>сколько будет весить гайка от поровоза если подстричь овцу?</h3>
                <input onChange={(e) => setGood(e.target.value)} value={good} type="number"placeholder="" />
            <span>Вы ответили:{itog}</span>
            </section>

        </div>
    )
}