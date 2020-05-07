import styled from "styled-components";

const MultiList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default MultiList;
