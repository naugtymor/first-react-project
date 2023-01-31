import s from './FormsControls.module.scss';

export const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div className={s.element}>
                <Element {...input} {...props} />
            </div>
            <div>
                {hasError && <span> {meta.error} </span>}
            </div>
        </div>
    );
};
