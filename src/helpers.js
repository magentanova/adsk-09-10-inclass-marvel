export const parseMarvelResponse = jsonResponse => {
    let parsed = {}
    const characterList = jsonResponse.data.results
    delete jsonResponse.data.results 
    parsed = {
        characterList,
        metadata: {
            ...jsonResponse.data,
            copyright: jsonResponse.copyright
        }
    }
    return parsed
}