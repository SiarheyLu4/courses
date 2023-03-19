import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Loader } from "components/Loader/Loader";
import { getCoursesList } from "shared/api/courses";

const CoursesList = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchCoursesList = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));
        const result = await getCoursesList();
        setState(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...result]
          }
        })
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      }
      finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          }
        })
      }
    };

    fetchCoursesList()
  }, [setState]);

  const { items, loading, error } = state;

  const elements = items.map(({ id, title }) => <li key={id}>
    <Link to={`/${id}`}>{title}</Link>
  </li>)

  return (
    <div>
      <ol>{ elements }</ol>
      {loading && <Loader />}
      {error && <p>Loading movies failed</p>}
    </div>
  )

}

export default CoursesList;