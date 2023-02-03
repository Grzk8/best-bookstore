import React, { useState, useEffect } from 'react';
import Book from "../../Layout/Book/Book";

const Category = props => {
    const [books, setBooks] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCategory = async () => {
            const category = props.category;
            setIsLoading(true);
            try {
                const response = await fetch(`https://bestbookstore-backend.onrender.com/api/items/category/${category}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const responseData = await response.json();
                setBooks(responseData.category);
                setIsLoading(false);
            } catch {
                (err) => console.log(err)
            }
            setIsLoading(false);
        }
        fetchCategory();
    }, []);

    return <>
        <h1 className="headerStyle">{props.category}</h1>
        {isLoading && <div className="loader">Loading...</div>}
        {!isLoading && books && <Book data={books} addBook={props.addBook} />}
    </>
};

export default Category;