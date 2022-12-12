const SearchForm = ({ query, onQueryChange, onSubmit }) => {
  return (
    <section className="flex justify-center mb-4">
      <form className="w-4/5 md:w-96 bg-slate-700 rounded" onSubmit={onSubmit}>
        <div className="flex justify-center my-4">
          <label htmlFor="searchInput" className="mr-2 text-slate-200">
            Search:
          </label>
          <input
            id="searchInput"
            type="text"
            className="rounded px-1"
            value={query}
            onChange={onQueryChange}
          />
        </div>
        <div className="flex justify-center pb-4">
          <button
            type="submit"
            className="px-8 py-1 rounded-sm bg-fuchsia-600 uppercase font-bold text-slate-200">
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
