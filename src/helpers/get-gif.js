
export const getGifs = async(category) => {
    const limit = 10
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kVChQ5RLKKudVP3muGQyrTSQx34yxBQJ&q=${category}&limit=${limit}`
    const response = await fetch(url)
    const { data } = await response.json()
    const gifs =  data.map(  img  => ({
        id : img.id,
        title: img.title,
        url : img.images.downsized_medium.url


    }))
    
    return gifs

}