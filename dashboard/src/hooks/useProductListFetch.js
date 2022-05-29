import { useEffect, useState } from "react";

const useProductListFetch = () => {
   
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {

        fetch('http://localhost:3030/api/allproducts')
        .then(res => res.json())
        .then(data => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch(err => setIsLoading(false))

    },[]);

    return [products , isLoading];

}


export default useProductListFetch;