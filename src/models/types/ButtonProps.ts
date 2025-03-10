import ComponentProps from '../types/ComponentProps'

export default interface ButtonProps extends ComponentProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  screenReaderText?: string;
  active?: boolean;
  name: string;
  location: string;
}
