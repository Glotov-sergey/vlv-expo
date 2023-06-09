import { FC } from "react";
import { ClipPath, Defs, G, Path, Pattern, Rect, Svg } from "react-native-svg";
import { IIcon } from "../types/icons/icons.interface";

const CatalogIcon: FC<IIcon> = (props) => {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 25 25" fill="none">
      <G clip-path="url(#clip0_921_133385)">
        <Rect
          width="24"
          height="24"
          transform="translate(0.0999756 0.507812)"
          fill="url(#pattern0)"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.7645 6.86659C20.3057 3.73821 16.5871 2.38474 13.4587 3.84353C10.3304 5.30231 8.97688 9.02094 10.4357 12.1493C11.8945 15.2777 15.6131 16.6312 18.7415 15.1724C21.8698 13.7136 23.2233 9.99496 21.7645 6.86659ZM12.8248 2.48407C16.704 0.675174 21.3151 2.35348 23.124 6.23266C24.8259 9.88254 23.4408 14.1804 20.04 16.1824L22.2737 20.973C22.4488 21.3484 22.2864 21.7947 21.911 21.9697C21.5355 22.1448 21.0893 21.9823 20.9143 21.6069L18.6805 16.8163C14.9608 18.1346 10.7782 16.4331 9.07621 12.7832C7.26731 8.90406 8.94562 4.29296 12.8248 2.48407ZM0.349976 4.50793C0.349976 4.09372 0.685762 3.75793 1.09998 3.75793H6.09998C6.51419 3.75793 6.84998 4.09372 6.84998 4.50793C6.84998 4.92214 6.51419 5.25793 6.09998 5.25793H1.09998C0.685762 5.25793 0.349976 4.92214 0.349976 4.50793ZM0.349976 9.50793C0.349976 9.09372 0.685762 8.75793 1.09998 8.75793H4.09998C4.51419 8.75793 4.84998 9.09372 4.84998 9.50793C4.84998 9.92214 4.51419 10.2579 4.09998 10.2579H1.09998C0.685762 10.2579 0.349976 9.92214 0.349976 9.50793ZM0.349976 14.5079C0.349976 14.0937 0.685762 13.7579 1.09998 13.7579H6.09998C6.51419 13.7579 6.84998 14.0937 6.84998 14.5079C6.84998 14.9221 6.51419 15.2579 6.09998 15.2579H1.09998C0.685762 15.2579 0.349976 14.9221 0.349976 14.5079Z"
          fill={props.color}
          fill-opacity="0.6"
        />
      </G>
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        ></Pattern>
        <ClipPath id="clip0_921_133385">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.0999756 0.507812)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CatalogIcon;
