export const adduserlist = async(user_id, addInfo) => {
    return fetch(`http://localhost:3000/add/${user_id}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addInfo)
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Failed to add list');
        }
        return response.json();
    });
}

export const getuserlist = async(user_id) => {
    return fetch(`http://localhost:3000/list/${user_id}`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Failed to get List');
        }
        return response.json();
    });
}

export const deletelist = async(user_id, deleteInfo) => {
    return fetch(`http://localhost:3000/delete/${user_id}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(deleteInfo)
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Failed to delete List');
        }
        return response.text()
    })
} 