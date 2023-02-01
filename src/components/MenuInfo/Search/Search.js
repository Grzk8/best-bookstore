import React, { useEffect, useState } from 'react';
import Book from '../../Layout/Book/Book';


const Search = props => {
     const [books, setBooks] = useState();
     const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (props.isSubmmited) {
            const fetchSearch = async () => {
                setIsLoading(true);
                try {
                    const response = await fetch(`http://localhost:8000/api/items/search`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ searching: props.searchingValue })
                    })
                    const responseData = await response.json();
                    setBooks(responseData.search);
                    setIsLoading(false);
                    props.submitSearchForm()
                } catch {
                    (err) => console.log(err)
                }
                setIsLoading(false); 
            }
            fetchSearch();
        }
    }, [props.searchingValue, props.isSubmmited, props.submitSearchForm]);



    return <>
        {isLoading && <div className="loader">Loading...</div>}
        {!isLoading && books && <Book data={books} addBook={props.addBook} />}
        {!isLoading && books < 1 && <div>brak wyników</div>}
    </>
};

export default Search;