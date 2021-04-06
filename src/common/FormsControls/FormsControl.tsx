import React, {FC} from "react";

export const renderField:FC<any> = ({
                         input,
                         label,
                         type,
                         meta: { touched, error, warning },
    ...props
                     }) => (
    <div>
        <label>{label}</label>
        <div>
            <textarea className={props.textareClass} {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)

export const renderFieldInput:FC<any> = ({
                                        input,
                                        label,
                                        type,
                                        meta: { touched, error, warning }
                                    }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)