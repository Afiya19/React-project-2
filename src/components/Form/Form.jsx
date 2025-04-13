import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const validationRules = {
    name: {
      regex: /^[A-Za-z\s]*$/, // allow empty string for backspace
      errorMsg: "Only alphabets are allowed",
    },
    number: {
      regex: /^$|^[6-9]\d{0,9}$/, // live typing with backspace support
      fullRegex: /^[6-9]\d{9}$/,
      errorMsg: "Enter a valid 10-digit mobile number",
    },
    email: {
      regex: /^[a-zA-Z0-9._%+-]*@?[a-zA-Z0-9.-]*\.?[a-zA-Z]{0,4}$/, // loose live typing pattern
      fullRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      errorMsg: "Enter a valid email address",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const rule = validationRules[name];
    if (rule && rule.regex.test(value)) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const rule = validationRules[name];
    if (rule && !rule.regex.test(value)) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: rule.errorMsg,
      }));
      return;
    } else if (rule && !rule.fullRegex.test(value)) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: rule.errorMsg,
      }));
      return;
    }

    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const formFields = [
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "Mobile Number",
      name: "number",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "text",
    },
  ];
  return (
    <div className={styles.form_section}>
      {formFields.map((field, index) => (
        <div className={styles.form_group} key={index}>
            <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label
            className={formData[field.name] ? styles.filled : ""}
            htmlFor={field.name}
          >
            {field.label}
          </label>
          
          {formErrors[field.name] && (
            <p className={styles.errorMsg}>{formErrors[field.name]}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Form;
