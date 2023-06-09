import { View, Text } from "react-native";
import React, { FC } from "react";
import { Path, Svg } from "react-native-svg";
import { IIcon } from "../types/icons/icons.interface";

const ProfileIcon: FC<IIcon> = (props) => {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 20 21" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 5.25C6 3.17893 7.67893 1.5 9.75 1.5C11.8211 1.5 13.5 3.17893 13.5 5.25C13.5 7.32107 11.8211 9 9.75 9C7.67893 9 6 7.32107 6 5.25ZM9.75 0C6.8505 0 4.5 2.3505 4.5 5.25C4.5 8.1495 6.8505 10.5 9.75 10.5C12.6495 10.5 15 8.1495 15 5.25C15 2.3505 12.6495 0 9.75 0ZM1.5 19.25C1.5 15.7982 4.29822 13 7.75 13H11.75C15.2018 13 18 15.7982 18 19.25V20.25C18 20.6642 18.3358 21 18.75 21C19.1642 21 19.5 20.6642 19.5 20.25V19.25C19.5 14.9698 16.0302 11.5 11.75 11.5H7.75C3.4698 11.5 0 14.9698 0 19.25V20.25C0 20.6642 0.335786 21 0.75 21C1.16421 21 1.5 20.6642 1.5 20.25V19.25Z"
        fill={props.color}
        fill-opacity="0.6"
      />
    </Svg>
  );
};

export default ProfileIcon;
