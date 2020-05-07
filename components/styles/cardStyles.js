import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.lightgrey};
  transition: all 0.3s ease 0s;
  padding: 20px;
  box-shadow: ${(props) => props.theme.bs};
  text-align: ${(props) => (props.isTitle ? "center" : "left")};

  .title {
    font-size: 2rem;
    font-weight: bold;
  }

  .subtitle {
    font-size: 1.5rem;
    font-weight: lighter;
    font-style: italic;
  }

  .content {
    color: ${(props) => props.theme.black};
    padding-bottom: 10px;
    flex: 1 0 auto;
  }

  .format {
    font-style: italic;
  }

  .catalognumber {
    font-style: italic;
  }

  .publishedby {
    font-style: italic;
  }

  .publisheddate {
    font-style: italic;
  }

  .releaseddate {
    font-style: italic;
  }

  .recordlabel {
    font-style: italic;
  }

  .additionalinfo {
    font-style: italic;
  }

  .alttitle {
    font-style: italic;
  }

  .publisher {
    font-style: italic;
  }

  .publisheddate {
    font-style: italic;
  }

  .instrumental {
    font-style: italic;
  }

  .fromfilm {
    font-style: italic;
  }

  .footer {
    border-top: 2px solid ${(props) => props.theme.black};
    padding-top: 20px;
    flex-shrink: 0;
  }
`;

export { CardWrapper };
