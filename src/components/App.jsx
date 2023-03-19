import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import Album from "../pages/Album/Album";
import { Menu } from "./Menu/Menu";
import { Loader } from "./Loader/Loader";

const Courses = lazy(() => import("pages/CoursesPage/CoursesPage"));
const Course = lazy(() => import("pages/CoursePage/CoursePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));


export const App = () => {
  return (
    <div>
      <Menu />
      <Suspense fallback={<Loader/> }>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/:id" element={<Course />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </div>
  );
};
