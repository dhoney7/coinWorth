import { useState } from "react";

export default function Calculation() {
    const [state, setState] = useState({
        airdropAllocation: null,
        circulatingSupply: null,
        selectedMarketCap: null,
        selectedMarketCap: null,
        airdropValue: null
    })

    const handleChange = (key, value) => {
        setState((prevState) => ({
            ...prevState,
            [key]: parseFloat(value) || 0, // Ensure a valid number or default to 0
        }));
    };

    function handleMarketCap(value) {
        let marketCap = 0;
        if(value === "100m") {
            marketCap = 100000000;
        } else if(value === "200m") {
            marketCap = 200000000;
        } else if(value === "500m") {
            marketCap = 500000000;
        } else if(value === "1b") {
            marketCap = 1000000000;
        }
        
        setState((prevState) => ({
            ...prevState,
            selectedMarketCap: marketCap,
        }));
    }

    function calculateAirdropValue() {
        const {airdropAllocation, circulatingSupply, selectedMarketCap} = state;
        
        if(isNaN(airdropAllocation) || airdropAllocation === null || airdropAllocation==="") {
            alert("Please enter a valid airdrop allocation");
        } else if(isNaN(circulatingSupply) || circulatingSupply === null || circulatingSupply==="") {
            alert("Please enter a valid circulating supply");
        } else if (isNaN(selectedMarketCap) || selectedMarketCap === null || selectedMarketCap==="") {
            alert("Please enter a valid marketcap");
        } else {
            const airdropValue = (airdropAllocation / circulatingSupply) * selectedMarketCap;
            setState((prevState) => ({
                ...prevState,
                airdropValue
            }));
        }
    }

    return (
        <>
            <section className="w-full max-w-4xl mx-auto pt-10 px-4">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <p className="text-sm md:text-base font-medium">Enter your airdrop allocation</p>
                    <input type="number" 
                     value={state.airdropAllocation} 
                     onChange={(e) => handleChange ("airdropAllocation", e.target.value) }               
                     className="w-full md:w-1/2 p-2 rounded-md border border-gray-300 text-black" ></input>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <p className="text-sm md:text-base font-medium">Enter the circulating supply</p>
                    <input type="number" 
                     value={state.circulatingSupply}
                     onChange={(e) => handleChange("circulatingSupply", e.target.value)}
                     className="w-full md:w-1/2 p-2 rounded-md border border-gray-300 text-black"></input>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <p className="text-sm md:text-base font-medium">Enter your expected marketcap</p>
                    <input type="number" 
                     value={state.selectedMarketCap} 
                     onChange={(e) => handleChange("selectedMarketCap", e.target.value)} 
                     className="w-full md:w-1/2 p-2 rounded-md border border-gray-300 text-black"></input>
                </div>
                <div className="flex flex-wrap gap-4">
                    <button onClick={() => handleMarketCap("100m")}
                        className="w-full md:w-1/2 mx-auto px-4 py-2 text-white rounded-md hover:bg-blue-600">At $100 million</button>
                    <button onClick={() => handleMarketCap("200m")}
                         className="w-full md:w-1/2 mx-auto px-4 py-2 text-white rounded-md hover:bg-blue-600">At $200 million</button>
                    <button onClick={() => handleMarketCap("500m")}
                        className="w-full md:w-1/2 mx-auto px-4 py-2 text-white rounded-md hover:bg-blue-600">At $500 million</button>
                    <button onClick={() => handleMarketCap("1b")}
                       className="w-full md:w-1/2 mx-auto px-4 py-2 text-white rounded-md hover:bg-blue-600">At $1 Billion</button>
                </div>
                <div className="my-4">
                    <button onClick={calculateAirdropValue}
                    className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Calculate</button>
                </div>
                <div className="mt-4">
                    {state.airdropValue !== null && (
                        <p className="text-lg font-semibold text-center">
                            Your airdrop value: ${state.airdropValue.toLocaleString()}
                        </p>
                    )}
                </div>
            </div>
            </section>
        </>
    )
}