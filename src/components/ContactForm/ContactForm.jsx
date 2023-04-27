import { Formik, Field, ErrorMessage, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
} from '@chakra-ui/react';

// import { FormStyled } from 'components/ContactForm/ContactForm.styled';
import { schema } from './schema';
import {
    addContact,
    useAddContactMutation,
} from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/selectors';

export function ContactForm() {
    const dispatch = useDispatch();

    const [addContact, result] = useAddContactMutation();

    const contacts = useSelector(selectContacts);

    const initialValues = {
        name: '',
        number: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        let isNameRepeat = false;
        contacts.map(contact => {
            if (contact.name.toLowerCase() === values.name.toLowerCase()) {
                Notify.failure(`${contact.name} is already in contacts.`);
                isNameRepeat = true;
            }
            return null;
        });

        if (isNameRepeat) {
            return;
        } else {
            addContact(values);
            // dispatch(addContact(values));
            resetForm();
            return;
        }
    };

    return (
        <Box
            border="2px"
            borderColor="gray.200"
            bg="white"
            p={6}
            rounded="md"
            w="100%	"
        >
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {({ errors }) => {
                    return (
                        <Form>
                            <VStack spacing={4} align="flex-start">
                                <FormControl isInvalid={errors.name}>
                                    <FormLabel>
                                        <p>Name</p>
                                        <Field
                                            as={Input}
                                            type="text"
                                            name="name"
                                            variant="filled"
                                        />
                                    </FormLabel>
                                    <ErrorMessage
                                        name="name"
                                        component={FormErrorMessage}
                                    />
                                </FormControl>
                                <FormControl isInvalid={errors.number}>
                                    <FormLabel>
                                        <p>Number</p>
                                        <Field
                                            as={Input}
                                            type="tel"
                                            name="number"
                                            variant="filled"
                                        />
                                    </FormLabel>
                                    <ErrorMessage
                                        name="number"
                                        component={FormErrorMessage}
                                    />
                                </FormControl>
                                <Button
                                    type="submit"
                                    colorScheme="purple"
                                    width="full"
                                >
                                    Add contact
                                </Button>
                            </VStack>
                        </Form>
                    );
                }}
            </Formik>
        </Box>
    );
}
