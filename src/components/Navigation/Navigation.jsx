import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div>
        <img src="/img/Frame 2 1.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About-Us</li>
        <li>Contact Us</li>
        <li> Notes</li>
      </ul>
    </nav>
  );
};

export default Navigation;
