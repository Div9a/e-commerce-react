import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const handleAddToCart = () => {}
function ProductsPage(props) {
  
    let {id} = useParams();
    const [data, setData] = React.useState(props.data)
    const [product,setProduct] = React.useState()


    React.useEffect(()=>{
        console.log(id)
        
            data.map((data)=>{
                console.log(data.id)
                console.log(id)
                if(data.id==id)
                setProduct(data)
                console.log(data)
                
            })
        
    },[])
  return (
    <Container>
     
      <GoBack>
        <Link to="/">
          <span>← Go Back</span>
        </Link>
      </GoBack>
      {product && <ProductInfo>
        <Details>
          <Heading>Item Details</Heading>
          <Image>
            <Img>
              <img src={product.img} />
              <span>{product.name}</span>
            </Img>
            <Description>
              <Desc>
                <p>{product.description}</p>
              </Desc>
              
              <CallUs>
                <img src="https://i.pinimg.com/564x/8e/a0/83/8ea08365d331d8ae9bd93ba5f50528d4.jpg" />
                <span>Need help? Call Us</span>
              </CallUs>
            </Description>
          </Image>
        </Details>
       
        <Price>
          <Heading>Price Details</Heading>
          <Amount>
            <Total>
              <p>Total Amount:</p>
              <span>{`Rs. ${product.price}`}</span>
            </Total>
            <Link to={`/${id}/${product.id}`}>
            <Cart >
              Add to Cart
            </Cart>
        </Link>
            
          </Amount>
        </Price>
      </ProductInfo>}
    </Container>
  );
};

export default ProductsPage;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "Source Sans Pro", sans-serif;
  overflow-x: hidden;
  background-color: #efefef;
`;

const Header = styled.div`
  position: fixed;
  height: 65px;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: #e82231;
  box-shadow: 0 5px 10px rgb(0 0 0 / 30%);
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ##efefef;

  img {
    height: 50px;
    width: 140px;
    margin-left: 200px;
    margin-top: 2px;
  }
  p {
    margin-left: 700px;

    font-size: 16px;
  }
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

const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 6px;
  margin-left: 220px;
  color: green;

  padding-top: 140px;
`;

const Details = styled.div`
  width: 666px;
  height: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
`;

const Image = styled.div`
  height: 300px;
  width: 630px;
  display: flex;
  align-items: center;
  margin-left:20px;
`;
const Img = styled.div`
  height: 230px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 550;
  font-size: 18px;
  letter-spacing: 1px;

  span{
    margin-top: 10px;
  }
`;

const Description = styled.div`
  margin-left: 40px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 15px;
`;

const Riding = styled.div`
  width: 450px;
  height: 250px;
  margin-left: 180px;
  border-radius: 8px;
  background-color: #fff;
`;
const Price = styled.div`
  width: 350px;
  height: 250px;
  margin-left: 300px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Heading = styled.div`
  float: left;
  background: #20b2aa;
  color: #fff;
  padding: 8px;
  border-top-left-radius: 8px;
  height: 40px;
  width: 150px;
  border-bottom-right-radius: 8px;
`;

const Instructions = styled.div`
  margin-top: 65px;
  margin-left: 15px;
  font-size: 15px;
  color: #212529;
  font-weight: 300;

  p {
    max-width: 400px;
    margin-top: 5px;
  }
`;

const Desc = styled.div`
color: green;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 300px;
  margin-top: 80px;
  

  p {
    font-weight: 550;
    
  }
  span {
    margin-left: 32px;
  }
`;
const End = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  p {
    font-weight: 550;
  }
  span {
    margin-left: 37px;
  }
`;
const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  p {
    font-weight: 550;
  }
  span {
    margin-left: 35px;
  }
`;
const Store = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  p {
    font-weight: 550;
  }
  span {
    margin-left: 59px;
    max-width: 140px;
  }
`;

const CallUs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 70px;
  margin-left: 40px;
  font-weight: 550;
  font-size: 15px;
  border-width: 2px;
  border-color: green;
  color: green;
  
  img {
    height: 40px;
    width: 40px;
    cursor: pointer;
  }

  span {
    margin-left: 10px;
    padding-right: 5px;
  }
`;

const Amount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 50px;
  font-size: 15px;
`;

const Total = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 28px;
  margin-top: -30px;
  p {
    margin-left: -10px;
  }
  span {
    margin-left: 160px;
  }
`;

const Deposit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  margin-left: 20px;
  margin-top: 20px;
  p {
    max-width: 150px;
  }
  span {
    margin-left: 96px;
  }
`;

const Coupon = styled.div`
  color: #20b2aa;
  margin-left: 21px;
  margin-top: 30px;
`;

const Payable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  margin-top: 30px;

  span {
    margin-left: 116px;
  }
`;

const Terms = styled.div`
  margin-left: 21px;
  margin-top: 20px;
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
  }
  p {
    margin-left: 5px;
  }
  span {
    margin-left: 5px;
    color: #20b2aa;
    font-size: 16px;
  }
`;

const Cart = styled.button`
  height: 40px;
  width: 210px;
  margin-left: 62px;
  margin-top: 60px;
  background-color: #20b2aa;
  border-radius: 5px;
  color: #fff;
`;