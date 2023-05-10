export const filterRestaurant = (restaurantData , searchText) => {
    const filterData = restaurantData?.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData; 
};