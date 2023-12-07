
export default async function getToken() {
  const client_id = 'd10e62880afc4a4c911f765f3d5481d4'; 
  const client_secret = 'e94f1838b98a47138fa7bf8384bafe5e';
  
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
  });

  return await response.json();
}

async function getTrackInfo(access_token) {
  const response = await fetch("https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}

async function call() {
        const token = await getToken()
        const access = await token.access_token;
        console.log(access)
        return access;
}

call()
    