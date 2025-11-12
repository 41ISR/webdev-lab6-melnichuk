import { GetWord } from '@/app/_lib/fetchWord';
import { Metadata, ResolvingMetadata } from 'next';
import './w.scss'

export async function generateMetadata({ params }: { params: Promise<{ word: string }> }, parent: ResolvingMetadata): Promise<Metadata> {
    const { word } = await params;
    const content = await GetWord(word);

    console.log(content);

    const wrd = content ? content[0].word : 'Загрузка...';

    return {
        title: wrd,
    };
}

export default async function Page({ params }: { params: Promise<{ word: string }> }){
    const { word } = await params;
    const data = await GetWord(word)
    const el = data[0]

    const setType = (type: string) => {
        switch (type) {
            case 'n':
                return 'Noun'
            case 'v':
                return 'Verb'
            case 'adj':
                return 'Adjective'
            default:
                break;
        }
    }

    return (
        <>
        <h2>{el.word} <span className='pron'>[{el.tags[el.tags.length-1].slice(9)}]</span></h2>
        <div className="defs">
            {el.defs.sort((a:any,b:any) => {
                if(a.split('\t')[0] == b.split('\t')[0]) return 0
                else if(a.split('\t')[0] > b.split('\t')[0]) return 1
                else return -1
            }).map((def: string, index: string) => (
                <span className="def" key={index}><span className={'tit'}>{setType(def.split('\t')[0])}:</span> {def.split('\t')[1]} </span>
            ))}
        </div>
        </>
    )
}