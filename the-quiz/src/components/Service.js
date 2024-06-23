// Libraries

// Variables
const baseURL = "http://localhost:8000/api";


// NOTE: REPLACE JSON PLACEHOLDERS WITH ACTUAL ONCE API ROUTES HAVE BEEN COMPLETED

const Service = {
// Login

// Categories
    async getAllCategories() {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
            return res.json();
        }catch (error) {
            console.error(error);
            return error;
        }
    }

// Tests

// Inquiries

};


export default Service;