import styled from 'styled-components';

const HeaderStyled = styled.header`
  align-items: center;
  background-color: #0B7ABF;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
  rgba(0, 0, 0, 0.12) 0px 1px 18px 0px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px;
  color: white;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 10px 20px;
  button {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #f2f2f2;
    color: white;
    font-size: larger;
    margin-right: 20px;
    padding: 5px;
  }
  button:hover {
    color: #f2f2f2;
    cursor: pointer;
  }
  div {
    display: flex;
    justify-content: flex-end;
    width: 70%;
  }
`;

export default HeaderStyled;