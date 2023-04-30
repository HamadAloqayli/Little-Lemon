import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import ErrorMessage from "./ErrorMessage";
import { redirect } from "react-router";

const ResForm = () => {
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "None",
    occasion: "None",
    seating: "None",
    comment: "",
  });

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    let res = checkValidity();

    if (!res) {
      setErrors([]);
      resetForm();
      window.location.href = "/success";
    }
  };

  const checkValidity = () => {
    let flag = false;

    if (!formObject.firstName) {
      setErrors((prevErrors) => [...prevErrors, "firstName"]);
      flag = true;
    }

    if (!formObject.lastName) {
      setErrors((prevErrors) => [...prevErrors, "lastName"]);
      flag = true;
    }

    if (!formObject.email) {
      setErrors((prevErrors) => [...prevErrors, "email"]);
      flag = true;
    }

    if (!formObject.phoneNumber) {
      setErrors((prevErrors) => [...prevErrors, "phoneNumber"]);
      flag = true;
    }

    if (!formObject.date) {
      setErrors((prevErrors) => [...prevErrors, "date"]);
      flag = true;
    }

    if (formObject.time === "None") {
      setErrors((prevErrors) => [...prevErrors, "time"]);
      flag = true;
    }

    if (formObject.occasion === "None") {
      setErrors((prevErrors) => [...prevErrors, "occasion"]);
      flag = true;
    }

    if (formObject.seating === "None") {
      setErrors((prevErrors) => [...prevErrors, "seating"]);
      flag = true;
    }

    if (!formObject.comment) {
      setErrors((prevErrors) => [...prevErrors, "comment"]);
      flag = true;
    }

    return flag;
  };

  const resetForm = () => {
    setFormObject({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      date: "",
      time: "None",
      occasion: "None",
      seating: "None",
      comment: "",
    });
  };

  return (
    <div className="formSection">
      <form onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          placeholder="First Name"
          label="First Name"
          value={formObject.firstName}
          onChange={(e) =>
            setFormObject((prevForm) => {
              return { ...prevForm, firstName: e.target.value };
            })
          }
        />
        <ErrorMessage errors={errors} field={"firstName"} />
        <CustomInput
          type="text"
          placeholder="Last Name"
          label="Last Name"
          value={formObject.lastName}
          onChange={(e) =>
            setFormObject((prevForm) => {
              return { ...prevForm, lastName: e.target.value };
            })
          }
        />
        <ErrorMessage errors={errors} field={"lastName"} />
        <CustomInput
          type="email"
          placeholder="Email"
          label="Email"
          value={formObject.email}
          onChange={(e) =>
            setFormObject((prevForm) => {
              return { ...prevForm, email: e.target.value };
            })
          }
        />
        <ErrorMessage errors={errors} field={"email"} />
        <CustomInput
          type="number"
          placeholder="Phone Number"
          label="Phone Number"
          value={formObject.phoneNumber}
          onChange={(e) =>
            setFormObject((prevForm) => {
              return { ...prevForm, phoneNumber: e.target.value };
            })
          }
        />
        <ErrorMessage errors={errors} field={"phoneNumber"} />
        <CustomInput
          type="date"
          placeholder="Select Date"
          label="Select Date"
          value={formObject.date}
          onChange={(e) =>
            setFormObject((prevForm) => {
              return { ...prevForm, date: e.target.value };
            })
          }
        />
        <ErrorMessage errors={errors} field={"date"} />
        <CustomSelect
          label="Select Time"
          data={["None", "17:00", "18:00", "19:00", "20:00"]}
          value={formObject.time}
          onChange={(e) =>
            setFormObject((prevForm) => {
              return { ...prevForm, time: e.target.value };
            })
          }
        />
        <ErrorMessage errors={errors} field={"time"} />
        <CustomSelect
          label="Occasion"
          data={["None", "Birthday", "Engagement", "Anniversary"]}
          value={formObject.occasion}
          onChange={(e) =>
            setFormObject((prevForm) => {
              return { ...prevForm, occasion: e.target.value };
            })
          }
        />
        <ErrorMessage errors={errors} field={"occasion"} />
        <CustomSelect
          label="Seating Preferences"
          data={["None", "In-door", "Out-door"]}
          value={formObject.seating}
          onChange={(e) =>
            setFormObject((prevForm) => {
              return { ...prevForm, seating: e.target.value };
            })
          }
        />
        <ErrorMessage errors={errors} field={"seating"} />
        <div className="formInput">
          <label>Additional Comments</label>
          <textarea
            rows="6"
            placeholder={"Additional Comments"}
            value={formObject.comment}
            onChange={(e) =>
              setFormObject((prevForm) => {
                return { ...prevForm, comment: e.target.value };
              })
            }
          />
        </div>
        <ErrorMessage errors={errors} field={"comment"} />
        <div className="formInput">
          <input type="submit" />
        </div>{" "}
      </form>
    </div>
  );
};

export default ResForm;
