export const handleSearch = (restaurantData) => {
    const filterData = restaurantData?.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
};