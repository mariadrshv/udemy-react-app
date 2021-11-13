import './Card.css';

function Card (CardProps) {
    const classes = 'card ' + CardProps.className;
    return <div className={classes}>{CardProps.children}</div>
}

export default Card;