import styled from 'styled-components';

import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';

interface IBannerJob {
  text: string;
  disabled?: boolean;
  valid?: boolean;
  onClick: () => void;
}

export const ButtonExample = ({ text, disabled, valid, onClick }: IBannerJob) => (
  <Button onClick={onClick} disabled={disabled} valid={valid}>
    {text}
  </Button>
);

const Button = styled.button<{ valid?: boolean }>`
  padding: 13px 144px;
  color: ${ColorService.WHITE};
  background: #007bff;
  border: 4px solid #0077f7;
  border-radius: 200px;

  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${(props) => (props.valid ? 'red' : 'green')};
  font-family: ${getFontFamily('bold')};

  :disabled {
    background: #ccd5dd;
    color: #254050;
  }
  :hover {
    background: red;
  }
`;
