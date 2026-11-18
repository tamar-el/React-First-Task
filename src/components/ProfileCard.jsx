import Button from './Button';
import styles from './ProfileCard.module.css'
const ProfileCard = ({ name, description, avatar, type }) => {
  return (
        <div className={styles.profileCard}>

            <img
                src={avatar}
                className={styles.avatar}
            />

            <h2>{name}</h2>

            <p>{description}</p>

            <Button type={type}>
                {type}
            </Button>

        </div>
    );

}
 
export default ProfileCard;