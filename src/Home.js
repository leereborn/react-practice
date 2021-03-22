import TableArea from "./TableArea";
import MyForm from "./Form";

const Home = ({ handleAdd, handleDelete, entries }) => {
  return (
    <div className="home">
      <MyForm handleAdd={handleAdd} />
      <br />
      <TableArea entries={entries} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
