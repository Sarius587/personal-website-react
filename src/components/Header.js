import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 18px 10%;
    min-height: 6vh;
    background-color: #24252A;
`;

const BrandLink = styled(Link)`
    cursor: pointer;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 20px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #ecf0f1;
    text-decoration: none;
`;

const NavLinks = styled.ul`
    list-style: none;

    @media screen and (max-width: 768px) {
        position: absolute;
        right: 0px;
        height: 94vh;
        top: 6vh;
        width: 50%;
        background-color: #24252A;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        transform: translateX(100%);
        transition: transform 0.5s ease;

        ${({ open }) => open && css`
            transform:translateX(0%);
        `};
    }
`;

const BurgerButton = styled.div`
    display: none;

    div {
        width: 25px;
        height: 3px;
        margin: 5px;
        background-color: #ecf0f1;
        transition: transform 0.3s ease;
    }

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

const NavLinkItem = styled.li`
    display: inline-block;
    padding: 0px 20px;
`;

const NavLinkItemLink = styled(Link)`
    transition: all 0.3s ease 0s;
    letter-spacing: 2px;
    font-size: 16px;
    color: #ecf0f1;
    text-decoration: none;

    &:hover {
        color: #0088a9;
    }
`;

const FirstLine = styled.div`
    @media screen and (max-width: 768px) {
        ${({ open }) => open && css`
            transform: rotate(-45deg) translate(-5px, 6px);
        `}
    }
`;

const SecondLine = styled.div`
    @media screen and (max-width: 768px) {
        ${({ open }) => open && css`
            opacity: 0;
        `}
    }
`;

const ThirdLine = styled.div`
    @media screen and (max-width: 768px) {
        ${({ open }) => open && css`
            transform: rotate(45deg) translate(-5px, -6px);
        `}
    }
`;


const Header = () => {

    const [burgerToggled, setBurgerToggled] = useState(false);

    const toggleBurger = () => {
        setBurgerToggled(!burgerToggled);
    }

    return (
        <StyledHeader>
            <BrandLink to="/">Niels Pressel</BrandLink>
            <nav>
                <NavLinks open={burgerToggled}>
                    <NavLinkItem>
                        <NavLinkItemLink to="/skills" onClick={() => setBurgerToggled(false)}>Skills</NavLinkItemLink>
                    </NavLinkItem>
                    <NavLinkItem>
                        <NavLinkItemLink to="/story" onClick={() => setBurgerToggled(false)}>Story</NavLinkItemLink>
                    </NavLinkItem>
                    <NavLinkItem>
                        <NavLinkItemLink to="/contact" onClick={() => setBurgerToggled(false)}>Contact</NavLinkItemLink>
                    </NavLinkItem>
                </NavLinks>
            </nav>

            <BurgerButton onClick={toggleBurger}>
                <FirstLine open={burgerToggled}></FirstLine>
                <SecondLine open={burgerToggled}></SecondLine>
                <ThirdLine open={burgerToggled}></ThirdLine>
            </BurgerButton>
        </StyledHeader>);
};

export default Header;