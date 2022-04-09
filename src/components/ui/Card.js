import classes from './Card.module.css';

function Card(props) {
    return (
        <div className={ classes.card }>
            {
                /* 
                    Inject component 
                    children always displays the content between the open
                    and closing tags - in this case <Card>
                */
            }
            { props.children }
        </div>
    )
}

export default Card;