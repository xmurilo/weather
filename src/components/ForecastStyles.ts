import styled from "styled-components";

export const ForecastContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h4 {
    text-align: center;
    margin-bottom: 10px;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

  }
  ul {
    list-style-type: none;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 5px;

    img {
      margin-right: 10px;
    }
  }
`;
