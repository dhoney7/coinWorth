export default function Header({ changePage }) {
    return (
            <header className="p-4 w-full shadow-md">
                <nav className="flex flex-wrap items-center justify-between">
                    <span className="text-2xl font-bold flex items-center">coinWorth <span class="material-symbols-outlined">token</span></span>
                        <ul className="flex flex-col md:flex-row md:space-x-6 w-full md:w-auto mt-4 md:mt-0">
                            <li><button onClick={() => {changePage("adValue")}} 
                                 className="w-full font-bold md:w-auto px-4 py-2 text-left md:text-center rounded md:rounded-none hover:bg-blue-500 hover:text-white transition">PREDICT YOUR AIRDROP VALUE</button></li>
                            <li><button onClick={() => {changePage("tokenMcap")}} 
                                className="w-full font-bold md:w-auto px-4 py-2 text-left md:text-center rounded md:rounded-none hover:bg-blue-500 hover:text-white transition">CALCULATE TOKEN MARKETCAP</button></li>
                            <li><button onClick={() => {changePage("tokenFdv")}}  
                                className="w-full font-bold md:w-auto px-4 py-2 text-left md:text-center rounded md:rounded-none hover:bg-blue-500 hover:text-white transition">FDV OF A TOKEN</button></li>
                        </ul>
                </nav>
            </header>
    )
}