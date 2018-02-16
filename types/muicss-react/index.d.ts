// Type definitions for muicss React bindings v09.36
// Project: https://www.muicss.com/
// Definitions by: Samuel Neff <https://github.com/samuelneff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="react" />

declare module "muicss/react" {
    export import Appbar = MuicssReact.Appbar;
    export import Button = MuicssReact.Button;
    export import Checkbox = MuicssReact.Checkbox;
    export import Col = MuicssReact.Col;
    export import Container = MuicssReact.Container;
    export import Divider = MuicssReact.Divider;
    export import Dropdown = MuicssReact.Dropdown;
    export import DropdownItem = MuicssReact.DropdownItem;
    export import Form = MuicssReact.Form;
    export import Input = MuicssReact.Input;
    export import Option = MuicssReact.Option;
    export import Panel = MuicssReact.Panel;
    export import Radio = MuicssReact.Radio;
    export import Row = MuicssReact.Row;
    export import Select = MuicssReact.Select;
    export import Tab = MuicssReact.Tab;
    export import Tabs = MuicssReact.Tabs;
    export import Textarea = MuicssReact.Textarea;
}

declare module 'muicss/lib/react/appbar' {
    export import Appbar = MuicssReact.Appbar;
    export default Appbar;
}

declare module 'muicss/lib/react/button' {
    export import Button = MuicssReact.Button;
    export default Button;
}

declare module 'muicss/lib/react/checkbox' {
    export import Checkbox = MuicssReact.Checkbox;
    export default Checkbox;
}

declare module 'muicss/lib/react/col' {
    export import Col = MuicssReact.Col;
    export default Col;
}

declare module 'muicss/lib/react/container' {
    export import Container = MuicssReact.Container;
    export default Container;
}

declare module 'muicss/lib/react/divider' {
    export import Divider = MuicssReact.Divider;
    export default Divider;
}

declare module 'muicss/lib/react/dropdown' {
    export import Dropdown = MuicssReact.Dropdown;
    export default Dropdown;
}

declare module 'muicss/lib/react/dropdown-item' {
    export import DropdownItem = MuicssReact.DropdownItem;
    export default DropdownItem;
}

declare module 'muicss/lib/react/form' {
    export import Form = MuicssReact.Form;
    export default Form;
}

declare module 'muicss/lib/react/input' {
    export import Input = MuicssReact.Input;
    export default Input;
}

declare module 'muicss/lib/react/option' {
    export import Option = MuicssReact.Option;
    export default Option;
}

declare module 'muicss/lib/react/panel' {
    export import Panel = MuicssReact.Panel;
    export default Panel;
}

declare module 'muicss/lib/react/radio' {
    export import Radio = MuicssReact.Radio;
    export default Radio;
}

declare module 'muicss/lib/react/row' {
    export import Row = MuicssReact.Row;
    export default Row;
}

declare module 'muicss/lib/react/select' {
    export import Select = MuicssReact.Select;
    export default Select;
}

declare module 'muicss/lib/react/tab' {
    export import Tab = MuicssReact.Tab;
    export default Tab;
}

declare module 'muicss/lib/react/tabs' {
    export import Tabs = MuicssReact.Tabs;
    export default Tabs;
}

declare module 'muicss/lib/react/textarea' {
    export import Textarea = MuicssReact.Textarea;
    export default Textarea;
}

declare namespace MuicssReact {
    export class Appbar extends React.Component<DivProps> {}
    export class Button extends React.Component<ButtonProps> {}
    export class Checkbox extends React.Component<CheckboxProps> {}
    export class Col extends React.Component<ColProps> {}
    export class Container extends React.Component<ContainerProps> {}
    export class Divider extends React.Component<DividerProps> {}
    export class Dropdown extends React.Component<DropdownProps> {}
    export class DropdownItem extends React.Component<DropdownItemProps> {}
    export class Form extends React.Component<FormProps> {}
    export class Input extends React.Component<InputProps> {}
    export class Panel extends React.Component<PanelProps> {}
    export class Option extends React.Component<OptionProps> {}
    export class Radio extends React.Component<RadioProps> {}
    export class Row extends React.Component<RowProps> {}
    export class Select extends React.Component<SelectProps> {}
    export class Tab extends React.Component<TabProps> {}
    export class Tabs extends React.Component<TabsProps> {}
    export class Textarea extends React.Component<TextareaProps> {}

    export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        size?: string;
        variant?: string;
    }

    export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
        label?: React.ReactNode;
        autoFocus?: boolean;
        checked?: boolean;
        disabled?: boolean;
        form?: string;
        required?: boolean;
        value?: string | string[] | number;
    }

    export interface ColProps extends DivProps {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        'xs-offset'?: number;
        'sm-offset'?: number;
        'md-offset'?: number;
        'lg-offset'?: number;
        'xl-offset'?: number;
    }

    export interface ContainerProps extends DivProps {
        fluid?: boolean;
    }

    export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {}
    export interface DividerProps extends DivProps {}

    export interface DropdownItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
        link?: string;
        target?: string;
    }

    export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
        onOutsideClick?: React.MouseEventHandler<HTMLDivElement>;

        variant?: string;
        size?: string;
        label?: React.ReactNode;
        alignMenu?: 'left' | 'right';
        disabled?: boolean;
    }

    export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
        inline?: boolean;
    }

    export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
        inputRef?: React.Ref<HTMLInputElement>;
        onLabelClick?: React.MouseEventHandler<HTMLInputElement>;
        hint?: string;
        invalid?: boolean;
        label?: React.ReactNode;
        floatingLabel?: boolean;
    }

    export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    }

    export interface PanelProps extends DivProps {}
    export interface RadioProps extends CheckboxProps {}

    export interface RowProps extends DivProps {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
    }

    export interface SelectProps extends DivProps {
        label?: React.ReactNode;
        readOnly?: boolean;
        useDefault?: boolean;
    }

    export interface TabProps {
        value?: any;
        label?: React.ReactNode;
        onActive?: (tab: Tab) => void;
    }

    export interface TabsProps extends DivProps {
        defaultSelectedIndex?: number;
        selectedIndex?: number;
        justified?: boolean;
    }

    export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
        inputRef?: React.Ref<HTMLTextAreaElement>;
        onLabelClick?: React.MouseEventHandler<HTMLInputElement>;
        hint?: string;
        invalid?: boolean;
        label?: React.ReactNode;
        floatingLabel?: boolean;
    }
}
