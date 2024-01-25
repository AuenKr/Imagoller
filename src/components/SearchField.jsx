import { useState } from 'react';
import { search } from './utities/svgs';

export default function SearchField({ setItem }) {
    const [input, setInput] = useState("");
    const updateInput = (evt) => {
        setInput(evt.target.value);
    }
    const searchItem = (evt) => {
        evt.preventDefault();
        setItem(input || "random");
    }
    return (
        <div className='sticky top-0 z-1'>
            <form id='searchBar' name='searchBar' className='flex justify-center'>
                <input value={input} onChange={updateInput} className='border-2 border-black rounded-lg m-1 pl-2 hover:bg-slate-300 shadow-md active:shadow-slate-500 md:w-4/5 md:max-w-[900px]' />
                <button onClick={searchItem} className='flex items-center border-2 border-gray-700 rounded-lg m-1 p-1 bg-slate-100 hover:bg-slate-300 shadow-md active:shadow-slate-500'>
                    Search {search}
                </button>
            </form>
        </div>
    )
}