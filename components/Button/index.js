import styled from "styled-components";
import Color from "color";
const Button = styled.div`
  padding: 20px;
  width: 100%;
  font-size: 18px;
  background: ${({ theme, disabled }) => {
    if (disabled) {
      return theme.color.yellow.grayscale().toString();
    } else {
      return theme.color.yellow.toString();
    }
  }};
  user-select: none;
  transition: 0.3s background;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  text-align: center;
  font-weight: semi-bold;
  :hover {
    background: ${({ theme, disabled }) =>
      disabled
        ? theme.color.yellow.grayscale().toString()
        : theme.color.yellow.darken(0.2).toString()};
  }
`;
export default props => {
  const { children, disabled, onClick } = props;

  return (
    <Button onClick={disabled ? () => {} : onClick} {...props}>
      {children}
    </Button>
  );
};
