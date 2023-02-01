import React, { useEffect, useState } from 'react';
import Book from '../../Layout/Book/Book';


const Search = props => {
    const [books, setBooks] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
    const search = props.searchingValue;
    const submited = props.isSubmmited;
    const setSubmited = props.submitSearchForm;

    console.log(search);


    useEffect(() => {
        if (!submited) {
            const fetchSearch = async () => {
                setIsLoading(true);
                try {
                    const response = await fetch(`http://localhost:8000/api/items/search`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ searching: search })
                    })
                    const responseData = await response.json();
                    setBooks(responseData.search);
                    //props.unSubmitSearchForm;
                    setIsLoading(false);
                } catch {
                    (err) => console.log(err)
                }
                setIsLoading(false);
               
            }
            fetchSearch();
        }
    }, [search, submited]);



    return <>
        <h1>szukane</h1>
        {isLoading && <div className="loader">Loading...</div>}
        {!isLoading && books && <Book data={books} addBook={props.addBook} />}
    </>
};

export default Search;