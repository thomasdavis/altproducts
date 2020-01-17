import { Component } from "react";
import * as Icons from "./Svgs";

// ## Usage

// const AccountIcon = styled(Icon).attrs({ width: '44px' })`
//   fill: green;
// `;
//
// <AccountIcon icon="CaretUp" />

class Icon extends Component {
  render() {
    const { className, icon, width, color } = this.props;
    const size = width || "32px";
    const defaultKey = "Hamburger";
    const IconComponent = Icons[icon] || Icons[defaultKey];
    return (
      <IconComponent
        className={className}
        fill={color}
        width={size}
        height={size}
        preserveAspectRatio="none"
      />
    );
  }
}
export default Icon;
