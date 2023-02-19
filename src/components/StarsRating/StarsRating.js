import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({vote_average}) => {
    return (
        <div>
            <StarRatings
                rating={vote_average}
                numberOfStars={10}
                starRatedColor="red"
                starDimension="10px"
                starSpacing="5px"
            />
        </div>
    );
};

export {StarsRating};
