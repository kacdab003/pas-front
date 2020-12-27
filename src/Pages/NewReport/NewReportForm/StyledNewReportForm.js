import styled from 'styled-components';

export const FormSectionWrapper = styled.div`
  text-align: center;
  margin: 2rem auto;
  width: ${({ columns }) => (columns >= 3 ? '100%' : '60%')};
  display: grid;
  grid-template-columns: ${({ columns = 3 }) => `repeat(${columns},1fr)`};
  grid-template-rows: ${({ rows = 2 }) => `repeat(${rows},1fr)`};
  justify-items: center;
  align-content: center;
  & div {
    margin: 2rem auto;
  }
`;
