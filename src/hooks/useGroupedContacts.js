import { useMemo } from "react";

const useGroupedContacts = (contacts) => {
  const groupedContacts = useMemo(() => {
    const grouped = {};

    contacts.forEach((contact) => {
      const firstLetter = contact.name.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(contact);
    });

    const sortedGrouped = {};
    Object.keys(grouped)
      .sort()
      .forEach((letter) => {
        sortedGrouped[letter] = grouped[letter].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      });

    return sortedGrouped;
  }, [contacts]);

  return groupedContacts;
};

export default useGroupedContacts;
