import React,  { useState, useEffect, Suspense } from 'react';
import api from '../common/services/liferay/api.js';
import { buildParams } from '../common/util/URLBuilderUtil';
import ClayLayout from '@clayui/layout';
import SearchResult from '../common/components/SearchResult.js';
import SearchInput from '../common/components/SearchInput.js';
import ClayLoadingIndicator from '@clayui/loading-indicator';

const Search = () => {
	const [searchKeyword, setSearchKeyword] = useState('');
	const [error, setError] = useState(null);
	const [filters, setFilters] = useState([{
		type: 'multiple-picklist',
		property: 'multiplePicklistField',
		values: [
			"item1",
			"item2"
		]
	}, {
		type: 'numeric',
		property: 'abc',
		values: [0, 50]
	}]);
    const [searchResults, setSearchResults] = useState(null);
	const [url, setURL] = useState('o/c/myobjects/')

	const handleSearchKeywordChange = (event) => {
        setSearchKeyword(event.target.value);
    };

	const handleSearch = async () => {
		try {
			const params = buildParams(searchKeyword, filters);

			const data = await api("GET",`${url}?${params}`);

			setSearchResults(data.items);
			setError(null);
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div>
			{Liferay.ThemeDisplay.isSignedIn() && (
				<Suspense fallback={<ClayLoadingIndicator displayType="secondary" size="sm" />}>
					<ClayLayout.Container view>
						<SearchInput handleSearchChange={handleSearchKeywordChange} handleSearchSubmit={handleSearch} />
							{error && <p>Error: {error}</p>}
							{searchResults && searchResults.length == 0 ? <p>No results found </p>: <SearchResult items={searchResults} />}
						</ClayLayout.Container>
				</Suspense>
			)}
		</div>
	);
}

export default Search;