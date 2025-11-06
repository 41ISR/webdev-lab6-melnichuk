'use client'

import { useRouter } from 'next/navigation'
import './components.scss'

export default function WordCard({word, score}:{word: string, score: number}){
    const router = useRouter()
    const slug = word.replaceAll(' ', '-')
    return (
        <div onClick={() => router.push(`/${slug}`)} className="word-card">
            <h5 className='word-card__word'>{word}</h5>
            <span className="word-card__score">{score}</span>
        </div>
    )
}