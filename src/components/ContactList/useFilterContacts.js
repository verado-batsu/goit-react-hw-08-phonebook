import { useSelector } from "react-redux";
import { selectFilter } from "redux/selectors";

export const useFilterContacts = (contacts) => {
	const filter = useSelector(selectFilter);

	const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts
		? contacts.filter(contact => {
			return contact.name.toLowerCase().includes(normalizedFilter);
		})
		: [];
	
	return filteredContacts
}