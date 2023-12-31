import React,  { useState, useEffect, Suspense } from 'react';
import ClayLayout from '@clayui/layout';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import {ClayPaginationBarWithBasicItems} from '@clayui/pagination-bar';

import SearchResult from '../common/components/search/SearchResult';
import SearchInput from '../common/components/search/SearchInput';
import { findObject } from '../common/services/object';
import FilterSettings from "../common/components/FilterSettings";
import FilterForm from "../common/components/FilterForm";
import {DEFAULT_DELTA, DEFAULT_LABEL_DELTAS, DEFAULT_PAGE, DEFAULT_TOTAL} from "../common/util/constants";
import {spritemapPath} from "../common/services/liferay";

const Search = () => {

	const [delta, setDelta] = useState(DEFAULT_DELTA);
	const [total, setTotal] =  useState(DEFAULT_TOTAL);
	const [page, setPage] = useState(DEFAULT_PAGE);
	const [error, setError] = useState(null);

	const [url, setURL] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
	const [filters, setFilters] = useState([]);
	const [searchResults, setSearchResults] = useState(null);

	const [showSettings, setShowSettings] = useState(false);
	const [settings, setSettings] = useState({
		selectedObject: null,
		selectedFields: [],
		selectableFields: []
	});

	const handleSettings = (newSettings) => {

		setSettings((prevSettings) => ({
			...prevSettings,
			...newSettings,
		}));

		setFilters([]);
		setURL(newSettings.selectedObject.restContextPath || '');
	};

	const handleSearchKeywordChange = (event) => {
		setSearchKeyword(event.target.value);
	};

	const handleSearch = async (resetPage = false) => {
		try {
			const data = await findObject(url, searchKeyword, filters, page, delta);
			const {items, totalCount} = data;

			setSearchResults(items);
			setTotal(totalCount);
			if(resetPage) {
				setPage(DEFAULT_PAGE)
			}
			setError(null);
		} catch (error) {
			setError(error.message);
		}
	};

	const handleDeltaChange = (value) => {
		setDelta(value);
		setPage(DEFAULT_PAGE);
	}

	const handlePageChange = (value) => {
		setPage(value);
	}

	const handleFilterChange = (property, type, values) => {
		const newFilters = filters.filter((filter) => filter.property !== property);

		if(type && values?.length > 0) {
			setFilters(prevState => [...newFilters, {
				property: property,
				type: type,
				values: values
			}])
		} else {
			setFilters([...newFilters]);
		}
	}

	useEffect(() => {
		if(url !== '') {
			handleSearch()
		}
	}, [delta, page, filters,url]);

	return (
		<div>
			{Liferay.ThemeDisplay.isSignedIn() && (
				<Suspense fallback={<ClayLoadingIndicator displayType="secondary" size="sm" />}>
					<ClayLayout.Container view>
                        <FilterSettings
                            settings={settings}
                            onSettings={handleSettings}
                        />
                        {settings.selectedObject && (
                            <>
                                <SearchInput handleSearchChange={handleSearchKeywordChange} handleSearchSubmit={handleSearch}/>
                                <div class="form-group">
                                    <FilterForm selectedFields={settings.selectedFields} onUpdateFilter={handleFilterChange}/>
                                </div>
                                {error && <p>Error: {error}</p>}
                                {searchResults?.length === 0 && <p>No results found </p>}
                                {searchResults?.length > 0 &&
                                    <>
                                        <SearchResult items={searchResults}/>
                                        <ClayPaginationBarWithBasicItems
                                            activeDelta={delta}
                                            active={page}
                                            deltas={DEFAULT_LABEL_DELTAS}
                                            ellipsisBuffer={3}
                                            onDeltaChange={handleDeltaChange}
                                            onActiveChange={handlePageChange}
                                            spritemap={spritemapPath}
                                            totalItems={total}
                                        />
                                    </>
                                }
                            </>
                        )}
					</ClayLayout.Container>
				</Suspense>
			)}
		</div>
	);
}

export default Search;