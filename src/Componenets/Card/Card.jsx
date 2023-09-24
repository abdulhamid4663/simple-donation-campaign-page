import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, image, title, card_bg, text_color, category_bg, category } = card;

    return (
        <Link to={`/card/${id}`}>
            <div className="card h-full rounded-xl">
                <figure ><img src={image} alt={`image of ${title}`} className='w-full h-[18.75rem]' /></figure>
                <div className="p-4 flex flex-col flex-grow rounded-b-xl" style={{ backgroundColor: card_bg }}>
                    <p className='max-w-fit py-1 px-3 rounded-md mb-2' style={{ backgroundColor: category_bg, color: text_color }}>{category}</p>
                    <h2 className="text-xl font-semibold" style={{ color: text_color, }}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    card: PropTypes.object
}

export default Card;