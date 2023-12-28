import { Body, Cell, Head, Row, Table } from "@clayui/core";
import { useEffect, useState } from "react";

const excludeCode = ["externalReferenceCode", "id","actions", "creator", "status", "_key", "keywords"]

const SearchResult = ({items}) => {
	const [heads, setHeads] = useState([]);

	useEffect(() => {
		let columns = [];

		if(items && items.length > 0) {
			columns = Object.keys(items[0]).map((head) => {
				return {"id": head, "name": head};
			});
		}

		columns = columns.filter((column) => !excludeCode.includes(column.id));

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