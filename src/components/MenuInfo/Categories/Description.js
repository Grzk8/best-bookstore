import React, { useEffect, useState, Component } from "react";
import { useParams } from 'react-router-dom';
import Button from "../../Layout/Button/Button";


// const Description = () => {
//     const [itemData, setItemData] = useState();

//     const id = useParams()._id;

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const respData = await fetch(`http://localhost:8000/api/items/description/${id}`,
//                 methog = 'GET',
//                 headers= {
//                     'Content-Type': 'application/json'
//                 })
//                 setItemData(respData);
//                 console.log(respData)
//             }catch (err){

//             }
//         }
//         fetchData;
//         console.log(itemData);
//     }, [id]);

//                     return <>
//                     <div >
//                         <h1 className="headerStyle">hgfh</h1>
//                         <h2 className="headerStyle"gfhgf></h2>
//                         <p className="headerStyle">gfhgfh</p>
//                         <Button >WRÓĆ</Button>
//                     </div>
//                 </>;
// }
class Description extends Component {
    state = {
        books: []
    }


    componentDidMount() {
        const { _id } = this.props.match.params;
        let response;
        fetch(`http://localhost:8000/api/items/description/${_id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(json => response = json.item)
        .then(data => {
            const it = data
            this.setState({
                books: it
            });
        });
    }
    getBackUrl = () => {
        this.props.history.goBack();
    };

    render() {

        if (this.state.books === null) {
            return null
        }

        return <>
            <div basket={this.props.basket}>
                <h1 className="headerStyle">{this.state.books.title}</h1>
                <h2 className="headerStyle">{this.state.books.author}</h2>
                <p className="headerStyle">{this.state.books.description}</p>
                <Button clicked={this.getBackUrl}>WRÓĆ</Button>
            </div>
        </>;
    }
}


export default Description;
