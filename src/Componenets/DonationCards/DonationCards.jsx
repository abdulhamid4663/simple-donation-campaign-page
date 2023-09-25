import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationDetails = ({ card }) => {
    const { id, image, title, category, category_bg, text_color, card_bg, donation } = card;

    return (
        <div className='flex flex-col lg:flex-row item-center mb-'>
            <div>
                <img src={image} alt={`image of ${title}`} className='rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl w-full lg:w-[15.75rem] h-[18.75rem] lg:h-[12.5rem]' />
            </div>
            <div className='pl-6 h-full w-full flex flex-col justify-center rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl py-6 lg:py-0' style={{ backgroundColor: card_bg }}>
                <h2 className='max-w-fit py-1 px-3 rounded-md' style={{ color: text_color, backgroundColor: category_bg }}>{category}</h2>
                <h1 className='text-base lg:text-xl font-semibold text-[#0B0B0B] my-2'>{title}</h1>
                <h4 className='text-base font-semibold pb-5' style={{ color: text_color, }}>{donation}.00</h4>
                <div className=''>
                    <Link to={`/card/${id}`}>
                        <button className='text-white py-2 px-4 rounded-lg font-semibold text-sm lg:text-lg' style={{ backgroundColor: text_color }}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

DonationDetails.propTypes = {
    card: PropTypes.object
}

export default DonationDetails;