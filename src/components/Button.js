const Button = ({ start, status, stop, reset, resume }) => {
  return (
    <div className="flex justify-center mt-16 font-mono">
      {status === 0 ? (
        <button
          className="border-2 border-green-600 text-green-600 font-medium px-20 py-2 text-2xl hover:bg-green-600 hover:text-white transition ease-in-out duration-300"
          onClick={start}
        >
          Start
        </button>
      ) : (
        " "
      )}

      {status === 1 ? (
        <div>
          <button
            className="mr-2 border-2 border-red-600 text-red-600 font-medium px-20 py-2 text-2xl hover:bg-red-300 hover:text-white transition ease-in-out duration-300"
            onClick={stop}
          >
            Stop
          </button>
          <button
            className="border-2 border-yellow-600 text-yellow-600 font-medium px-20 py-2 text-2xl hover:bg-yellow-300 hover:text-white transition ease-in-out duration-300"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      ) : (
        " "
      )}

      {status === 2 ? (
        <div>
          <button
            className="mr-2 border-2 border-green-600 text-green-600 font-medium px-20 py-2 text-2xl hover:bg-green-300 hover:text-white transition ease-in-out duration-300"
            onClick={resume}
          >
            Resume
          </button>
          <button
            className="border-2 border-yellow-600 text-yellow-600 font-medium px-20 py-2 text-2xl hover:bg-yellow-300 hover:text-white transition ease-in-out duration-300"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Button;
