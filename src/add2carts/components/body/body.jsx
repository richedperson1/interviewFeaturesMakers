
import faker from 'faker';
import { useEffect, useState } from 'react';

const CardsDisplay = () => {
    const [productDetails, setProductDetails] = useState([])
    async function fetchingImg(url) {
        const apiDate = await fetch(url)
        const apiJson = await apiDate.json()
        return apiJson.links.download
    }

    // console.log(url);
    const generateProduct = async (url) => {
        const productName = faker.commerce.productName();
        const productPrice = faker.commerce.price();
        const productDescription = faker.lorem.sentence();
        const productImage = await fetchingImg(url);

        return {
            name: productName,
            price: productPrice,
            description: productDescription,
            image: productImage,
        };
    };

    const width = 300
    const height = 200
    let accessKey = "ZEIaixZ2N8VZzuLZz390Au5M1WODU9kO9GFqzx9b9nk"
    let url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=nature&orientation=squarish&width=${width}&height=${height}`

    useEffect(() => {

        const product = generateProduct(url);

        product.then((val) => {
            setProductDetails(val)
        }).catch(() => {
            setProductDetails([])

        })
    }, ['none'])

    console.log("product : ", productDetails);
    return (
        <div className="product">
            {productDetails && (<>
                <img src={productDetails.image} alt={productDetails.name} />
                <h2>{productDetails.name}</h2>
                <p>{productDetails.description}</p>
                <p>Price: ${productDetails.price}</p>
            </>
            )
            }
        </div>
    );
}

export default CardsDisplay