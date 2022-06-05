import { useEffect, useState } from "react";
import Decrypt from "./screens/decrypt";
import Encrypt from "./screens/encrypt";

function App() {
  const menu = ['ENCRYPT', 'DECRYPT'];
  const [isE, setisE] = useState(menu[0]);

  useEffect(() => {
    window.addEventListener("beforeunload", () => { sessionStorage.clear() })
    return () => {
      window.removeEventListener("beforeunload", () => { });
    };
  }, []);

  return (
    <div className="bg-slate-800 w-screen h-screen overflow-auto">
      <div className="flex flex-col w-full md:w-10/12 mx-auto p-4">
        <h1 className="text-3xl text-white mt-8">Cryptography Assessment</h1>
        <hr className="border-2 my-4 bg-slate-600 border-slate-600" />
        <nav className="mx-auto">
          <ul className={`flex gap-4 px-1 relative after:contents-['_'] after:absolute after:h-[2px] after:bg-white after:w-1/2 after:top-10 ${isE === menu[0] ? "after:-translate-x-1" : "after:translate-x-full"} after:transition-all after:duration-300 after:ease-in-out`}>
            <li className={`${isE === menu[0] ? 'text-white' : 'text-slate-400'} p-1 text-xl cursor-pointer transition-all`} onClick={() => setisE(menu[0])}>Encrypt</li>
            <li className={`${isE === menu[1] ? 'text-white' : 'text-slate-400'} p-1 text-xl cursor-pointer`} onClick={() => setisE(menu[1])}>Decrypt</li>
          </ul>
        </nav>
        {isE === menu[0] ? <Encrypt /> : <Decrypt />}
      </div>
    </div>
  );
}

export default App;
