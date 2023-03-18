import styled from "styled-components";

import CoursesList from "components/CoursesList/CoursesList";

const Courses = () => {
  return (
    <HomeContainer>
      <H2>Courses Page</H2>
      <CoursesList />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
`
const H2 = styled.h2`
font-size: 32px;
text-align: center;
margin:12px;
`

export default Courses;