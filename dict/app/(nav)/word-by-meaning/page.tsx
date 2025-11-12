'use client'

import { useState } from 'react'
import './wbm.scss'
import { WordsByMeaning } from '@/app/_lib/fetchWord'
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
            const data = await WordsByMeaning(search)
            console.log(data);
            
            setFound(data)
        }catch (err: any){
            setError(err.message)
            console.error(err);
        }
    }

    return (
        <>
        <header>
            <h1>Search by Meaning</h1>
            <div className="page-intro">
                Find words by their meaning.
            </div>
        </header>
        <section className="search-section">
            <form className="search-form" onSubmit={(e) => handleSearch(e)}>
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Enter a description"
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