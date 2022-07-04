import styled from 'styled-components';
import { ReactComponent as SearchIcon } from './../../../../assets/icons/search.svg';
import { ColorService } from '../../../../services/ColorService';

const SearchIconStyled = styled(SearchIcon)`
  path {
  }
`;

export const Search = () => {
  return <SearchButton>{<SearchIconStyled />}</SearchButton>;
};

const SearchButton = styled.button`
  background-color: ${ColorService.PRIMARY};
  border: ${`0px solid  ${ColorService.LIGHT}`};

  svg {
    padding: 17px 17px;
  }

  :hover {
    background: ${ColorService.PRIMARY2};
    border: ${`0px solid  ${ColorService.PRIMARY2}`};
    color: ${ColorService.WHITE};
    cursor: pointer;
  }
`;
