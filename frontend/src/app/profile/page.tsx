'use client';
import React, { useEffect } from 'react';
import axios from 'axios';

const Page = () => {
    const fetch = async () => {
        try {
            const x = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/profile`, {
                withCredentials: true
            });
            console.log(x.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetch(); // Call the fetch function when the component mounts
    }, []);

    return (
        <div>
            {/* Add your component's content here */}
        </div>
    );
};

export default Page;
