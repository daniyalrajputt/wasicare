import React, { useState, useCallback } from "react";
import service from "../services/service";
const initalState = {
  firstName: "",
  lastName: "",
  email: "",
  date: "",
  time: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};
function AppointmentForm() {
  const [state, setState] = useState({ ...initalState });

  const stateHandler = useCallback((obj) => setState({ ...state, ...obj }), [
    state,
  ]);

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const { status } = await service.submitForm(state);
      if (status) setState({ ...initalState });
      console.log("status --->", status);
      alert("Thankyou for contacting us...!")
    } catch (error) {
      console.log("error----> ", error);
    }
  };
  return (
    <div className="appointment-form">
      <h2 className="text-primary">Make an appointment now!</h2>
      <form className="mt-5" onSubmit={submitHandler}>
        <div className="row align-items-center">
          <div className="form-group col-md-6">
            <input
              type="text"
              required
              className="form-control"
              id="first-name"
              placeholder="First Name"
              value={state?.firstName}
              name="firstName"
              onChange={(e) =>
                stateHandler({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              required
              className="form-control"
              id="last-name"
              placeholder="Last Name"
              value={state?.lastName}
              name="lastName"
              onChange={(e) =>
                stateHandler({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="email"
              required
              className="form-control"
              id="email"
              placeholder="Email"
              value={state?.email}
              name="email"
              onChange={(e) =>
                stateHandler({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              required
              className="form-control"
              id="phone"
              placeholder="Phone Number"
              value={state?.phone}
              name="phone"
              onChange={(e) =>
                stateHandler({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="form-group col-lg-12">
            <input
              type="text"
              required
              className="form-control"
              id="address"
              placeholder="Address"
              value={state?.address}
              name="address"
              onChange={(e) =>
                stateHandler({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="form-group select-border col-md-4 ">
            <select
              value={state?.city}
              name="city"
              required
              onChange={(e) =>
                stateHandler({ [e.target.name]: e.target.value })
              }
              className="form-control basic-select"
              id="city"
            >
              <option value="City">City</option>
              <option value="New york">New york</option>
              <option value="Los Angeles">Los angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Assam">Mumbai</option>
              <option value="Assam">Delhi</option>
            </select>
          </div>
          <div className="form-group select-border col-md-4">
            <select
              value={state?.state}
              name="state"
              required
              onChange={(e) =>
                stateHandler({ [e.target.name]: e.target.value })
              }
              className="form-control basic-select"
              id="state"
            >
              <option value="State">State</option>
              <option value="AL">New york</option>
              <option value="AK">California</option>
              <option value="AZ">Illinois</option>
              <option value="AR">Maharashtra</option>
              <option value="AR">Delhi</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <input
              type="number"
              required
              className="form-control"
              id="zip"
              placeholder="Zip"
              value={state?.zip}
              name="zip"
              onChange={(e) =>
                stateHandler({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6 datetimepickers">
            <label className="text-dark">Required Date</label>
            <div
              className="input-group date"
              id="datetimepicker-01"
              data-target-input="nearest"
            >
              <input
                type="date"
                required
                className="form-control datetimepicker-input"
                placeholder="Date"
                data-target="#datetimepicker-01"
                value={state?.date}
                name="date"
                onChange={(e) =>
                  stateHandler({ [e.target.name]: e.target.value })
                }
              />
              <div
                className="input-group-append"
                data-target="#datetimepicker-01"
                data-toggle="datetimepicker"
              >
                {/* <div className="input-group-text">
                  <i className="far fa-calendar-alt"></i>
                </div> */}
              </div>
            </div>
          </div>
          <div className="form-group select-border col-md-6">
            <label className="text-dark">Select Time</label>
            <div
              className="input-group date"
              id="datetimepicker-03"
              data-target-input="nearest"
            >
              <input
                type="time"
                className="form-control datetimepicker-input"
                placeholder="Time"
                required
                data-target="#datetimepicker-03"
                value={state?.time}
                name="time"
                onChange={(e) =>
                  stateHandler({ [e.target.name]: e.target.value })
                }
              />
              <div
                className="input-group-append"
                data-target="#datetimepicker-03"
                data-toggle="datetimepicker"
              >
                {/* <div className="input-group-text">
                  <i className="far fa-clock"></i>
                </div> */}
              </div>
            </div>
          </div>
          <div className="form-group col-sm-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
