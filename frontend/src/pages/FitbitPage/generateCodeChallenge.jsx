export async function generateCodeChallenge(codeVerifier) {
    let encoder = new TextEncoder();
    let data = encoder.encode(codeVerifier);
    let digest = await crypto.subtle.digest('SHA-256',data);
    let base64 = btoa(String.fromCharCode(...new Uint8Array(digest)));
    base64 = base64.replaceAll("+","-").replaceAll("/","_").replaceAll("=","");
    return base64;
   }