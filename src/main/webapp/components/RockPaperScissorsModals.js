import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Container, Icon } from 'semantic-ui-react';

import { ModalWrapper } from 'main/webapp/components/wrappers/ModalWrapper';

export const SuccessModal = ({ open, onConfirm, onDeny }) => {
  return (
    <ModalWrapper
      open={open}
      header={<FormattedMessage id={'app.rockPaperScissors.levelSuccess.header'} />}
      content={<FormattedMessage id={'app.rockPaperScissors.levelSuccess.content'} />}
      actions={
        <Container>
          <Button basic color='red' inverted onClick={onDeny}>
            <Icon name='remove' />
            <FormattedMessage id={'app.rockPaperScissors.levelSuccess.deny'} />
          </Button>
          <Button color='green' inverted onClick={onConfirm}>
            <Icon name='checkmark' />
            <FormattedMessage id={'app.rockPaperScissors.levelSuccess.confirm'} />
          </Button>
        </Container>
      }
    />
  );
};

export const FailureModal = ({ open, onConfirm }) => {
  return (
    <ModalWrapper
      open={open}
      header={<FormattedMessage id={'app.rockPaperScissors.levelFailure.header'} />}
      content={<FormattedMessage id={'app.rockPaperScissors.levelFailure.content'} />}
      actions={
        <Container>
          <Button inverted onClick={onConfirm}>
            <Icon name='checkmark' />
            <FormattedMessage id={'app.rockPaperScissors.levelFailure.confirm'} />
          </Button>
        </Container>
      }
    />
  );
};

export const LevelsCompleteModal = ({ open, onConfirm }) => {
  return (
    <ModalWrapper
      open={open}
      header={<FormattedMessage id={'app.rockPaperScissors.levelsComplete.header'} />}
      content={<FormattedMessage id={'app.rockPaperScissors.levelsComplete.content'} />}
      actions={
        <Container>
          <Button color='green' inverted onClick={onConfirm}>
            <Icon name='checkmark' />
            <FormattedMessage id={'app.rockPaperScissors.levelsComplete.confirm'} />
          </Button>
        </Container>
      }
    />
  );
};
