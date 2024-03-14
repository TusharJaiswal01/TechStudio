const login = async (email, password) => {
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;
}

const register = async (name, email, password) => {
    const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;
}