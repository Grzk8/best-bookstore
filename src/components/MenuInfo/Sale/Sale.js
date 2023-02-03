import React, { useEffect, useState } from 'react';
import Book from "../../Layout/Book/Book";

const Sale = props => {
    const [books, setBooks] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchSale = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://bestbookstore-backend.onrender.com/api/items/sale`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const responseData = await response.json();
                setBooks(responseData.salePrice);
                setIsLoading(false);
            } catch {
                (err) => console.log(err)
            }
            setIsLoading(false);
        }
        fetchSale();
    }, []);

    return <>
        <h1 className="headerStyle">promocje</h1>
        {isLoading && <div className="loader">Loading...</div>}
        {!isLoading && books && <Book data={books} addBook={props.addBook} sale={true} />}
    </>
};

export default Sale;