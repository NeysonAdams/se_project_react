const baseUrl = 'http://localhost:3001';

export const handleServerResponce = (res) =>{
    return res.ok? res.json() : Promise.reject(`Error: ${res.status}`);
}

export const getItems = ()=>{
    return fetch(`${baseUrl}/items`,{
        headers: {
            "Content-type": "application/json",
        }
    }).then(handleServerResponce);
};

export const addItem = ({name, weather, imageUrl}) =>{
    return fetch(`${baseUrl}/items`,{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name, 
            weather,
            imageUrl
        })
    }).then(handleServerResponce);
}

export const removeItem = (id)=>{
    return fetch(`${baseUrl}/items/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        }
    }).then(handleServerResponce);
};