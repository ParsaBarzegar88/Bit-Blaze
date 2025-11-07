'use server'
export const logout = async (token:string) =>{
    const baseURL = process.env.API_BASE_URL
    const result = await fetch(`${baseURL}/api/auth/logout` , {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
        }
    })
    if(!result.ok){
        throw new Error('Failed To Logout')
    }
    return result.json()
}