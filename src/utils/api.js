import axios from "axios"


export const getProducts = async () => {
    const mylink = `https://fakestoreapi.com/products`;
    const result = await axios.get(mylink);
    if (result.status == 200) {
        return result;
    }
    return result;
}
export const getProductsById = async (id) => {
    const mylink = `https://fakestoreapi.com/products/${id}`;
    const result = await axios.get(mylink);
    if (result.status == 200) {
        return result;
    }
    return result;
}
export const getCategories = async () => {
    const mylink = `https://fakestoreapi.com/products/categories`;
    const result = await axios.get(mylink);
    if (result.status == 200) {
        return result;
    }
    return result;
}
export const getCategory = async (cat, limit) => {
    const mylink = `https://fakestoreapi.com/products/category/${cat}?limit=${limit}`;
    const result = await axios.get(mylink);
    if (result.status == 200) {
        return result;
    }
    return result;
}