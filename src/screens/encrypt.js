import React, { useState } from "react";
import Cryptograph from "../utils/cryptograph";

const Encrypt = () => {
    const [plainText, setPlainText] = useState("");
    const [key, setKey] = useState(sessionStorage.getItem('key') || "");
    const [result, setResult] = useState("");

    const handleTextChange = (evt) => {
        setPlainText(evt.target.value);
    }

    const handleKeyChange = (evt) => {
        setKey(evt.target.value);
    }

    const generateKey = () => {
        setKey(Cryptograph.createKey());
    }

    const encrypt = () => {
        if (plainText === "" || key === "") {
            return alert("Plain text atau Key tidak boleh kosong");
        }
        sessionStorage.setItem('key', key);
        setResult(Cryptograph.encrypt(plainText, key));
    }

    return (
        <React.Fragment>
            <div className="my-4">
                <p className="text-xl text-white mb-4">Plain Text</p>
                <input type="text" className="w-full md:w-1/2 bg-slate-600 rounded-md outline-none px-2 py-2 text-white focus:ring-2 focus:ring-slate-500" onChange={(evt) => handleTextChange(evt)} />
            </div>
            <div className="my-4">
                <p className="text-xl text-white mb-4">Key</p>
                <input type="text" className="w-full md:w-1/2 bg-slate-600 rounded-md outline-none px-2 py-2 text-white focus:ring-2 focus:ring-slate-500" onChange={(evt) => handleKeyChange(evt)} value={key} />
                <button className="block md:inline px-4 py-2 mt-4 md:mt-0 md:ml-4 text-white bg-slate-600 rounded-md hover:bg-slate-700 transition-all duration-300" onClick={generateKey}>Generate Key</button>
            </div>
            <button className="w-1/2 mx-auto my-8 px-4 py-2 text-white font-semibold text-lg bg-teal-700 rounded-md hover:bg-teal-800 transition-all duration-300" onClick={encrypt}>Encrypt</button>
            <div className="my-4 md:mx-auto md:w-1/2">
                <p className="text-xl text-white mb-4">Result</p>
                <input type="text" className="w-full bg-slate-600 rounded-md outline-none px-2 py-2 text-white focus:ring-2 focus:ring-slate-500" disabled={true} value={result} />
            </div>
        </React.Fragment>
    )
}

export default Encrypt;