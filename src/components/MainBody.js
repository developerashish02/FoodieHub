import Card from './Card';
import RES_LIST_DATA from '../utils/mockData';

const MainBody = () => {
    return (
        <div className="body">
            {RES_LIST_DATA.map(restaurant => <Card resData={restaurant} />)}
        </div>
    )
}

export default MainBody;