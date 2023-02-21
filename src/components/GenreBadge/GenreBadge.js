const GenreBadge = ({genre}) => {
    console.log(genre)
    return (
        <div>
            <div>{genre.name}</div>
        </div>
    );
};

export {GenreBadge};