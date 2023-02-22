import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({vote_average}) => {
    return (
        <div>
            <StarRatings
                rating={vote_average}
                numberOfStars={10}
                starRatedColor="orange"
                starDimension="20px"
                starSpacing="5px"
            />
        </div>
    );
};

export {StarsRating};
