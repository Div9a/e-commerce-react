import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Products(props) {
  React.useEffect(() => {
    console.log(props.searchData[0]);
  }, [props.searchData[0]]);

  const handleClick = (event) => {
    console.log(event.target.value);
  };
  return (
    <Container>
      <Productss>
        <h1> PRODUCTS </h1>
      </Productss>
      <Content>
        {props.searchData[0] && (
          <Wrap>
            <img src={props.searchData[0].img} />
            <span>{props.searchData[0].name}</span>
            <span>{props.searchData[0].price}</span>

            <Link to={`/${props.searchData[0].id}`}>
              <button
                class="my_button"
                onClick={handleClick}
                key={props.searchData[0].id}
              >
                {" "}
                VIEW{" "}
              </button>
            </Link>
          </Wrap>
        )}
        {!props.searchData[0] &&
          props.data.map((data) => {
            return (
              <Wrap>
                <img src={data.img} />
                <h6>{data.name}</h6>
                <span>{data.price}</span>
                <Link to={`/${data.id}`}>
                  <button class="my_button" onClick={handleClick} key={data.id}>
                    {" "}
                    VIEW{" "}
                  </button>
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
}

export default Products;

const Container = styled.div`
  padding-left: 40px;
  color: white;
  align-item: center;
  margin-top: 50px;
`;

const Productss = styled.div`
  margin-left: 630px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  width: 75%;
  height: 70%;
  align-items: center;
  justify-content: center;
  
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  .my_button {
    margin-top: 20px;
    width: 260px;
    margin-left: 1px;
    
  }

  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img {
    width: 100%;
    height: 50%;
    
  }

  
  h6{
    height: 20px;
    width: 150px;
    color: white;
    margin-left: 35px;
    margin-top: 10px;
    

  }

  span {
    height: 20px;
    width: 150px;
    color: white;
    margin-left: 100px;
    margin-top: 10px;
    

  }
`;
