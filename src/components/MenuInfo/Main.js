import React, { useEffect, useState} from 'react';
import Book from "../Layout/Book/Book";

const Main = props => {
    const [books, setBooks] = useState();
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        const fetchNewest = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/api/items/newest`, {
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
        fetchNewest()
    }, [])

    return <>
        <h1 className="headerStyle">Nowości</h1>
        {isLoading && (<p>loading...</p>)}
        { !isLoading && books && <Book data={books} addBook={props.addBook} newBook={true} />}
    </>;
};

export default Main;


// componentDidMount() {

//     fetch(`https://best-bookstore-default-rtdb.firebaseio.com//books.json`)
//         .then(resp => resp.json())
//         .then(data => {
//             console.log(data, "from API");

//             const newList = data.slice(-10).reverse();

//             this.setState({
//                 books: newList,
//             })
//         })
// };
// render() {
//     return <div>
//         <h1 className="headerStyle">Nowości</h1>
//         <Book data={this.state.books} addBook={this.props.addBook} newBook={true} />
//     </div>;
// };
// }


    // componentDidMount() {
    //     const category = this.props.category;
    //     let response;
    //     fetch(`http://localhost:8000/api/items/newest`, {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(json => response = json.newest)
    //         .then(data => {
    //             const newList = data
    //             this.setState({
    //                 books: newList,
    //             });
    //             console.log(this.state.books)
    //         });
    // };