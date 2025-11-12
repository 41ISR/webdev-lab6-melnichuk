'use client'

import { useState } from 'react'
import './wbm.scss'
import { WordsByMask } from '@/app/_lib/fetchWord'
import WordCard from '@/app/_components/WordCard'

export default function Page(){
    const [ search, setSearch ] = useState('')
    const [ found, setFound ] = useState<{word: string, score: number}[]>([])
    const [error, setError ] = useState(undefined)

    const handleSearch = async (e: any) => {
        e.preventDefault()
        setFound([])
        setError(undefined)
        try{
            const data = await WordsByMask(search)
            setFound(data)
        }catch (err: any){
            setError(err.message)
            console.error(err);
        }
    }

    return (
        <>
        <header>
            <h1>Search by Mask</h1>
            <div className="page-intro">
                Find words matching a specific pattern.
                <ul className='help'>
                    <li className='guide'>The question mark (?) matches exactly one letter. <br /> 
                        <span className="example"> Example: the query <span className='query'>c?ter</span> finds words like "cater", "cuter".</span></li>
                    <li className='guide'>The asterisk (*) matches any number of letters. <br />
                        <span className="example">Example: the query <span className='query'>c*t</span> finds words like "character", "center".</span></li>
                    <li className='guide'>The number-sign (#) matches any English consonant. <br />
                        <span className="example">Example: the query <span className='query'>tra#t</span> finds the word "tract" but not "trait".</span></li>
                    <li className='guide'>The at-sign (@) matches any English vowel (including "y").<br /> 
                        <span className="example">Example: the query <span className='query'>abo@t</span> finds the word "about" but not "abort".</span></li>
                    <li className='guide'>The comma (,) lets you combine multiple patterns into one.<br /> 
                        <span className="example">Example: the query <span className='query'>?????,*y*</span> finds 5-letter words that contain a "y" somewhere, such as "happy" and "rhyme".</span></li>
                    <li className='guide'>Use double-slashes (//) before a group of letters to unscramble them (that is, find anagrams.)<br /> 
                        <span className="example">Example: the query <span className='query'>//soulbeat</span> will find "absolute" and "bales out"</span></li>
                    <li className='guide'>A minus sign (-) followed by some letters at the end of a pattern means "exclude these letters". <br />
                        <span className="example">Example: the query <span className='query'>sp???-ei</span> finds 5-letter words that start with "sp" but do not contain an "e" or an "i", such as "spoon" and "spray".</span></li>
                    <li className='guide'>A plus sign (+) followed by some letters at the end of a pattern means "restrict to these letters".<br /> 
                        <span className="example">Example: the query <span className='query'>*+ban</span> finds "banana".</span></li>
                </ul>
            </div>
        </header>
        <section className="search-section">
            <form className="search-form" onSubmit={(e) => handleSearch(e)}>
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Enter a word mask (e.g., c?ter, w*rd)"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="search-button">Find</button>
            </form>
            
        </section>

        <section className="results-container">
            {!error ? ( 
                found.length == 0 ? (<>No results</>) : (
                    found.map((el:any,index:number) => (
                        <WordCard key={index} {...el} />
                    ))
                )
            ) : (
                <div className="error">{error}</div>
            )}
        </section>
        </>
    )
}