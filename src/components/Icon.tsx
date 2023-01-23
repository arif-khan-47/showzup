import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color?: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const EntypoIcon = ({size, name, color}: IconProps) => (
  <Entypo name={name} size={IconSizes[size]} color={color} />
);

