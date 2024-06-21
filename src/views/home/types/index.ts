export interface ConfigArray {
  title: string;
  componentList: Config[];
}

export interface Config {
  label: string;
  component: string;
  disabled: boolean;
  componentProps: ComponentProps;
  options?: Option[];
  rule?: Rule;
  field?: string;
  icon?: string;
  placeholder?: string;
  defaultValue?: number | string;
  prefixIcon?: string;
  suffixIcon?: string;
}

export interface Rule {
  required: boolean;
  message: string;
  trigger: string[];
  type?: string;
}

export interface Option {
  label: string;
  key: string;
}

export interface ComponentProps {
  dashed?: boolean;
  titlePlacement?: string;
  vertical?: boolean;
  title?: string;
  type?: string;
  filterable?: boolean;
  labelField?: string;
  valueField?: string;
  valueFormat?: string;
}
