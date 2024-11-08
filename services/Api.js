export const fetchData = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
            accept: 'application/json',
            'User-Agent': 'School project for mobile programming.'
            }
        })
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("ERROR with fetch response", response.status);
            return false;
        }
    } catch (error) {
        console.log("ERROR with fetchData", error);
    }
}