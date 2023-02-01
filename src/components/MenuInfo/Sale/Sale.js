import React, { useEffect, useState } from 'react';
import Book from "../../Layout/Book/Book";

const Sale = props => {
    const [books, setBooks] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchNewest = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/api/items/sale`, {
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
        fetchNewest();
    }, []);

    return <>
        <h1 className="headerStyle">Promocje</h1>
        {isLoading && <div className="loader">Loading...</div>}
        {!isLoading && books && <Book data={books} addBook={props.addBook} />}
    </>
};

export default Sale;