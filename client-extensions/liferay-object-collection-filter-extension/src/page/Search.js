import React, {useState, useEffect, Suspense} from 'react';
import ClayLayout from '@clayui/layout';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import {ClayPaginationBarWithBasicItems} from '@clayui/pagination-bar';
import { spritemapPath } from '../common/services/liferay';
import {
  DEFAULT_DELTA,
  DEFAULT_LABEL_DELTAS,
  DEFAULT_PAGE,
  DEFAULT_TOTAL,
} from '../common/util/constants';
import { findObject } from '../common/services/object';

import FilterForm from "../common/components/search/FilterForm";
import SearchResult from '../common/components/search/SearchResult';
import Keywords from '../common/components/search/Keywords';
import FilterSettings from "../common/components/setting/FilterSettings";
import ClayButton from "@clayui/button";

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

	const handleFilterChange =(property, type, values) => {
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
	};

	const resetFilter = () => {
		setFilters([]);
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
                                <Keywords handleSearchChange={handleSearchKeywordChange} handleSearchSubmit={handleSearch}/>
                                <div class="form-group">
                                    <FilterForm selectedFields={settings.selectedFields} onUpdateFilter={handleFilterChange} filters={filters}/>
									<ClayButton displayType="secondary" onClick={resetFilter}>
										Clear
									</ClayButton>
                                </div>
                                {searchResults?.length === 0 && <p>No results found </p>}
                                {searchResults?.length > 0 &&
                                    <>
                                        <SearchResult columnHeaders={settings.selectedObject.objectFields} items={searchResults}/>
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