import DataTable from "./components/datatable"

function App() {
  const data = [{
    id: 0,
    name: "Nelson"
  }]
  const headers = [{ key: "id", label: "ID"}, { key: "name", label: "Name"}]
  return (
    <DataTable data={data} paginate={10} headers={headers}>
      {(row => {
        return (<tr>
          <td>{row.id}</td>
          <td>{row.name}</td>
        </tr>)
      })}
    </DataTable>
  );
}

export default App;
