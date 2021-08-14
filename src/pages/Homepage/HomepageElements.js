import styled from "styled-components";

export const HomepageContainer = styled.div`
    height: 100vh;
    /* min-height: 100vh; */
    /* background-color: #ffc996; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #c9d6ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #e2e2e2, #c9d6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const HomepageWrap = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background: white;
`;