'use server'

const getMask = (mask: string) => {
    return mask.replaceAll(' ', '+').replaceAll('?','%3F').replaceAll('*','%2A').replaceAll('#','%23').replaceAll('@','%40').replaceAll(',','%2C').replaceAll('/','%2F').replaceAll('-','%2D').replaceAll('+','%2B')
}

export async function WordsByMask(mask: string){
    try{
        const res = await fetch(`https://api.datamuse.com/sug?s=${getMask(mask)}&max=999`)
        const data = await res.json()

        return data
    }catch (err){
        console.error(err);
        return []
    }
}

export async function GetWord(word: string){
    try{
        word.replaceAll('-', ' ')
        const res = await fetch(`https://api.datamuse.com/words?sp=${getMask(word)}&md=dpsr&max=1&ipa=1`)
        const data = await res.json()

        return data
    }catch (err){
        console.error(err);
        return []
    }
}

export async function WordsByMeaning(meaning: string){
    try{
        const res = await fetch(`https://api.datamuse.com/words?ml=${meaning}&max=999`)
        const data = await res.json()

        return data
    }catch (err){
        console.error(err);
        return []
    }
}