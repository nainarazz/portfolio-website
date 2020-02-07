import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: #fff;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    padding-top: 82px;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-out;
`;

export const SideDrawerItem = styled.div`
    font-size: 0.9rem;
    color: black;
    button {
        border: 0;
        background: none;
        width: 100%;
        height: 50px;
    }

    button:hover {
        cursor: pointer;
    }

    :hover {
        background-color: #5cb818;
        color: #fff;
        cursor: pointer;
    }
`;
