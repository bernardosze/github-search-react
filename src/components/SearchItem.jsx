const SearchItem = ({ item = {} }) => {
  return (
    <li className="flex my-3">
      <div className="bg-slate-600 ml-3 rounded-l-full">
        <img
          className="rounded-full"
          src={item.avatar_url}
          alt={item.login}
          width="72"
          height="72"
        />
      </div>
      <ul className="bg-slate-600 text-slate-200 w-3/4 mr-2 pl-2 rounded-r-lg flex flex-col justify-end pb-2">
        <li className="text-base font-bold hover:text-fuchsia-600 transition">
          <a href={item.html_url}>{item.login}</a>{' '}
        </li>
        <li className="font-mono text-xs truncate text-slate-400">
          {item.html_url}
        </li>
      </ul>
    </li>
  );
};

export default SearchItem;
