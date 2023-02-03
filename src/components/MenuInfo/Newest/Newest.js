import React, { useEffect, useState } from 'react';
import Book from "../../Layout/Book/Book";

const Newest = props => {
    const [books, setBooks] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchNewest = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://bestbookstore-backend.onrender.com/api/items/newest`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const responseData = await response.json();
                setBooks(responseData.newest);
                setIsLoading(false);
            } catch {
                (err) => console.log(err)
            }
            setIsLoading(false);
        }
        fetchNewest();
    }, []);

    return <>
        <h1 className="headerStyle">nowości</h1>
        {isLoading && <div className="loader">Loading...</div>}
        {!isLoading && books && <Book data={books} addBook={props.addBook} newBook={true} />}
    </>
};

export default Newest;