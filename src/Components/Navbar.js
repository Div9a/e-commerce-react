import React from "react";
import styled from "styled-components";

function Navbar(props) {
  const [search, setSearch] = React.useState("");
  const [searchedData, setSearchedData] = React.useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    props.setData(
      props.data.filter((data) => {
        return data.name === search;
      })
    );
  };

  return (
    <Nav>
      <NavMenu>
        {props.navData.map((data) => {
          return (
            <a>
              <span> {data.name} </span>
            </a>
          );
        })}
      </NavMenu>
      <Search onChange={handleChange} placeholder="Enter full name of Product"></Search>
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      <UserImage src="/images/profile.svg.jpeg" />
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  
`;

const Search = styled.input`
  margin-right: 50px;
  width: 400px;
  height: 34px;
  border-radius: 10px;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 34px;
  margin-right: 250px;
  border-radius: 10px;
`;

const Logo = styled.img`
  width: 80px; ;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-right: 80px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    margin-left: 20px;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      color: white;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
