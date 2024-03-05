const Display = ({ ms, s, m, h }) => {
  return (
    <div className="flex gap-5 justify-center items-center mt-14 font-mono">
      <div className="flex w-20 h-20 rounded-2xl bg-green-600 justify-center items-center text-white text-2xl">
        {h >= 10 ? h : "0" + h}
      </div>
      &nbsp;:&nbsp;
      <div className="flex w-20 h-20 rounded-2xl bg-green-600 justify-center items-center text-white text-2xl">
        {m >= 10 ? m : "0" + m}
      </div>
      &nbsp;:&nbsp;
      <div className="flex w-20 h-20 rounded-2xl bg-green-600 justify-center items-center text-white text-2xl">
        {s >= 10 ? s : "0" + s}
      </div>
      &nbsp;:&nbsp;
      <div className="flex w-20 h-20 rounded-2xl bg-green-600 justify-center items-center text-white text-2xl">
        {ms >= 10 ? ms : "0" + ms}
      </div>
      &nbsp;&nbsp;
    </div>
  );
};

export default Display;
