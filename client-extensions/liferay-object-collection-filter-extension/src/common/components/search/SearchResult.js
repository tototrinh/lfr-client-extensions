import { Body, Cell, Head, Row, Table } from "@clayui/core";
import { useEffect, useState } from "react";

const SearchResult = ({columnHeaders, items}) => {

	return (
        <Table>
            <Head items={columnHeaders}>
                {(column) => (
                    <Cell key={column.value}>{column.label}</Cell>
                )}
            </Head>
                <Body items={items}>
                    {(row) => (
                        <Row items={columnHeaders}>
                            {(column) => (
                                <Cell key={column.value}>{getCellValue(row[column.value])}</Cell>
                            )}
                        </Row>
                    )}
            </Body>
        </Table>
      );
};

export default SearchResult;

const getCellValue = (value) => {
    if (typeof value === "string" || typeof value === "number") return value;
    if (typeof value === "object") return value?.name || "";
    if (typeof value === "boolean") return value ? "True" : "False";
    return "";
}