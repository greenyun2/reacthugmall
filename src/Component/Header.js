import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import NormalMall from './NormalMall';



const Container = styled.div`
width: 1280px;
height: 100%;
margin: 0 auto;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-between;
@media all and (max-width: 768px) {
  div {
    width: 100%;
  }
}
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
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 31px;
    margin-left: 50px;
    li {
      list-style: none;
      a {
        margin-right: 50px;
        text-decoration: none;
        color: #000;
      }
      .toggle_box {
        position: absolute;
        border: 1px solid #ccc;
        cursor: pointer;
      }
    }
  }
`;


const HeaderSearch = styled.div`

`;

const HeaderLoginCheck = styled.div`

`;


const menuItems = ['SHOP', 'LIVE', '고객센터'];
const shopList = ['산후조리원 회원 몰', '산후조리원 졸업회원 몰'];
const csList = ['자주하는 질문', '공지사항'];

const Header = ({authenticate, setAuthenticate}) => {
  const [toggleContent, setToggleContent] = useState('');
  const navigate = useNavigate();

  const handleMouseEnter = (content) => {
    setToggleContent(content);
  };

  const handleMouseLeave = () => {
    setToggleContent('');
  };


  const renderToggleContent = () => {
    switch (toggleContent) {
      case 'SHOP':
        return (
          <div className='toggle_box first_toggle_box'>
            {shopList.map((item, index) => (
              <div key={index} onClick={() => navigate('/normal')}>{item}</div>
            ))}
          </div>
        );
      case '고객센터':
        return (
          <div className='toggle_box'>
            {csList.map((item, index) => (
              <div key={index} onClick={() => navigate('/')}>{item}</div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  
  
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
      {menuItems.map((menuItem, index) => (
        <li
          key={index}
          onMouseEnter={() => handleMouseEnter(menuItem)}
          onMouseLeave={handleMouseLeave}
        >
          <a>{menuItem}</a>
          {toggleContent === menuItem && renderToggleContent()}
        </li>
      ))}
    </ul>
      </HeaderMenu>
      <HeaderSearch>
      <input type='text' placeholder='제품검색' onKeyPress={search} />
        <FontAwesomeIcon icon={faSearch} 
        className='search-icon' />
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

export default Header;