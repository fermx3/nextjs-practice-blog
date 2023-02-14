import classes from './form-section.module.css';

const FormSection = ({ children }) => {
  return <section className={classes.contact}>{children}</section>;
};

export default FormSection;
