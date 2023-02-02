import React from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../Input/Input';

const SearchBar = props => {
    let history = useHistory();

    const handleSubmitForm = e => {
        e.preventDefault();
        props.submitSearchForm();

        history.push('/search');
    };
  
    const handleSearchHandle = e => {
        props.searching(e.target.value);
    }

    return <form className="search" onSubmit={handleSubmitForm}>
        <Input
            className="input search_input"
            inputtype="text"
            name="search"
            value={props.searchingValue}
            label="search"
            placeholder="tytuł książki lub autor"
            onChange={handleSearchHandle}
        />
        <button className='btn_search' ><i className="fa fa-search"></i></button>
    </form>
};

export default SearchBar;