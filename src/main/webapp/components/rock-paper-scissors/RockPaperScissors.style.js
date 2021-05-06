import { Button, Image } from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  margin: 5px !important;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  max-height: 100%;
`;
