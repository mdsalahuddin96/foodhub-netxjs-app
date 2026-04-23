export const getProducts=async(category="",search="")=>{
    const res=await fetch( `https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`,{cache:'no-store'})
    if(!res.ok){
        throw new Error('Failed to fetch')
    }
    return res.json();
}