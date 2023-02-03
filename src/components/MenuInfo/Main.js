import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Book from "../Layout/Book/Book";
import Button from '../Layout/Button/Button';

const Main = props => {
    const [booksNewest, setBooksNewest] = useState();
    const [booksSale, setBooksSale] = useState();
    const [isLoading, setIsLoading] = useState(false);

    let history = useHistory();

    const switchToNewest = () => {
        history.push('/newest');
    };

    const switchToSale = () => {
        history.push('/sale');
    };

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
                setBooksNewest(responseData.newest.slice(-6));
                setIsLoading(false);
            } catch {
                (err) => console.log(err)
            }
            setIsLoading(false);
        }
        fetchNewest();
    }, []);

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
                setBooksSale(responseData.salePrice);
                setIsLoading(false);
            } catch {
                (err) => console.log(err)
            }
            setIsLoading(false);
        }
        fetchSale();
    }, []);

    return <>
        <h1 className="headerStyle">nowości</h1>
        {isLoading && <div className="loader">Loading...</div>}
        {!isLoading && booksNewest && <>
            <Book data={booksNewest} addBook={props.addBook} newBook={true} />
            <div className='main_btn_right'>
                <Button className='right' clicked={switchToNewest}>Przejdz do nowości</Button>
            </div>
        </>}

        <h1 className="headerStyle">promocje</h1>
        {isLoading && <div className="loader">Loading...</div>}
        {!isLoading && booksSale && <>
            <Book data={booksSale} addBook={props.addBook} sale={true} />
            <div className='main_btn_right'>
                <Button className='right' clicked={switchToSale}>Przejdz do promocji</Button>
            </div>
        </>}
    </>
};

export default Main;