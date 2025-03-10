import ButtonProps from '../types/ButtonProps'

export default interface PrimaryButtonProps extends ButtonProps {
  inverted?: boolean;
  name: string;
  location: string;
}
