import styles from './Item.module.css';

const Item = ({ foodItems, bought, handleByButton }) => {



    // const handleBuyButtonClicked = (event) => {

    //     console.log(event)
    //     console.log(`You bought ${foodItems}`)
    // }
    return (
        <>
            <li className={`${styles.item} list-group-item ${bought
                && 'active'
                }`}>
                <span className={styles.span}>{foodItems}</span>

                <button className={`${styles.button} btn btn-info`}

                    // onClick={() => console.log(`You bought ${foodItems}`)}
                    onClick={(event) => handleByButton(event)}
                >
                    Buy</button>
            </li>
        </>
    );
}

export default Item;
