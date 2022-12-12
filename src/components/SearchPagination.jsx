import { useMemo } from 'react';

const SearchPagination = ({ page = 1, totalCount = 25, onPageChange }) => {
  const pageCount = useMemo(() => Math.ceil(totalCount / 25), [totalCount]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-slate-400">
        Showing page{' '}
        <span className="font-semibold text-slate-200">{page}</span> of{' '}
        <span className="font-semibold text-slate-200">{pageCount}</span>
      </p>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={() => onPageChange(-1)}
          className={`px-4 py-2 text-sm font-medium rounded-l bg-slate-700 ${
            page == 1
              ? 'cursor-not-allowed text-slate-400 hover:bg-fuchsia-700'
              : 'text-slate-200 hover:bg-fuchsia-600'
          }`}
          disabled={page == 1}>
          Prev
        </button>
        <button
          onClick={() => onPageChange()}
          className={`px-4 py-2 text-sm font-medium border-0 border-l border-slate-400 rounded-r bg-slate-700 ${
            page == pageCount
              ? 'cursor-not-allowed text-slate-400 hover:bg-fuchsia-700'
              : 'text-slate-200 hover:bg-fuchsia-600'
          }`}
          disabled={page == pageCount}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchPagination;
