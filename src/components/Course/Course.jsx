import { useState, useEffect } from "react";
import { getCourse } from "shared/api/courses";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";


const Course = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  const { id } = useParams();
  
  useEffect(() => {
    const fetchCoursesList = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));
        const result = await getCourse(id);
        setState(prevState => {
          return {
            ...prevState,
            item: result,
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
  }, [id, setState]);

  const { loading, error } = state;

  const { title, description, previewImageLink } = state.item;

  return (
    <div>
      <h3>{title}</h3>
      <img src={`${previewImageLink}/cover.webp`} alt="previewImageLink" />
      <p>{description}</p>
      {loading && <Loader />}
      {error && <p>Loading movies failed</p>} 
    </div>
  )
}

export default Course;