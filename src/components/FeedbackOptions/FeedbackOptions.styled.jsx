import styled from '@emotion/styled';

const Button = styled.button`
  background: none;
  border: 1px solid #dddddd;
  font-weight: 500;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 250ms linear, color 250ms linear;
  &:active,
  &:hover {
    background: #508ef0;
    color: white;
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default Button;
