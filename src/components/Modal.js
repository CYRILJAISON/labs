import React, { useState } from "react";
import { Axios } from "axios";

function Modal() {
  const url = 'https://webhook.site/ed7af77f-b8b7-49e2-a32c-37a42e559658';
  const [data, setData] = useState({
    nameseg: "",
    first_name: "",
    last_name: "",
    gender: "",
    age: "",
    accname: "",
    city: "",
    state: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  const postData = (e) => {
    e.preventDefault();
    Axios.post('https://webhook.site/ed7af77f-b8b7-49e2-a32c-37a42e559658',
     {
      name: data.nameseg,
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
      age: data.age,
      accname: data.accname,
      city: data.city,
      state: data.state,
    }).then((res) => {
      console.log(res.data).catch(err => console.log(err));
    });
  }

  return (
    <div>
      <br />
      <button
        type="button"
        class="btn btn-outline-secondary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Save Segment
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Save Segment
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body bg-light" id="popup">
              <div>
                <form onSubmit={postData}>
                  <span className="d-flex ">Enter Name of the Segment</span>
                  <input
                    placeholder="Name of the segment"
                    type="text"
                    onChange={(e) => handle(e)}
                    id="nameseg"
                    value={data.nameseg}
                    className="w-100 h-100 p-1"
                  />
                </form>
              </div>
              <span class="d-flex">
                To save your segment, you need to add the schemas to build the
                query
              </span>
              <br />

              <div 
              className="card p-3 border border-info border-start">
                <label className="d-flex ">First name</label>
                <input
                  onChange={(e) => handle(e)}
                  id="first_name"
                  value={data.first_name}
                  className="w-100 p-1"
                />

                <br />
                <label className="d-flex ">Last name</label>
                <input
                  onChange={(e) => handle(e)}
                  id="last_name"
                  value={data.last_name}
                  className="w-100 p-1"
                />
                <br />
                <label className="d-flex ">Gender</label>
                <select
                  onChange={(e) => handle(e)}
                  id="gender"
                  
                  value={data.gender}
                  className="w-100 p-1"
                >
                  <option placeholder="Select">Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>
                <br />
                <label className="d-flex ">Age</label>
                <input
                  onChange={(e) => handle(e)}
                  id="age"
                  value={data.age}
                  className="w-100 p-1"
                />
                <br />
                <div>
                  <label className="d-flex ">Account name</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="accname"
                    value={data.accname}
                    className="d-flex w-100 p-1"
                  />
                </div>
                <br />
                <div>
                <label className="d-flex ">City</label>
                <input
                  onChange={(e) => handle(e)}
                  id="city"
                  value={data.city}
                  className="d-flex w-100 p-1"
                />
              </div>
              <br />
              <div>
                <label className="d-flex ">state</label>
                <input
                  onChange={(e) => handle(e)}
                  id="state"
                  value={data.state}
                  className="d-flex w-100 p-1"
                />
              </div>
            </div>
              
              <div>
                <a href="modal" 
                
                className="d-flex mt-3 text-decoration-none">
                  + Add New Segment{" "}
                </a>
              </div>
            </div>
            <div class="modal-footer">
              <button 
              onClick={postData}
              class="btn btn-primary">
                Save Segment
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
