/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useState, useEffect } from 'react';
import ClayButton from '@clayui/button';
import ClayModal from '@clayui/modal';
import { useModal } from '@clayui/modal';
import ClayLayout from '@clayui/layout';
import ObjectChosenDropButton from './ObjectChosenDropButton';
import FieldChosenDropButton from './FieldChosenDropButton';

const ModalComponent = () => {
  const { observer, onOpenChange, open } = useModal();
  const [selectedData, setSelectedData] = React.useState(null);

  const [dataTargetCollectionKey, setTargetCollectionKey] = React.useState("");
  const [dataFieldKey, setDataFieldKey] = React.useState(0);

  const [fieldChosenDropButtonValues, setFieldChosenDropButtonValues] = React.useState([]);

  React.useEffect(() => {
    setDataFieldKey((prevKey) => prevKey + 1);
  }, [selectedData]);

  const handleSave = () => {
    const returnedObject = {
      targetCollection: dataTargetCollectionKey,
      fieldArray: fieldChosenDropButtonValues.map((value) => ({
        fieldName: value.fieldName,
        businessType: value.businessType, 
      })),
    };

    //send return object to Luan Nguyen

    onOpenChange(false);
  };

  return (
    <>
      {open && (
        <ClayModal observer={observer} size="lg" status="info">
          <ClayModal.Header>Documents</ClayModal.Header>
          <ClayModal.Body>
          <p>Choose target collection</p>
          <ClayLayout.Row>
              <ClayLayout.Col>
                <ObjectChosenDropButton onSelect={setSelectedData} onItem={setTargetCollectionKey} />
              </ClayLayout.Col>
              <ClayLayout.Col>
                {selectedData && (
                  <FieldChosenDropButton
                    dataFieldKey={dataFieldKey}
                    dataField={selectedData}
                    onSelect={setFieldChosenDropButtonValues}
                  />
                )}
              </ClayLayout.Col>
            </ClayLayout.Row>
          </ClayModal.Body>
          <ClayModal.Footer
            last={
              <ClayButton.Group spaced>
                <ClayButton
                  displayType="secondary"
                  onClick={() => onOpenChange(false)}
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
      <ClayButton onClick={() => onOpenChange(true)}>Open modal</ClayButton>
    </>
  );
};

export default ModalComponent;
