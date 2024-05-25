// eslint-disable-next-line react/prop-types
const Button = ({ name, className, type, action = () => {} }) => {
  return (
    <>
      <button className={className} type={type} onClick={() => action()}>
        {name}
      </button>
    </>
  );
};

export default Button;
