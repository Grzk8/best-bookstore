import React, { useEffect, useState } from 'react';
import Book from '../../Layout/Book/Book';
import Input from '../../Layout/Input/Input';
import Button from '../../Layout/Button/Button';

const Search = props => {
    const [books, setBooks] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [searchingValue, setSearchingValue] = useState('');
    const [isSubmmited, setIsSubmitted] = useState(false);

    const handleSubmitForm = async event => {
        event.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmmited) {
        const fetchSearch = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:8000/api/items/search', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ searching: searchingValue })
                })
                const responseData = await response.json();
                setBooks(responseData.search);
                setIsLoading(false);
            } catch {
                (err) => console.log(err)
            }
            setIsLoading(false);
        }
        fetchSearch();
        setIsSubmitted(false);
    }


    return <>
        <h1 className="headerStyle">Szukaj</h1>
        <form className="tableContainer" onSubmit={handleSubmitForm}>
            <Input
                className="input"
                inputtype="text"
                name="search"
                value={searchingValue}
                label="search"
                placeholder="tytuł książki lub autor"
                changed={e => setSearchingValue(e.target.value)}
            />
            <Button>Szukaj</Button>
        </form>
        {isLoading && <div className="loader">Loading...</div>}
        {!isLoading && books && <Book data={books} addBook={props.addBook} />}
    </>
};

export default Search;