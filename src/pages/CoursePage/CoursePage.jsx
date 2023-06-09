import styled from "styled-components";

import Course from "components/Course/Course";

const CoursePage = () => {
  return (
    <MoviesContainer>
      <H2>Course Page</H2>
      <Course />
    </MoviesContainer>
  )
}

const MoviesContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
`
const H2 = styled.h2`
font-size: 32px;
text-align: center;
margin:12px;
`
export default CoursePage;