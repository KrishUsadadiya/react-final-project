import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllstudentAsync, deletestudentAsync } from "../service/action/student.action";
import { useNavigate } from "react-router";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Home = () => {
  const { students, isLoading } = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authReducer);

  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(getAllstudentAsync());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleSort = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

    setFilteredData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredData(students);
    } else {
      const filtered = students.filter((student) => student.studentType === selectedCategory);
      setFilteredData(filtered);
    }
  }, [selectedCategory, students]);

  const handleDelete = (id) => {
    dispatch(deletestudentAsync(id));
  };

  return (
    <div className="container">
      {!user ? (
        <h2>Please Login</h2>
      ) : isLoading ? (
        <h2 className="text-black text-center mt-3">Loading....</h2>
      ) : (
        <>
          <div className="search-filter my-4 d-flex justify-content-end">

            <button onClick={handleSort} className="sort-btn">
              Sort by Title {sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />}
            </button>

            <select onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="">All Categories</option>
              {[...new Set(students.map((lib) => lib.studentType))].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <h2 className="text-black my-4">All Student List</h2>

          {filteredData.length === 0 ? (
            <h4 className="text-center mt-3">Data Not Found</h4>
          ) : (
            <div className="card-container d-flex flex-wrap gap-3">
              {filteredData.map((student) => (
                <div key={student.id} className="card p-3 shadow">
                  <h3>{student.title}</h3>
                  <p><strong>Name:</strong> {student.name}</p>
                  <p><strong>rollno:</strong> {student.rollno}</p>
                  <p><strong>classno:</strong> {student.classno}</p>
                  <p><strong>div:</strong> {student.div}</p>
                  <p><strong>dob:</strong> {student.dob}</p>
                  <p><strong>gender:</strong> {student.gender}</p>
                  <div className="d-flex gap-2">
                    <button className="editbtn" onClick={() => navigate(`/edit/${student.id}`)}>Edit</button>
                    <button className="delbtn" onClick={() => handleDelete(student.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
