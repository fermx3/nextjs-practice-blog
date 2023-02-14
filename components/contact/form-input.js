import classes from './form-input.module.css';

const FormInput = ({ label, type, id, value, onChange, rows }) => {
  if (rows) {
    return (
      <div className={classes.control}>
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    );
  }

  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} required value={value} onChange={onChange} />
    </div>
  );
};

export default FormInput;
