const SuggestionsLoading: React.FC<{ arr: number[] }> = ({ arr }) => {
  return (
    <ul className="w-full dark:text-white flex flex-col gap-y-2 justify-center items-center">
      {arr?.map((ele) => {
        return (
          <li
            key={ele}
            className={`h-10 w-[95%] lg:w-[75%] ring-1 ring-black/10 dark:ring-white/10 py-1 px-2 rounded-md animate-pulse`}>
            <div className="flex justify-between items-center gap-x-2 w-full h-full">
              <div className="w-3/4 flex gap-x-2 justify-start items-center">
                <div className="w-8 h-8 bg-black/5 rounded-full"></div>
                <h2 className="text-sm shrink capitalize font-bold opacity-5 text-black">
                  ===========
                </h2>
              </div>
              <span className="opacity-5 text-xs">=======</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default SuggestionsLoading;
