import { Body, Cell, Head, Row, Table } from "@clayui/core";
import { useEffect, useState } from "react";

const excludeCode = ["externalReferenceCode", "id","actions", "creator", "status", "_key", "keywords"]

const SearchResult = ({items}) => {
	const [heads, setHeads] = useState([]);

	const generateColumns = (items) => {
		if(items && items.length > 0) {
			return Object.keys(items[0]).map((head) => {
				return {"id": head, "name": head};
			}).filter((column) => !excludeCode.includes(column.id));
		}

		return [];
	}

	useEffect(() => {
		const columns = generateColumns(items);

		setHeads(columns);
	},[items])

	return(
		<div>
			<Table>
				<Head
					items={heads}
				>
					{column => (
						<Cell key={column.id}>
							{column.name}
						</Cell>
					)}
				</Head>

				<Body items={items}>
					{row => (
						<Row items={heads}>
							{column => (
								<Cell key={row.id + ":" + column.id}>{JSON.stringify(row[column.id])}</Cell>
							)}
						</Row>
					)}
				</Body>
			</Table>
		</div>
	);
};

export default SearchResult;