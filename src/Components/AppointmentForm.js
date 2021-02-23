import React from 'react'

function AppointmentForm() {
    return (
        <div className="appointment-form">
            <h2 className="text-primary">Make an appointment now!</h2>
            <form className="mt-5">
                <div className="row align-items-center">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="first-name" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                    </div>
                    <div className="form-group col-lg-12">
                        <input type="text" className="form-control" id="address" placeholder="Address" />
                    </div>
                    <div className="form-group select-border col-md-4 ">
                        <select className="form-control basic-select" id="city">
                            <option value="City">City</option>
                            <option value="New york">New york</option>
                            <option value="Los Angeles">Los angeles</option>
                            <option value="Chicago">Chicago</option>
                            <option value="Assam">Mumbai</option>
                            <option value="Assam">Delhi</option>
                        </select>
                    </div>
                    <div className="form-group select-border col-md-4">
                        <select className="form-control basic-select" id="state">
                            <option value="State">State</option>
                            <option value="AL">New york</option>
                            <option value="AK">California</option>
                            <option value="AZ">Illinois</option>
                            <option value="AR">Maharashtra</option>
                            <option value="AR">Delhi</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" id="zip" placeholder="Zip" />
                    </div>
                    <div className="form-group col-md-6 datetimepickers">
                        <label className="text-dark">Required Date</label>
                        <div className="input-group date" id="datetimepicker-01" data-target-input="nearest">
                            <input type="text" className="form-control datetimepicker-input" placeholder="Date" data-target="#datetimepicker-01" />
                            <div className="input-group-append" data-target="#datetimepicker-01" data-toggle="datetimepicker">
                                <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group select-border col-md-6">
                        <label className="text-dark">Select Time</label>
                        <div className="input-group date" id="datetimepicker-03" data-target-input="nearest">
                            <input type="text" className="form-control datetimepicker-input" placeholder="Time" data-target="#datetimepicker-03" />
                            <div className="input-group-append" data-target="#datetimepicker-03" data-toggle="datetimepicker">
                                <div className="input-group-text"><i className="far fa-clock"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-sm-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AppointmentForm;