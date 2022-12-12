import warning from '../assets/warning.svg';

const SearchIncomplete = () => {
  return (
    <section className="flex justify-center">
      <div className="w-4/5 md:w-96 py-4 bg-slate-700 rounded text-center">
        <img className="w-12 mx-auto pb-2" src={warning} alt="Warning" />
        <p>Cannot process your search as typed.</p>
        <p>Please change the search and try again.</p>
      </div>
    </section>
  );
};

export default SearchIncomplete;
