import axios from "axios";

const baseUrl = "http://localhost:3001/products";
let token = null;

function setToken(newToken) {
    token = `Bearer ${newToken}`;
}

async function getProducts() {
    const config = {
        headers: { Authorization: token },
    };

    const res = await axios.get(baseUrl, config);

    return res.data;
};

async function productPurchase() {
    const config = {
        headers: { Authorization: token },
    };

    const res = await axios.get(`${baseUrl}/purchase`, config);

    return res.data;
};

async function getRevenue() {
    const config = {
        headers: { Authorization: token },
    };

    const res = await axios.get(`${baseUrl}/revenue`, config);

    return res.data;
};

async function getProfit() {
    const config = {
        headers: { Authorization: token },
    };

    const res = await axios.get(`${baseUrl}/profit`, config);

    return res.data;
};

async function getExpenses() {
    const config = {
        headers: { Authorization: token },
    };

    const res = await axios.get(`${baseUrl}/expenses`, config);

    return res.data;
};

async function createProduct() {
    const config = {
        headers: { Authorization: token },
    };

    const res = await axios.post(baseUrl, config);

    return res.data;
};




export default {
    setToken,
    getProducts,
    productPurchase,
    getRevenue,
    getProfit,
    getExpenses,
    createProduct,
};