import * as React from 'react';
import MUIModal from '@material-ui/core/Modal';
import { useStyles } from './Modal.style';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

interface Props {
  isOpen: boolean;
  children: React.ReactElement;
  onClose?: (event: any, reason: 'backdropClick' | 'escapeKeyDown') => void;
}

const Modal: React.FunctionComponent<Props> = props => {
  const classes = useStyles(props);
  const { isOpen, onClose } = props;

  return (
    <div>
      <MUIModal open={isOpen} onClose={onClose}>
        <div style={getModalStyle()} className={classes.root}>
          {props.children}
        </div>
      </MUIModal>
    </div>
  );
};

export default Modal;
