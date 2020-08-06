import iconDir from "./icon.svg";

export default function getIcon(iconName) {
    return `${iconDir}#icon-${iconName}`;
}
