const baseUrl = 'http://localhost:3001';

const getToken = ()=> localStorage.getItem('jwt');

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


export const signUp = ({ name, avatar, email, password })=>{
    return fetch(`${baseUrl}/signup`,{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ name, avatar, email, password })
    }).then(handleServerResponce);
}

export const signin = ({ email, password })=>{
    return fetch(`${baseUrl}/signin`,{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password })
    }).then(handleServerResponce);
}


export const addItem = ({name, weather, imageUrl}) =>{
    const token = getToken();
    return fetch(`${baseUrl}/items`,{
        method: "POST",
        headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            name, 
            weather,
            imageUrl
        })
    }).then(handleServerResponce);
}

export const removeItem = (id)=>{
    const token = getToken();
    return fetch(`${baseUrl}/items/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
        }
    }).then(handleServerResponce);
};

export const getCurrentUser = ()=>{
    const token = getToken();
    return fetch(`${baseUrl}/users/me`,{
        headers: {
            "Content-type": "application/json",
            "authorization": `Bearer ${token}`,
        }
    }).then(handleServerResponce);
}

export const updateCurrentUser = ({name, avatar})=>{
    const token = getToken();
    return fetch(`${baseUrl}/users/me`,{
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
            "authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            name, 
            avatar
        })
    }).then(handleServerResponce);
}

export const addCardLike = ({ id }) =>
{
    const token = getToken();
    return fetch(`${baseUrl}/items/${id}/likes`,{
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            "authorization": `Bearer ${token}`,
        }
    }).then(handleServerResponce);
}

export const removeCardLike = ({ id }) =>
    {
        const token = getToken();
        return fetch(`${baseUrl}/items/${id}/likes`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`,
            }
        }).then(handleServerResponce);
    }