import styled from "styled-components";

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  /* transform: skew(-5deg) rotate(-1deg); */
  /* margin-top: -3rem; */
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: ${props => props.theme.red};
    display: inline;
    line-height: 1;
    font-size: 2rem;
    text-align: center;
    color: white;
    /* padding: 0 1rem; */
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export default Title;
