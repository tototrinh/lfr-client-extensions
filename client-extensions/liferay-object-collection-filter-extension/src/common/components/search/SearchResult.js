import { Body, Cell, Head, Row, Table } from "@clayui/core";
import { useEffect, useState } from "react";

const SearchResult = ({columnHeaders, items}) => {

    const getCellValue = (value) => {
       return typeof value === 'object' && value !== null ? value.name : value;
    }

	return(
		<div>
			<Table>
				<Head
					items={columnHeaders}
				>
					{column => (
						<Cell key={column.value}>
							{column.label}
						</Cell>
					)}
				</Head>

				<Body items={items}>
					{row => (
						<Row items={columnHeaders}>
							{column => (
								<Cell key={column.value}>{getCellValue(row[column.value])}</Cell>
							)}
						</Row>
					)}
				</Body>
			</Table>
		</div>
	);
};

export default SearchResult;