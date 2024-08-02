import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SearchCity = styled.input`
  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  padding: 10px 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
  outline: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const SearchButton = styled.button`
  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  padding: 10px 16px;
  border-radius: 5px;
  border: 1px solid #0056b3;
  background-color: #007bff;
  color: #e9ecef;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
