import styles from './button.module.css'
const Button = ({ type, children}) => {
   return (
        <button className={`${styles.button} ${styles[type.toLowerCase()]}`}>
            {children}
        </button>
    );
}
 
export default Button;