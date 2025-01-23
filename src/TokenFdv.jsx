import { useState } from "react";

export default function TokenFdv() {
    const [state, setState] = useState({
            tokenPrice: null,
            totalSupply: null,
            fdv: null,
        });
    
        const handleChange = (key, value) => {
            setState((prevState) => ({
                ...prevState,
                [key]: parseFloat(value) || 0
            }));
        };
    
        const calculateTokenFdv = () => {
            const { tokenPrice, totalSupply } = state;

            if (isNaN(tokenPrice) || !tokenPrice) {
                alert("Please enter a valid token price");
            } else if (isNaN(totalSupply) || !totalSupply) {
                alert("Please enter a valid total supply");
            } else {

            const fdv = tokenPrice * totalSupply;
            setState((prevState) => ({
                ...prevState,
                fdv
            }));
        };
    }
    
    return (
        <>
            <section className="w-full max-w-md mx-auto pt-10 px-4">
                <div className="flex flex-col gap-2 py-4">
                    <p className="text-sm font-medium">Enter token price</p>
                    <input type="number" 
                     value={state.tokenPrice}
                     onChange={(e) => handleChange("tokenPrice", e.target.value)} 
                     className="w-full p-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                </div>
                <div className="flex flex-col gap-2 py-4">
                    <p className="text-sm font-medium">Enter the total supply</p>
                    <input type="number"
                     value={state.totalSupply}
                     onChange={(e) => handleChange("totalSupply", e.target.value)} 
                     className="w-full p-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                </div>
                <div>
                    <button onClick={calculateTokenFdv}
                     className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">calculate</button>
                </div>
                <div className="mt-4">
                    {state.fdv !== null && (
                    <p className="text-lg font-semibold text-center">
                       Token fdv: ${state.fdv.toLocaleString()}
                    </p>
                    )}
                </div>
           </section>
        </>
    )
}