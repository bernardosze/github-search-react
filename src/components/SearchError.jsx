import warning from '../assets/warning.svg';

const SearchError = ({ error = '' }) => {
  return (
    <div className="flex justify-center">
      <div className="md:w-96 py-4 bg-slate-700 rounded mt-8 text-center">
        <img className="w-12 mx-auto pb-2" src={warning} alt="Warning" />
        <p>An error ocorred.</p>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default SearchError;
