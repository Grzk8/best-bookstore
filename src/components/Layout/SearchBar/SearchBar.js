import React, { useState } from 'react';
import Input from '../Input/Input';

const SearchBar = props => {

    const [issub, setissub] = useState(false);

    const sub = props.submitSearchForm;
    const set = (val) => {
        setissub(val => !val)
    }
    console.log(issub)

    const handleSubmitForm = e => {
        setissub(true)
        props.submitSearchForm;
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
        <button className='btn_search' onClick={handleSubmitForm}><i className="fa fa-search"></i></button>
    </form>
};

export default SearchBar;