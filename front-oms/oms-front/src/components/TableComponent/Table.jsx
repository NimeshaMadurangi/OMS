import "./Table.css"

function Table(prop) {
  const { headers, children } = prop

  const renderHeaders = headers.map(header => (
    <th key={header}>
      <strong>{header}</strong>
    </th>
  ))

  return (
    <div className="fixed-table">
      <table>
        <thead className="table-header">
          <tr>{renderHeaders}</tr>
        </thead>
        <tbody className="table-body">{children}</tbody>
      </table>
    </div>
  )
}

export default Table
