import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

  const elements = items.map(({ id,
    title,
    previewImageLink,
    lessonsCount,
    rating,
    meta,
  }) =>
    <Li key={id}>
      <CourserLink to={`/${id}`}>
        <Img src={`${previewImageLink}/cover.webp`} alt={previewImageLink} />
        <h2>{title}</h2>
      </CourserLink>
      <p>lessons: {lessonsCount}</p>
      <p>rating: {rating}</p>
    </Li>)

  return (
    <div>
      <Ul>
        {elements}
      </Ul>
      {loading && <Loader />}
      {error && <p>Loading movies failed</p>}
    </div>
  )

}

const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
margin: -15px;
list-style: none;
text-align: center;
justify-content: center;
`

const Li = styled.li`
flex-basis: calc(100% / 3 - 30px);
margin: 15px;
border: 1px solid;

`

const Img = styled.img`
width: 320px;
margin: 12px;
`

const CourserLink = styled(Link)`
  color: black;
  font-size: 24px;
  padding: 20px;
  text-decoration: none;
`

export default CoursesList;