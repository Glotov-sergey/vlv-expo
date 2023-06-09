import { FC } from "react";
import { Defs, Path, Pattern, Rect, Svg } from "react-native-svg";
import { IIcon } from "../types/icons/icons.interface";

const HomeIcon: FC<IIcon> = (props) => {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 25 25" fill="none">
      <Rect
        width="24"
        height="24"
        transform="translate(0.699951 0.507812)"
        fill="url(#pattern0)"
      />
      <Path
        d="M18.2 3.50781C20.85 3.50781 21.7 4.35777 21.7 7.00781C21.7 9.65786 20.85 10.5078 18.2 10.5078C15.5499 10.5078 14.7 9.65786 14.7 7.00781C14.7 4.35777 15.5499 3.50781 18.2 3.50781Z"
        fill={props.color}
      />
      <Path
        d="M7.19995 3.50781C9.84999 3.50781 10.7 4.35777 10.7 7.00781C10.7 9.65786 9.84999 10.5078 7.19995 10.5078C4.54991 10.5078 3.69995 9.65786 3.69995 7.00781C3.69995 4.35777 4.54991 3.50781 7.19995 3.50781Z"
        fill={props.color}
      />
      <Path
        d="M7.19995 14.5078C9.84999 14.5078 10.7 15.3578 10.7 18.0078C10.7 20.6579 9.84999 21.5078 7.19995 21.5078C4.54991 21.5078 3.69995 20.6579 3.69995 18.0078C3.69995 15.3578 4.54991 14.5078 7.19995 14.5078Z"
        fill={props.color}
      />
      <Path
        d="M18.2 14.5078C20.85 14.5078 21.7 15.3578 21.7 18.0078C21.7 20.6579 20.85 21.5078 18.2 21.5078C15.5499 21.5078 14.7 20.6579 14.7 18.0078C14.7 15.3578 15.5499 14.5078 18.2 14.5078Z"
        fill={props.color}
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        ></Pattern>
      </Defs>
    </Svg>
  );
};

export default HomeIcon;
