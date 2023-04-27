import { Input, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

// import { FilterLabel } from 'components/Filter/Filter.styled';
import { setFilter } from 'redux/filterSlice';

export function Filter() {
    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(setFilter(e.target.value));
    }

    return (
        <label>
            <Text fontSize="lg">Find contacts by name</Text>
            <Input
                variant="outline"
                placeholder="Enter name"
                name="filter"
                type="text"
                onChange={handleChange}
            />
        </label>
    );
}
