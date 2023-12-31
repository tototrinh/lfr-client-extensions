/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useState, useEffect } from 'react';
import ClayAlert from '@clayui/alert';
import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import ClayModal from '@clayui/modal';
import { useModal } from '@clayui/modal';
import FilterSettingsModal from './FilterSettingsModal';
import SelectObjectDefinition from './SelectObjectDefinition';
import SelectObjectFields from './SelectObjectFields';
import { spritemapPath } from '../services/liferay';

const FilterSettings = ({ settings, onSettings }) => {

    const { observer, onOpenChange, open } = useModal();
    const [ selectedObject, setSelectedObject ] = useState(settings.selectedObject);

    const handleSave = (newSettings) => {
        onSettings(newSettings);
        setSelectedObject(newSettings.selectedObject);
        onOpenChange(false);
    };

    const handleClose = () => {
        onOpenChange(false);
    }

    return (
    <>
        {open ? (
            <FilterSettingsModal
                observer={observer}
                initialSettings={settings}
                onSave={handleSave}
                onClose={() => onOpenChange(false)}
            />
        ) : selectedObject ? (
            <div className="form-group">
                <h3 class="autofit-row sheet-subtitle">
                    <span class="autofit-col autofit-col-expand">
                        <span class="heading-text">{selectedObject.name}</span>
                    </span>
                    <span class="autofit-col">
                        <span class="">
                            <ClayButtonWithIcon
                                aria-label="Settings"
                                spritemap={spritemapPath}
                                symbol="cog"
                                title="Settings"
                                displayType="secondary"
                                onClick={() => onOpenChange(true)}
                            />
                        </span>
                    </span>
                </h3>
            </div>
        ) : (
            <ClayAlert displayType="info" spritemap={spritemapPath} title="Info">
                <span>This application is not visible to users yet. </span>
                <ClayButton
                    className="btn-sm align-baseline border-0 p-0"
                    onClick={() => onOpenChange(true)}
                    displayType="link"
                >
                    Settings
                </ClayButton>
            </ClayAlert>
        )}
    </>
    );
}
export default FilterSettings;
