// COMPONENTS
import SearchError from './components/SearchError';
import SearchForm from './components/SearchForm';
import SearchIncomplete from './components/SearchIncomplete';
import SearchList from './components/SearchList';
import SearchType from './components/SearchType';
import Spinner from './components/Spinner';

// UTILS
import { useState } from 'react';

function App() {
  const [type, setType] = useState('user');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [incompleteResults, setIncompleteResults] = useState(null);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const onQueryChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    window.history.replaceState(null, '', '');
    setLoading(true);
    setPage(1);
    fetch(
      `https://api.github.com/search/users?q=${query}+type:${type}&per_page=25&page=1`,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          Authorization: `Bearer: ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(
        result => {
          setLoading(false);
          setTotalCount(result.total_count);
          setIncompleteResults(result.incomplete_results);
          setItems(result.items);
          window.history.replaceState(null, '', `/search/${query}`);
        },
        error => {
          setLoading(false);
          setError(error);
        }
      );
  };

  const onPageChange = (progression = 1) => {
    setLoading(true);
    fetch(
      `https://api.github.com/search/users?q=${query}+type:${type}&per_page=25&page=${
        page + progression
      }`,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          Authorization: `Bearer: ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(
        result => {
          setLoading(false);
          setTotalCount(result.total_count);
          setIncompleteResults(result.incomplete_results);
          setPage(page => page + progression);
          setItems(result.items);
        },
        error => {
          setLoading(false);
          setError(error);
        }
      );
  };

  return (
    <main className="font-sans">
      <div className="container h-full flex flex-auto flex-col mx-auto py-8">
        <SearchType value={type} setValue={setType} />
        <SearchForm
          query={query}
          onQueryChange={onQueryChange}
          onSubmit={onSubmit}
        />
        <section className="flex flex-col justify-center" name="result">
          {loading ? (
            <Spinner />
          ) : incompleteResults ? (
            <SearchIncomplete />
          ) : error ? (
            <SearchError error={error} />
          ) : items ? (
            <SearchList
              items={items}
              type={type}
              totalCount={totalCount}
              page={page}
              onPageChange={onPageChange}
            />
          ) : null}
        </section>
      </div>
    </main>
  );
}

export default App;
