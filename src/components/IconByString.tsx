import React, { FC } from 'react';

import * as Icons  from "@mui/icons-material";

type IconNames = keyof typeof Icons
type CustomIconProps = {
  iconName: IconNames
}



export const IconByString: FC<CustomIconProps> = ({
    iconName,
  }) => {
    const Icon = Icons[iconName]
    return <Icon />
  }
