export interface InputControlHandlers {
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
  onChange?: <T extends {}>(e: React.ChangeEvent<T>) => void;
  onClick?: () => void;
}

export enum Intent {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary'
}
