import SearchItem from './SearchItem';
import SearchPagination from './SearchPagination';

const searchList = ({ items = [], type, totalCount, page, onPageChange }) => {
  if (items.length > 0) {
    return (
      <>
        <ul
          name={type}
          className="w-4/5 md:w-96 mx-auto mb-4 bg-slate-700 rounded">
          {items.map(item => {
            return <SearchItem key={item.id} item={item} />;
          })}
        </ul>
        <SearchPagination
          totalCount={totalCount}
          page={page}
          onPageChange={onPageChange}
        />
      </>
    );
  } else {
    return null;
  }
};

export default searchList;
