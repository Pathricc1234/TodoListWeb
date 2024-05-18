export const signupUser = async (signupInfo) => {
    return fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupInfo)
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Failed to create account');
        }
        return response.json();
    });
}

export const checkUsers = async (loginInfo) => {
    return fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo)
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Failed to login');
        }
        return response.json();
    });
};

export const getUserDetail = async (user_id) => {
    return fetch(`http://localhost:3000/menu/${user_id}`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Failed to get user details');
        }
        return response.json();
    });
}
