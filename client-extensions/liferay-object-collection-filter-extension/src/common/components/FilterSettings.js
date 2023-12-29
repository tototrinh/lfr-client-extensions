/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useState, useEffect } from 'react';
import ClayButton from '@clayui/button';
import ClayModal from '@clayui/modal';
import { useModal } from '@clayui/modal';
import SelectObjectDefinition from './SelectObjectDefinition';
import SelectObjectFields from './SelectObjectFields';

const FilterSettings = ({ initialSettings, onSettings }) => {

    const { observer, onOpenChange, open } = useModal();

    const [settings, setSettings] = useState(initialSettings);

    const handleChange = (changes) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            ...changes,
        }));
    };

    const handleSave = () => {
        onSettings(settings);
        onOpenChange(false);
    };

    const handleClose = () => {
        handleChange(initialSettings);
        onOpenChange(false);
    }

    return (
    <>
        {open && (
        <ClayModal observer={observer} size="lg" status="info">
            <ClayModal.Header>Settings</ClayModal.Header>
            <ClayModal.Body>
                <div class="sheet-section">
                    <div class="form-group">
                        <label class="text-4">
                            Select Target Object
                        </label>
                        <SelectObjectDefinition
                            selectedObject={settings.selectedObject}
                            selectedFields={settings.selectedFields}
                            onSelect={handleChange}
                        />
                    </div>

                    {settings.selectedObject && (
                        <div class="form-group">
                            <label class="text-4">Select Filter Fields</label>
                            <SelectObjectFields
                                selectedFields={settings.selectedFields}
                                objectFields={settings.selectableFields}
                                onSelect={handleChange}
                            />
                        </div>
                    )}
                </div>
            </ClayModal.Body>
            <ClayModal.Footer
            last={
                <ClayButton.Group spaced>
                <ClayButton
                    displayType="secondary"
                    onClick={handleClose}
                >
                    Cancel
                </ClayButton>
                <ClayButton onClick={handleSave}>
                    Save
                </ClayButton>
                </ClayButton.Group>
            }
            />
        </ClayModal>
        )}
        <ClayButton onClick={() => onOpenChange(true)}>Settings</ClayButton>
    </>
    );
}
export default FilterSettings;
