import React, { useState } from "react";
import axios, { Axios } from "axios";

function Modal() {
  const url = "https://webhook.site/ed7af77f-b8b7-49e2-a32c-37a42e559658";
  const [data, setData] = useState({
    nameseg: "",
    fullname: "",
    accname: "",
  });

  function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      name: data.nameseg,
      fullname: data.fullname,
      accname: data.accname
    })
      .then(res => {
        console.log(res.data)
      })
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
                <form onSubmit={submit}>
                <span className="d-flex mb-1">Enter Name of the Segment</span>
                <input
                  placeholder="Name of the segment"
                  type="text"
                  onChange={(e) => handle(e)}
                  id="nameseg"
                  value={data.nameseg}
                  className="w-100 h-100 mb-2 p-2"
                  />
                </form>
              </div>
              <span class="d-flex">
                To save your segment, you need to add the schemas to build the
                query
              </span>
              <br />
              <div className="card p-3 border border-info border-start">
                <label className="d-flex mb-1">First name</label>
                <select
                  onChange={(e) => handle(e)}
                  id="fullname"
                  value={data.fullname}
                  className="w-100 p-2"
                >
                  <option>Cyril Jaison</option>
                  <option>Jack Daniels</option>
                  <option>Michale Smith</option>
                </select>
                <br />
                <div>
                  <label className="d-flex mb-1">Account name</label>
                  <select
                    onChange={(e) => handle(e)}
                    id="accname"
                    value={data.accname}
                    className="d-flex w-100 p-2"
                  >
                    <option>Cyril Jaison</option>
                    <option>Jack Daniels</option>
                    <option>Michale Smith</option>
                  </select>
                </div>
              </div>
              <div>
                <select className="d-flex mt-3 w-100 p-2">
                  <option>Add New Segment</option>
                  <option>Jack Daniels</option>
                  <option>Michale Smith</option>
                </select>
              </div>
              <div>
                <a
                href="modal"
                className="d-flex mt-3 text-decoration-none" 
                > + Add New Segment </a>
              </div>
            </div>
            <div class="modal-footer">
              <button
              type="submit" 
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
