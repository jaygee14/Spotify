

export default async function find(accessToken, search) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=remaster%2520artist%3A${search}&type=album%2Cartist&limit=5`, {
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
    });
    const data = await response.json()
    return data
}

