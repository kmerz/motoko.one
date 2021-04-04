import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import ColorPalette from './ColorPalatte';

type Props = {
    pageCount: number,
};

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  background-color: ${ColorPalette.info};
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 1px solid white;
  cursor: pointer;

  :hover {
    background-color: ${ColorPalette.primary};
  }

  :disabled {
    background-color: ${ColorPalette.Background};
  }
`;

const pathToPage = (pathName: string): number => {
  const pageNumber = pathName.replace(/^\/page\//, '');
  if (pageNumber === '') {
      return 1;
  }

  return parseInt(pageNumber);
};

const Navigation = ({ pageCount }: Props) => {
    const location = useLocation();
    const firstPage = 1;
    const lastPage = pageCount;
    const currentPage = pathToPage(location.pathname) || 1;
    const prevPage = currentPage > firstPage ? currentPage - 1: firstPage;
    const nextPage = currentPage < lastPage ? currentPage + 1: lastPage;

    return (
        <ButtonBar>
          <StyledLink to="/page/1" title="First Page">先頭ページ</StyledLink>
          <StyledLink to={`/page/${prevPage}`} title="Previous Page">前のページ</StyledLink>
          <StyledLink to={`/page/${nextPage}`} title="Next Page">次のページ</StyledLink>
          <StyledLink to={`/page/${pageCount}`} title="Last Page">最後のページ</StyledLink>
        </ButtonBar>
    );
};

export default Navigation;