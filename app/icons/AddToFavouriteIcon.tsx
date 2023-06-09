import React, { FC } from "react";
import { Path, Svg } from "react-native-svg";

interface IAddToFavouriteIconProps {
  color: string;
}

const AddToFavouriteIcon: FC<IAddToFavouriteIconProps> = ({ color }) => {
  return (
    <Svg width="19" height="17" viewBox="0 0 19 17" fill="none">
      <Path
        d="M9.33241 2.2588C8.41161 1.19114 7.10739 0.500552 5.58334 0.500543C2.61997 0.500526 0.5 2.84772 0.5 6.00054C0.5 7.92227 1.48415 9.80005 3.01376 11.5388C4.54831 13.2832 6.67556 14.9384 9.06953 16.4253C9.23145 16.5259 9.43647 16.5256 9.59816 16.4247C11.988 14.9324 14.1141 13.2362 15.649 11.4737C17.1755 9.72069 18.1667 7.84425 18.1667 6.00054C18.1667 2.85522 16.0514 0.456188 13.0759 0.500599C11.5626 0.523185 10.2523 1.19252 9.33241 2.2588Z"
        fill={color}
        fill-opacity="0.24"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default AddToFavouriteIcon;
