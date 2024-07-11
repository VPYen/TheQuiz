// Libraries


// Variables
const baseURL = "http://localhost:8000/api";
// ***NOTE: Modify baseURL to proper URL for production


const Service = {
// Login

// Categories
    async getOneCategory(categoryID) {
        try {
            const res = await fetch(`${baseURL}/category/${categoryID}`, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

    async getAllCategories() {
        try {
            const res = await fetch(`${baseURL}/categories/all`, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

    async newCategory(body) {
        try {
            const res = await fetch(`${baseURL}/categories/new`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(body),
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

    async editCategory(categoryID, body) {
        try {
            const res = await fetch(`${baseURL}/categories/edit/${categoryID}`, {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(body),
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

    async deleteCategory(categoryID) {
        try {
            const res = await fetch(`${baseURL}/categories/del/${categoryID}`, {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

// Tests
    async getOneTest(testID) {
        try {
            const res = await fetch(`${baseURL}/test/${testID}`, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

    async newTest(categoryID, body) {
        try {
            const res = await fetch(`${baseURL}/test/new/${categoryID}`, {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(body),
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

    async editTest(testID, body) {
        try {
            const res = await fetch(`${baseURL}/test/edit/${testID}`, {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(body),
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

    async deleteTest(testID) {
        try {
            const res = await fetch(`${baseURL}/del/${testID}`, {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

// Inquiries
    async getOneInquiry(inquiryID) {
        try {
            const res = await fetch(`${baseURL}/inquiry/${inquiryID}`, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

    async newInquiry(testID, body) {
        try {
            const res = await fetch(`${baseURL}/inquiry/new/${testID}`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(body),
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

    async editInquiry(inquiryID, body) {
        try {
            const res = await fetch(`${baseURL}/test/edit/${inquiryID}`, {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(body),
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    },

    async deleteInquiry(inquiryID) {
        try {
            const res = await fetch(`${baseURL}/inquiry/del/${inquiryID}`, {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                redirect: "error",
                referrerPolicy: "no-referrer",
            });
            return res.json();
        }catch(error) {
            console.error(error);
            return error;
        }
    }

};


export default Service;