import axios from 'axios';

export function fetchImages({count}) {
    return axios.get('/images', {
        params: {
            count
        }
    })
}

export const getAllProducts = async (currentPage=1, perPage=12, searchTerm="", priceRange, categoryState, sizeState, colorState, brandState) => {    
    try {

        let link = `/api/v1/products?page=${currentPage}&perPage=${perPage}`;
        
        if (searchTerm!=="" && searchTerm!==null) {
            link += `&keyword=${searchTerm}`;
        } 
        if (priceRange!==undefined&&priceRange!=="" && priceRange!==null) {
            if (priceRange.min!=="" && priceRange.min!==null&&priceRange.max!=="" && priceRange.max!==null)
                link += `&price[gte]=${priceRange.min}&price[lte]=${priceRange.max}`;
        }
        if (categoryState) {
            link += `&category=${categoryState}`;
        }
        if (sizeState) {
            link += `&size[in]=${new Array(sizeState)}`;
        }
        if (colorState) {
            link += `&color[in]=${new Array(colorState.map((c) => c.substring(1)))}`;
        }
        if (brandState) {
            link += `&brand[in]=${new Array(brandState)}`;
        }

        // console.log(`************************************Link: ${link}`)


        let { data } = await axios.get(link);     
        
        // console.log(`************************************Data: ${JSON.stringify(data)}`)
        
        return data;

    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

export const getProductDetails = async (id) => {
    try {
        if (id) {
            const { data } = await axios.get(`/api/v1/product/${id}`);

            console.log(`id: ${id}`)

            return data;
        }       

    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

export const getUniqueCategories = async () => {
    try {

        const { data } = await axios.get(`/api/v1/getUniqueCategories`);

        return data;

    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

export const getUniqueSizes = async () => {
    try {

        const { data } = await axios.get(`/api/v1/getUniqueSizes`);

        return data;

    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

export const getUniqueColors = async () => {
    try {

        const { data } = await axios.get(`/api/v1/getUniqueColors`);

        return data;

    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

export const getUniqueBrands = async () => {
    try {

        const { data } = await axios.get(`/api/v1/getUniqueBrands`);

        return data;

    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

export const getPriceRange = async () => {
    try {

        const { data } = await axios.get(`/api/v1/getPriceRange`);

        return data;

    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

export const userLogin = async (email, password) => {
    try {
        if (email && password) {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const { data } = await axios.post(`/api/v1/login`, {email, password}, config);

            // console.log(`email: ${email}`)
            // console.log(`password: ${password}`)

            return data;
        }

    } catch (error) {
        // console.log(`Error: ${error}`);
    }
};

export const userGoogleLogin = async (userData) => {
    try {
        if (userData) {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            // console.log(`userData: ${JSON.stringify(userData)}`)

            const { data } = await axios.post(`/api/v1/googleLogin`, userData, config);

            // console.log(`password: ${password}`)

            return data;
        }

    } catch (error) {
        // console.log(`Error: ${error}`);
    }
};

export const userRegister = async (userData) => {
    try {
        if (userData) {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            // console.log(`userData: ${JSON.stringify(userData)}`)

            const { data } = await axios.post(`/api/v1/register`, userData, config);

            // console.log(`password: ${password}`)

            return data;
        }

    } catch (error) {
        // console.log(`Error: ${error}`);
    }
};

export const loadUser = async () => {
    try {

        // console.log(`userData: ${JSON.stringify(userData)}`)

        const { data } = await axios.get(`/api/v1/me`);

        console.log(`data: ${JSON.stringify(data)}`)

        return data;

    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

export const userLogout = async () => {
    try {

        const { data } = await axios.get(`/api/v1/logout`);

        return data;

    } catch (error) {
        console.log(`Error: ${error}`)
    }
};