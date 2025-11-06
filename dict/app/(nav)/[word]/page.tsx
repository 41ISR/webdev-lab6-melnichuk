import { GetWord } from '@/app/_lib/fetchWord';
import './w.scss'

export async function generateMetadata({ params }: { params: Promise<{ word: string }> }) {
    const { word } = await params;
    const content = await GetWord(word);

    console.log(content);

    // Берём заголовок первой новости, если есть
    const wrd = content ? content.word : 'Загрузка...';

    return {
        title: wrd,
    };
}

export default async function Page({ params }: { params: Promise<{ word: string }> }){
    const { word } = await params;
    const data = await GetWord(word)
    const el = data[0]

    return (
        <>
        <h2>{el.word}</h2>
        <span className='pron'>{el.tags[el.tags.length-1].slice(9)}</span>
        </>
    )
}