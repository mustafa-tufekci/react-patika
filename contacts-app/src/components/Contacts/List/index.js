import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())
    );
  });

  let filteredContent = <p>No Contact Found</p>;

  if (filtered.length > 0) {
    filteredContent = filtered.map((contact, index) => (
      <li key={index}>
        <span>{contact.fullname}</span>
        <span>{contact.phone_number}</span>
      </li>
    ));
  }

  return (
    <div>
      <input
        placeholder="Filter Contact"
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">{filteredContent}</ul>
      <h3>Total Contacts ({filtered.length})</h3>
    </div>
  );
}

export default List;
