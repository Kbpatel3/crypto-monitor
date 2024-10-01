import { useState, useEffect, React } from "react";
import axios from "axios";

function LivePrice() {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the BTC price on component mount
        fetchBTCPrice();

        // Poll the API every 5 seconds
        const interval = setInterval(() => {
            fetchBTCPrice();
        }, 5000);

        // Cleanup the interval on component unmount
        return () => {
            clearInterval(interval);
        }
    }, []);

    const fetchBTCPrice = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/coinbase/current-price");
            setPrice(response.data.price);
            setLoading(false);
        } catch (error) {
            setError("Error fetching BTC price. Please try again later.");
            setLoading(false);
        }
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Current Bitcoin Price</h1>
            <div className="text-2xl">
                {price ? formatPrice(price) : 'Price not available'}
            </div>
        </div>
    );
}

export default LivePrice;