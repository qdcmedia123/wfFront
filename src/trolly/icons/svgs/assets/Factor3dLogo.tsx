import React, { FC } from "react";
import Icon from "../../icon";
import { IProps } from "../../Icons.interface";

const Factor3dLogo: FC<Partial<IProps>> = (props) => {
  return (
    <Icon {...props}>
      <rect width="102" height="102" fill="url(#logo-3d-factor)" />
      <defs>
        <pattern
          id="logo-3d-factor"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_3605:2135" transform="scale(0.000925926)" />
        </pattern>
        <image
          id="image0_3605:2135"
          width="1080"
          height="1080"
        />
      </defs>
    </Icon>
  );
};

Factor3dLogo.defaultProps = {
  viewBox: "0 0 102 102",
};

export default Factor3dLogo;