import { useNavigate } from 'react-router-dom';

const ActionLinkTwo = ({id}) => {
        const navigate = useNavigate();
        return (
            <>
                {/* Button */}
                <button className='bg-red-600' onClick={() => navigate(`/cgv/${id}`)}>Go to favoris</button>


            </>
        )
};
export default ActionLinkTwo;