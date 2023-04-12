import React, { useState } from 'react';
import Card from './Card';
import RES_LIST_DATA from '../utils/mockData';
import "../../public/css/MainBody.css";

const MainBody = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurantData, setRestaurantData] = useState(RES_LIST_DATA);

    const handleSearch = () => {
        const filterData = RES_LIST_DATA.filter(restaurant => restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
        setRestaurantData(filterData);
    }

    return (
        <div className="body">
            <div className="search-form">
                <input type="text" placeholder="Search..." onChange={(e) => setSearchText(e.target.value)} />
                <button type="button" onClick={handleSearch} >Search</button>
            </div>
            <div className="cards">
                {restaurantData?.map(restaurant => <Card resData={restaurant} key={restaurant.data.id} />)}
            </div>
        </div>
    )
}

export default MainBody;