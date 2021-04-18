import React from 'react';
import Button from '../../../Layout/Button/Button'

const searchBar = () => {return(
    <form className="tableContainer" action="/search" method="post" >
        <label className="headerStyle">Szukaj</label>
        <input
        type="text"
        value={props.search}
        placeholder="Tytuł"
        name="s"
        onChange={props.search}
        />
        <br/>
        <Button type="submit">Szukaj</Button>
    </form>
)};

export default searchBar;