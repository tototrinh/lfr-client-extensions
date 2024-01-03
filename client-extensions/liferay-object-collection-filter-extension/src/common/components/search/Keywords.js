import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from '@clayui/button';
import ClayIcon from "@clayui/icon";
import { spritemapPath } from "../../services/liferay";

const Keywords = ({handleChange, keywords}) => {
	return (
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem onChange={handleChange} prepend>
				<ClayInput placeholder="Search by Keywords" type="text" value={keywords} />
				</ClayInput.GroupItem>
				<ClayInput.GroupItem append shrink>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
	);
};

export default Keywords;