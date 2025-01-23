import { useState } from "react";

export default function TokenMcap() {
    const [state, setState] = useState({
        tokenPrice: null,
        circulatingSupply: null,
        marketCap: null,
    });

    const handleChange = (key, value) => {
        setState((prevState) => ({
            ...prevState,
            [key]: parseFloat(value) || 0
        }));
    };

    const calculateMarketCap = () => {
        const { tokenPrice, circulatingSupply } = state;
    
        if (isNaN(tokenPrice) || tokenPrice === null || tokenPrice === "") {
            alert("Please enter a valid token price");
        } else if (isNaN(circulatingSupply) || circulatingSupply === null || circulatingSupply === "") {
            alert("Please enter a valid circulating supply");
        } else {
            const marketCap = tokenPrice * circulatingSupply;
            setState((prevState) => ({
                ...prevState,
                marketCap,
            }));
        }
    };

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
                    <p className="text-sm font-medium">Enter the circulating supply</p>
                    <input type="number" 
                     value={state.circulatingSupply}
                     onChange={(e) => handleChange("circulatingSupply", e.target.value)}
                     className="w-full p-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                </div>
                <div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={calculateMarketCap}> calculate </button>
                </div>
                <div className="mt-4">
                    {state.marketCap !== null && (
                        <p className="text-lg font-semibold">
                            Market Cap: ${state.marketCap.toLocaleString()}
                        </p>
                    )}
                </div>
           </section>
        </>
    )
}