import s from './Input.module.scss';
const Input = ({InputValue,onInputChange}) => {

  const handleChange = (e) => { 
  onInputChange(e);
  };
  return (
    <>
      <input type='text' className={s.input} value={InputValue} onChange={(e) => handleChange(e) } />
    </>
  );
};

export default Input;