import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const Container = styled.div`
width: 1280px;
height: 100%;
margin: 0 auto;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const HeaderLogo = styled.div`
  width: 220px;
  a {
    width: 100%;
    img {
      display: inline-block;
      width: inherit;
      margin: auto 0;
      object-fit: cover;
    }
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_menu_list {
    margin-left: 50px;
    display: flex;
    justify-content: flex-start;
    gap: 31px;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }

`;


const HeaderSearch = styled.div`

`;

const HeaderLoginCheck = styled.div`

`;


const Header = ({authenticate, setAuthenticate}) => {
  const menu = ['SHOP', 'LIVE', '고객센터'];
  const shopList = ['산후조리원 회원 몰', '산후조리원 졸업회원 몰'];
  const csList = ['자주하는 질문', '공지사항'];
  const [showShop, setShowShop] = useState(shopList);

  const navigate = useNavigate();
  
  const search = (event) => {
    if(event.key === "Enter") {
      let keyWord = event.target.value;
      console.log('keyword',keyWord);
      navigate(`/?q=${keyWord}`);
    };
  };

  return (
    <Container>

      <HeaderLogo>
        <a href='/'>
          <img src="img/hugmom_logo_type_1.png" />
        </a>
      </HeaderLogo>

      <HeaderMenu>
        <ul className='header_menu_list'>
          {menu.map((item, index) => (
            <li>
              <a href='#' key={index}>
                {item}
              </a>
              <ul>

              </ul>
            </li>
          ))}
        </ul>
      </HeaderMenu>

      <HeaderSearch>
        <FontAwesomeIcon icon={faSearch} className='search-icon' />
        <input type='text' placeholder='제품검색' onKeyPress={search} />
      </HeaderSearch>

      <HeaderLoginCheck>
        { authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <span>로그아웃</span>
            <FontAwesomeIcon icon={faUser} />  
          </div>
        ) : (
          <div onClick={() => navigate('/login')}>
            <span>로그인</span>
            <FontAwesomeIcon icon={faUser} />  
          </div>
        )
      }
      </HeaderLoginCheck>

    </Container>
  )
}

export default Header