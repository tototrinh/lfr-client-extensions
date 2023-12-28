import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from '@clayui/button';
import ClayIcon from "@clayui/icon";
import { spritemapPath } from "../services/liferay/liferay";

const SearchInput = ({handleSearchChange, handleSearchSubmit}) => {
	return (
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem onChange={handleSearchChange} prepend>
				<ClayInput placeholder="Search by Keywords" type="text" />
				</ClayInput.GroupItem>
				<ClayInput.GroupItem append shrink>
				<ClayButton onClick={handleSearchSubmit}  displayType="secondary" type="submit">
					<ClayIcon symbol="search" spritemap={spritemapPath} />				
				</ClayButton>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
	);
};

export default SearchInput;