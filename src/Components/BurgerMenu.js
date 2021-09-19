import styled from "styled-components";

export const BurgerMenu = styled.button`
    position: absolute;
    top: 25px;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 31px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    @media screen and (min-width: 900px) {
        display: none;
    }

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: #0d0c1d;
        border-radius: 10px;
        transition: all 0.3s ease-in-out;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? "0" : "1")};
            transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;
