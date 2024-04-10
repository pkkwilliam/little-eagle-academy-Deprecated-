import { setClasses } from "src/redux/features/class-slice";
import { GET_CLASSES, GET_INSTRUCTORS } from "./api";
import execute from "./serviceExecutor";
import { setInstructors } from "src/redux/features/instructor-slice";

const useStatic = false;
const useCache = false;

export const getClasses = async (store) => {
  if (useStatic) {
    return STATIC_CLASSES;
  }
  if (store.getState().class.dirty || !useCache) {
    const classesResult = await execute(GET_CLASSES);
    store.dispatch(setClasses(classesResult));
    return classesResult;
  } else {
    return store.getState().class.classes;
  }
};

export const getInstructors = async (store) => {
  if (useStatic) {
    return STATIC_INSTRCTORS;
  }
  if (store.getState().instructor.dirty || !useCache) {
    const instructorsResult = await execute(GET_INSTRUCTORS);
    store.dispatch(setInstructors(instructorsResult));
    return instructorsResult;
  } else {
    return store.getState().instructor.instructors;
  }
};
