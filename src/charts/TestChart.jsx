import {Bar} from 'react-chartjs-2';
import productService from '../services/productService.js';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {

    const [product, setProduct] = useState([]);
  
    useEffect(() => {
    productService.getProducts().then((res) => setProduct(res))
    }, []);

    return (
        <>
        <div className='App'>
            <Bar
                data={{
                    labels: product.map((data) => data.title),
                    datasets: [{
                        label: "Number of orders per Item",
                        data: product.map((data) => data.purchasedQuantity),
                        borderRadius: 5,
                        backgroundColor: '#1976d2',
                    }],
                }} />
        </div>
        </>
    );
}