import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.UserInfo}>
            <img src={'https://owu.com.ua/image/logo/webp/Blue-Big-Bird-Final-Logo.webp'} alt={'okten'}/>
        </div>
    );
};

export {UserInfo};