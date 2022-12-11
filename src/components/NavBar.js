import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <>
      <ul className={classes.navbar}>
        <li>All</li>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Shakes</li>
      </ul>
    </>
  );
};

export default NavBar;