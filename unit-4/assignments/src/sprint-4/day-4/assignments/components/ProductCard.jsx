import { Flex } from "./Styled";

export const ProductCard = ({item}) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
        <div><h4>{item.title}</h4></div>
        <div><img src={item.image} alt="" /></div>
        <div>{item.brand}</div>
        <div>Price : {item.price}</div>
      </Flex>
    </>
  );
};
