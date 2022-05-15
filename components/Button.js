const Button = (props) => {
  return (
    <button className="py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none">
      {props.text}
    </button>
  );
};

export default Button;
