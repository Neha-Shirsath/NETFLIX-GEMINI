import { useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";

const GeminiSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang)

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12 rounded-md">
                <input 
                className="p-2 m-3 col-span-9" type="text" 
                placeholder={lang[langKey].geminiSearchPlaceholder}/>

                <button className="px-2 bg-red-700 p-1 m-3 font-bold text-white rounded-md col-span-3 hover:opacity-80">
                    {lang[langKey].Search}
                </button>

            </form>
        </div>
    )
}

export default GeminiSearchBar;