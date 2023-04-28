import { FormLabel, Input, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';

export function Filter() {
    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(setFilter(e.target.value));
    }

    return (
        <FormLabel>
            <Text fontSize="lg">Find contacts by name</Text>
            <Input
                variant="outline"
                placeholder="Enter name"
                name="filter"
                type="text"
                onChange={handleChange}
            />
        </FormLabel>
    );
}
