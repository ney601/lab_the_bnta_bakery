const CakeCard = ({nameOfCake}) => {

    const {cakeName, ingredients, price, rating} = nameOfCake;

    return ( 
        <>
            <h3>{cakeName}</h3>
            <p>Ingredients: {ingredients}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
        </>
     );
}
 
export default CakeCard;