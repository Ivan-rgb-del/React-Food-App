import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={classes.cards}>
    {props.allMeals.map(({id, img, title, price, desc}) => (
      <div className={classes.card} key={id}>
        <div>
          <img src={img} alt={title} />
        </div>

        <div>
          <div className={classes.titlePrice}>
            <h3>{title}</h3>
            <p>$ {price}</p>
          </div>
          <p className={classes.desc}>{desc}</p>
        </div>
      </div>
    ))}
    </div>
  )
};

export default Card;