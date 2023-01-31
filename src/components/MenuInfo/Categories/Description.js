import React, { useEffect, useState } from "react";
import Button from "../../Layout/Button/Button";

const Description = props => {
    const [books, setBooks] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCategory = async () => {
            const { _id } = props.match.params;
            let res = {}
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/api/items/description/${_id}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const responseData = await response.json();
                res = responseData.item
                setBooks(res);
                setIsLoading(false);
            } catch {
                (err) => console.log(err)
            }
            setIsLoading(false);
        }
        fetchCategory();
    }, []);

    const getBackUrl = () => {
        props.history.goBack();
    };

    if (books === null) {
        return null;
    };

    return <>
        <div basket={props.basket}>
            {isLoading && <div className="loader">Loading...</div>}
            {!isLoading && books && <>

                <div className="description_container">
                    <div className="description_cover">
                        <img className="description_cover-cover" src={books.image} ></img>
                    </div>
                    <div className="description_info">
                        <p className="description_info-title">{books.title}</p>
                        <p className="description_info-author">{books.author}</p>
                        <p className="description_info-description">{books.description}</p>
                    </div>
                </div>
                <div className='centered'>
                    <Button clicked={getBackUrl}>WRÓĆ</Button>
                </div>  

            </>}
        </div>
    </>;
}

export default Description;
