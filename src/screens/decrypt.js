import React, { useState } from "react"
import Cryptograph from "../utils/cryptograph"

const Decrypt = () => {
    const [cypherText, setCypherText] = useState("")
    const [key, setKey] = useState(sessionStorage.getItem('key') || "")
    const [result, setResult] = useState("")

    const handleCypherTextChange = (evt) => {
        setCypherText(evt.target.value);
    }

    const handleKeyChange = (evt) => {
        setKey(evt.target.value);
    }

    const decrypt = () => {
        if (cypherText === "" || key === "") {
            return alert("Cypher text atau Key tidak boleh kosong !")
        }
        setResult(Cryptograph.decrypt(cypherText, key));
    }

    return (
        <React.Fragment>
            <div className="my-4">
                <p className="text-xl text-white mb-4">Cypher Text</p>
                <input type="text" className="w-1/2 bg-slate-600 rounded-md outline-none px-2 py-2 text-white focus:ring-2 focus:ring-slate-500" onChange={(evt) => handleCypherTextChange(evt)} />
            </div>
            <div className="my-4">
                <p className="text-xl text-white mb-4">Key</p>
                <input type="text" className="w-1/2 bg-slate-600 rounded-md outline-none px-2 py-2 text-white focus:ring-2 focus:ring-slate-500" onChange={evt => handleKeyChange(evt)} value={key} />
            </div>
            <button className="w-1/2 mx-auto my-8 px-4 py-2 text-white font-semibold text-lg bg-amber-600 rounded-md hover:bg-amber-700 transition-all duration-300" onClick={decrypt} >Decrypt</button>
            <div className="my-4 mx-auto w-1/2">
                <p className="text-xl text-white mb-4">Result</p>
                <input type="text" className="w-full bg-slate-600 rounded-md outline-none px-2 py-2 text-white focus:ring-2 focus:ring-slate-500" disabled={true} value={result} />
            </div>
        </React.Fragment>
    )
}

export default Decrypt;