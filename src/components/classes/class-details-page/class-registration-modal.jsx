import { removeLineBreakTag } from "@utils/utils";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ENROLL_TYPE_STANDARD, ENROLL_TYPE_TRIAL } from "src/enum/enrollType";
import { cart_product } from "src/redux/features/cart-slice";

const EMPTY_FORM_DATA = {
  dateOfBirth: "",
  courseId: "",
  firstName: "",
  lastName: "",
};

const ClassRegistrationModal = ({
  children,
  clazz,
  clazzLocalization,
  labels,
  enrollType,
}) => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(EMPTY_FORM_DATA);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const isTrial = enrollType === ENROLL_TYPE_TRIAL;
  const toShowCourses = isTrial ? clazz.trialCourses : clazz.courses;
  const scheduleOptions = toShowCourses.map((course) => ({
    key: course.id,
    value: course.name,
    disabled: course.disabled,
  }));
  const selectedCourse =
    toShowCourses.find((course) => course.id === formData.courseId) ?? {};
  // useEffect(() => {
  //   resetForm();
  // }, [clazz.courses]);

  // const resetForm = () => {
  //   setFormData((state) => ({
  //     ...EMPTY_FORM_DATA,
  //     enrollType: enrollType.key,
  //     courseId: clazz.courses?.[0]?.id,
  //   }));
  // };
  if (!clazz || !clazz.courses) {
    return;
  }

  useEffect(() => {
    setFormData({
      ...formData,
      courseId: toShowCourses[0].id,
    });
  }, [clazz, enrollType]);

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnClickAddToCart = () => {
    const courseName = selectedCourse.name;
    const subTitles = [
      `${isTrial ? "(Trial)  " : ""}${courseName}`,
      `Name: ${formData.lastName}, ${formData.firstName}`,
      `DOB: ${formData.dateOfBirth}`,
    ];
    const cartItem = {
      id: Math.random(),
      title: removeLineBreakTag(clazzLocalization.name),
      subTitles,
      price: isTrial ? 5 : clazz.price,
      productImg: {
        src: clazz.imageUrls[0],
        height: 832,
        width: 833,
      },
      formData: {
        ...formData,
        enrollType: enrollType.key,
      },
    };
    dispatch(cart_product(cartItem));
    setFormData(EMPTY_FORM_DATA);
    setShow(false);
  };

  const hanldClose = () => {
    setShow(false);
  };

  return (
    <span>
      <span onClick={() => setShow(true)}>{children}</span>

      <Modal
        backdrop={"static"}
        centered
        size={"lg"}
        onHide={hanldClose}
        show={show}
      >
        <Modal.Header closeButton>
          <Modal.Title>{`${isTrial ? "Trial " : ""}Register`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div>
              <h3
                dangerouslySetInnerHTML={{ __html: clazzLocalization.name }}
              />
              <Form ref={formRef}>
                <Form.Group className="mb-3" controlId="formBasicSchedule">
                  <Form.Label>Session</Form.Label>
                  <Form.Select
                    name="courseId"
                    onChange={(option) => {
                      console.log(option.target.value);
                      setFormData({
                        ...formData,
                        courseId: option.target.value,
                      });
                    }}
                    value={formData.courseId}
                  >
                    {scheduleOptions.map((option) => (
                      <option
                        disabled={option.disabled}
                        key={option.key}
                        value={option.key}
                      >
                        {option.value}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>Student's First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.firstName}
                    name="firstName"
                    placeholder="First name"
                    onChange={handleFormDataChange}
                  />
                  <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Student's Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.lastName}
                    name="lastName"
                    placeholder="Last name"
                    onChange={handleFormDataChange}
                  />
                  <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDob">
                  <Form.Label>Student's DOB (MM/DD/YYYY)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Date of Birth"
                    name="dateOfBirth"
                    onChange={handleFormDataChange}
                    value={formData.dateOfBirth}
                  />
                  <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                  </Form.Text>
                </Form.Group>
                {isTrial && (
                  <h6>
                    All trial classes are free. A reseration deposit of $5 will
                    be return at the end of class.
                  </h6>
                )}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Button variant="primary" onClick={handleOnClickAddToCart}>
                    Add to Cart
                  </Button>
                </div>
              </Form>
            </div>
            <div>
              {/* <h4>Session Detail</h4> */}
              <h4>Scheduled Date</h4>
              <p>{`${selectedCourse?.startTime} - ${selectedCourse?.endTime}`}</p>
              {(selectedCourse?.scheduledDates ?? []).map((date) => (
                <p style={{ margin: 0 }}>{date}</p>
              ))}
              <h4>Location</h4>
              <p>{selectedCourse?.location?.name}</p>
              <p>{selectedCourse?.location?.address}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </span>
  );
};

function constructCourseCartItem() {}

export default ClassRegistrationModal;
