import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { TextField, ITextFieldProps, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { HookFormProps } from './HookFormProps';

const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: '100%' } };

export const ControlledTextField: FC<HookFormProps & ITextFieldProps> = props => {
    const prop = props;
    return (
        <Controller
            name={prop.name}
            control={prop.control}
            rules={prop.rules}
            defaultValue={(prop.defaultValue as string) || ''}
            render={({
                field: { onChange, onBlur, name: fieldName, value },
                fieldState: { error },
            }) => (
                <TextField
                    {...prop}
                    onChange={onChange}
                    multiline={prop.multiline}
                    value={value as string}
                    onBlur={onBlur}
                    name={fieldName}
                    errorMessage={error && error.message}
                    styles={prop.styles ? prop.styles : textFieldStyles}
                />
            )}
        />
    );
};
