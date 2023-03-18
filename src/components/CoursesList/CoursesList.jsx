import { useState, useEffect } from "react";

import { getCoursesList } from "shared/api/courses";

const CoursesList = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchCoursesList = async () => {
      setState({
        ...state,
        loading: true,
        error: null,
      })
      try {
        const result = await getCoursesList();
        setState(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...result]
          }
        })
      } catch (error) {
        setState({
          ...state,
          error,
        })
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
  }, [])

  return (
    <ol>

    </ol>
  )

}

export default CoursesList;