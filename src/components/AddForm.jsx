import React from "react";
import "./css/AddForm.css";

const AddForm = (props) => {
  const { title, setTitle , saveTask ,editId} = props;

  return (
    <div>
      <h2>แบบฟอร์มจัดการงาน</h2>
      <form  onSubmit={saveTask}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={ (e) => setTitle(e.target.value) }
          />
          <button type="submit" className="submit-btn" >
             {editId ? 'update' : 'insert'}
            
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
