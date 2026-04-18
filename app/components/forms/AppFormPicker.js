import { useFormikContext } from 'formik';
import React from 'react';

function AppFormPicker(name, width, placeholder, PickerItemComponent, ...otherProps ) {
    const { errors, setFieldValue, touched, values} = useFormikContext();

    return (
        <>
            <AppPicker 
                items={items} 
                onSelectItem={item => setFieldValue(item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />

            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;