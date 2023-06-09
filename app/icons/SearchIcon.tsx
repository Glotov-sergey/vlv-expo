import React, { FC } from "react";
import { Path, Svg } from "react-native-svg";

interface ISearchIcon {
  color?: string;
}

const SearchIcon: FC<ISearchIcon> = ({ color }) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z"
        stroke={color ? color : "#A79F9B"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;
