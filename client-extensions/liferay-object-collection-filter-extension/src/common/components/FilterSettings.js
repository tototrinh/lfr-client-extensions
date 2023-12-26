import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const FilterSettings = ({ initialSettings, onSaveAndClose }) => {

    const [settings, setSettings] = useState(initialSettings);

    const [objects, setObjects] = useState([]);
    const [objectFields, setObjectFields] = useState([]);

    useEffect(() => {
        // Simulate fetching data (replace with actual fetching logic)
        setObjects([
           { label: 'students', value: 'students'},
           { label: 'teachers', value: 'teachers'},
       ]);
        setObjectFields([
            { label: 'age', fieldName: 'age', fieldType: 'numeric' },
            { label: 'gender', fieldName: 'gender', fieldType: 'boolean' },
        ]);
    }, []);

    const handleChange = (field, value) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [field]: value,
        }));
    };

    const handleClose = () => {
        onSaveAndClose(settings);
    };

    return (
        <div className="settings-popup">
            {/* TODO: Refactor. This is just an example.*/}
            <h2>Settings</h2>
            <Select
                options={objects}
                value={settings.selectedObject}
                onChange={(object) => handleChange('selectedObject', object.value)}
            />
            {settings.selectedObject && (
                <Select
                    options={objectFields}
                    isMulti
                    value={settings.selectedFields}
                    onChange={(fields) => handleChange('selectedFields', fields)}
                />
            )}
            <button onClick={handleClose}>Save</button>
        </div>
    );
}
export default FilterSettings;