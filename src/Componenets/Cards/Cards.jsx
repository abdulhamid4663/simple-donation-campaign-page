import PropTypes from 'prop-types';
import Card from "../Card/Card";
import { useEffect, useState } from 'react';

const Cards = ({ data, searchString }) => {
    const [healthCategoryData, setHealthCategoryData] = useState([])
    const [foodCategoryData, setFoodCategoryData] = useState([])
    const [educationCategoryData, setEducationCategoryData] = useState([])
    const [clothingCategoryData, setClothingCategoryData] = useState([])

    useEffect(() => {
        
        const searchHealthData = data.filter(data => data.category === "Health");
        setHealthCategoryData(searchHealthData)
        const searchFoodData = data.filter(data => data.category === "Food");
        setFoodCategoryData(searchFoodData)
        const searchEducationData = data.filter(data => data.category === "Education");
        setEducationCategoryData(searchEducationData)
        const searchClothingData = data.filter(data => data.category === "Clothing");
        setClothingCategoryData(searchClothingData)

    },[data])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                searchString === "Health" || searchString === "health" ? healthCategoryData.map(card => <Card key={card.id} card={card} />) 
                : 
                searchString === "Food" || searchString === "food" ? foodCategoryData.map(card => <Card key={card.id} card={card} />) 
                : 
                searchString === "Education" || searchString === "education" ? educationCategoryData.map(card => <Card key={card.id} card={card} />) 
                : 
                searchString === "Clothing" || searchString === "clothing" ? clothingCategoryData.map(card => <Card key={card.id} card={card} />) 
                : 
                data.map(card => <Card key={card.id} card={card} />)
            }
        </div>
    );
};

Cards.propTypes = {
    data: PropTypes.array,
    searchString: PropTypes.string,
}

export default Cards;