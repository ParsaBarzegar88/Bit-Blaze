export const postRefreshToken = async (token:string) => {

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${baseURL}/api/auth/refresh` , {
        method: "POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            token
        })
    })
    if(!res.ok){
        throw new Error('Failed To Refresh Token')
    }
    return res.json()
}