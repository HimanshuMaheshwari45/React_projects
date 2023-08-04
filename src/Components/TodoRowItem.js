function TodoRowItem() {
  const rowNumber = 1;
  const rowDescription = "learn react";
  const rowAssigned = "Himanshu Maheshwari";

  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItem;
