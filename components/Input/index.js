import styled from "styled-components";

const InputContainer = styled.div`
  margin-bottom: 30px;
  height: 120px;
`;

const Input = styled.input`
  padding: 20px;
  width: 100%;
  font-size: 16px;
  font-size: 20px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.grey.darken(0.05).toString()};
  outline: none;
`;
const InputLabel = styled.div`
  color: ${({ theme }) => theme.color.black.toString()};
  font-size: 22px;
  margin-bottom: 10px;
`;
const InputSubLabel = styled.div`
  margin-top: 5px;
  color: ${({ theme }) => theme.color.red.toString()};
`;
export default props => {
  const { label, subLabel } = props;
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <Input {...props} />
      {subLabel && <InputSubLabel>{subLabel}</InputSubLabel>}
    </InputContainer>
  );
};
