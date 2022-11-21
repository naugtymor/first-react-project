import s from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <div>
                {hasError && <span>{"Some error"}</span>}
            </div>
        </div>
    )
}