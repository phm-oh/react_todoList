import React from "react";
import "./css/AddForm.css";

const AddForm = () => {
  return (
    <div>
      <h2>แบบฟอร์มจัดการงาน</h2>
      <form >
        <div className="form-control">
          <input type="text" className="text-input" />
          <button type="submit" className="submit-btn">
            เพิ่ม
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
