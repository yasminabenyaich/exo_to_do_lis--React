import {useState} from 'react'
import Item from'./Item'
import {vs as uuidv4} from 'uuid'

export default function Form(){
    
    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien"},
        {txt:"coder avec React"}
    ])

    const [input, setInput] = useState("")

    let changeValueInput = (e) => {
        setInput(e.target.value)
        console.log(input);
    }

    let ajouter = (e) => {
        e.preventDefault()
        let x= [...dataArr];
        x.push({txt: input});
        setDataArr(x);
        setInput("")

    }

    let supprimer = (i) => {
        let x = [...dataArr];
        x.splice(i, 1);
        setDataArr(x);
    }
    
        return (
            <div className="m-auto px_4 col-12 col-sm-10 col-lg-6">
                <form className="mb-3">
                    <label htmlFor="todo" className="form-label">
                    Chose à faire
                    </label>
                    <input value={input} className="bar" type="text" onChange={(e) => changeValueInput(e)} />
                    <button onClick={(e) => ajouter(e)} className="mt-2 btn btn-primary d-block">Envoyez</button>
                 </form>
                 <h2>Liste des choses à faire : </h2>
                 <ul className="list-group">
                    {dataArr.map((item,index)=>{
                        return (
                            <Item
                            txt={item.txt}
                            key={index}
                            supprimer={() => supprimer(index)}
                            />
                        )
                    })}
                 </ul>
                 
                 
            </div>
        )
    }

