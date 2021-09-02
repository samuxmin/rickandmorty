
export const fetchCardInfo = async (cardType, page) => {
    let chars;
    try {
        chars = await fetch(`https://rickandmortyapi.com/api/${cardType}?page=${page}`).then(resp=>resp.json()).then(data=>data)
    } catch (error) {
        console.log(error)
    }
    return chars
}

const getCharacterFromUrl = async (charUrl) => {
    const char = await fetch(charUrl).then(resp=>resp.json()).then(data=>data)
    return await char
}

export const fetchIndividualCharacters = async ( type , id) => {
    let chars = []
    let title = ''
    try {
        const data = await fetch(`https://rickandmortyapi.com/api/${type}/${id}`).then(resp=>resp.json()).then(data=>data)
        if(type === 'episode'){
            for(let i = 0 ; i < data.characters.length; i++){
                chars[i] = await getCharacterFromUrl(data.characters[i])
            }
            title = data.episode
        }
        else if(type==='location'){
            for(let i = 0 ; i < data.residents.length; i++){
                chars[i] = await getCharacterFromUrl(data.residents[i])
            }
            title = data.name
        }
        return [chars, title]
    } catch (error) {
        console.log(error)
    }
}