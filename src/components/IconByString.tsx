// NATIVE
import { FC } from 'react';

// INSTALLED
import * as Icons  from "@mui/icons-material";

// CUSTOM


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
