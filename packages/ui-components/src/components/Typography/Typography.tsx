import * as React from 'react';
import MaterialTypography, { TypographyProps } from '@material-ui/core/Typography';

const Typography: React.FunctionComponent<TypographyProps> = props => {
  const { children, ...rest } = props;
  return (
    <MaterialTypography color="textPrimary" {...rest}>
      {children}
    </MaterialTypography>
  );
};

export default Typography;
