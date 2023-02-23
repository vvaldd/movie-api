import css from "./NotFounPage.module.css"

const NotFoundPage = () => {

    return (
        <div className={css.NotFoundPage}>
            <h1>Ooopps!!!</h1>
            <h5>Page not Found</h5>
        </div>
    );
};

export {NotFoundPage};