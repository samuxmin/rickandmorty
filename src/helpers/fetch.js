
export const fetchCardInfo = async (cardType, page) => {
    let chars;
    try {
        chars = await fetch(`https://rickandmortyapi.com/api/${cardType}?page=${page}`).then(resp=>resp.json()).then(data=>data)
    } catch (error) {
        console.log(error)
    }
    return chars
}
