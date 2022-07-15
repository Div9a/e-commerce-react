import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Cart(props) {

    const [quant,setQuant] = React.useState(1);
    let {cartId} = useParams();
    let {id} = useParams();
    const [data, setData] = React.useState(props.data)
    const [product,setProduct] = React.useState()


    React.useEffect(()=>{
        // console.log(id)
        console.log(cartId)
        
            data.map((data)=>{
                console.log(data.id)
                console.log(cartId)
                if(data.id==cartId)
                setProduct(data)
                console.log(data)
                
            })
        
    },[])

  const increaseQuantiy=()=>{
    setQuant(quant+1)
  }
  const decreaseQuantity =()=>{
    if (quant>0) {
        setQuant(quant-1)
    }
  }
  return (
    <Container>
    <GoBack>
        <Link to={`/${id}`}>
          <span>← Go Back</span>
        </Link>
      </GoBack>
      {product &&<Product>
        <img src={product.img} />
        <h6> {product.name} </h6>
        <Quantity>
            <button onClick={decreaseQuantity}> - </button>
            <span> {quant} </span>
            <button onClick={increaseQuantiy}> + </button>
        </Quantity>
        <h6>Total Payable: Rs. {product.price*quant} </h6>
      </Product>}
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  font-family: font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  overflow-x: hidden;
  background-color: black;
`;
const GoBack = styled.div`
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: 700;
  cursor: pointer;

  background: #fff;
  color: #212529;
  text-align: left;
  margin-top: 4px;

  min-height: 53px;


  width: 100%;
  z-index: 20;

  span {
    margin-left: 20px;
  }
`;


const Product = styled.div`
  height: 40%;
  width: 70%;
  background: #efefef;
  margin-left: 200px;
  border-radius: 10px;
  margin-top: 160px;
  display:flex;
  align-items:center;

  img {
    height: 100%;
    border-radius: 3px;
  }
  h6 {
    margin-left: 50px;
    font-size: 25px;
    
  }
`;
const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  button {
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
  }
  span{
    padding: 5px;
  }
  
  
`;
