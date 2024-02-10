import React from "react";
import { useState } from "react";

function PostToLocalServer3000() {
  const [id, setId] = useState("");
  const [iderror, setIderror] = useState(false);

  const [name, setName] = useState("");
  const [nameerror, setNameerror] = useState(false);

  const [role, setRole] = useState("");
  const [roleerror, setRoleerror] = useState(false);

  // function 2

  function idHandler(event) {
    let entervalue = event.target.value;
    // var no = /^\d{3}$/;
    if (entervalue.length < 3) {
      setIderror(false);
    } else {
      setIderror(true);
    }
    setId(entervalue);
  }

  // function 2

  function nameHandler(event) {
    let entervalue = event.target.value;
    if (entervalue.length < 5) {
      setNameerror(false);
    } else {
      setNameerror(true);
    }
    setName(entervalue);
  }

  // function 3

  function roleHandler(event) {
    let entervalue = event.target.value;
    if (entervalue.length < 5) {
      setRoleerror(false);
    } else {
      setRoleerror(true);
    }
    setRole(entervalue);
  }

  function saveData() {
    let data = { id, name, role };

    fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      // console.warn("resp", resp);;
      resp.json().then((result) => {
        console.warn("result", result);
      });
    });
  }

  return (
    <div>
      <div className="container">
        <form
          action="get"
          name="localserver"
          id="localserver"
          //onSubmit={handleSubmit}
          className="mx-auto w-25 h-25 p-3 border border-2 border-success rounded shadow shadow-danger shadow-intensity-lg  "
        >
          <h4 className="text-primary fw-bold text-decoration-underline text-center">
            Input Details
          </h4>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="textid" className="form-label">
                  Employee Id :
                </label>
                <input
                  type="text"
                  name="textid"
                  id="textid"
                  className="form-control"
                  onChange={idHandler}
                />
                {iderror ? (
                  <span className="text-success">Valid id</span>
                ) : (
                  <span className="text-danger">Id should 3 Digit Nos</span>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="txtName" className="form-label">
                  Employee Name :
                </label>
                <input
                  type="text"
                  name="txtName"
                  id="txtName"
                  className="form-control"
                  onChange={nameHandler}
                />
                {nameerror ? (
                  <span className="text-success">Valid Name</span>
                ) : (
                  <span className="text-danger">Name should be 5 chars</span>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="txtRole" className="form-label">
                  Employee Role :
                </label>
                <input
                  type="text"
                  name="txtrole"
                  id="txtRole"
                  className="form-control"
                  onChange={roleHandler}
                />
                {roleerror ? (
                  <span className="text-success">Valid Role</span>
                ) : (
                  <span className="text-danger">Role should be 5 chars</span>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                {/* <input
                  type="submit"
                  value="Submit"
                  className="btn btn-sm btn-primary  mt-4 d-flex"
                /> */}
                <button className="btn btn-primary " onClick={saveData}>
                  Enter
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostToLocalServer3000;
