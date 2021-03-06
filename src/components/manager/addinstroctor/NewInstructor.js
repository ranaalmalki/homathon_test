import React from "react";
import "./addinstructor.css";
import {AddNewInstructor}from '../../api';
class NewInstructor extends React.Component {
  constructor() {
    super();
    this.state = {
        FullName: "",
        InstructorUserName: "",
        NationalId: "",
        Email: "",
        Phone: "",
        password: "",
        ClubName: "",
        InstructorRole: "Instructors",
        InstructorsType: ""
    };
    this.addInstructor = this.addInstructor.bind(this);
}
addInstructor = instructor => {
    // Make an axios request
    console.log(instructor,"add");
    AddNewInstructor(instructor)
      .then(response => {
        console.log(
          `The instructor ${instructor.FullName} has been added successfully.`
        );
          })
      .catch(error => {
        console.log("API ERROR: ", error);
      });
  };
  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });
  formSubmit = e => {
    const newInstructor = this.state;
     console.log(newInstructor, " NewInstructor");
    e.preventDefault();
    this.props.history.push("/ManagerHeader/Home");
    this.addInstructor(newInstructor);
   };
  render() {
    const { FullName,InstructorUserName,NationalId,Email ,Phone ,password , ClubName, InstructorRole , InstructorsType} = this.state;
    return (
      <div>
        <form className="parent-wrappe" >
          <h3>إضــافــة مـدرب</h3>
          <div className="subscribe-wrappe">
            <div >
              {/* <label >الاسم الكامل</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="FullName"
                value={FullName}
                type="FullName"
                placeholder="الاسم الكامل"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>اسم المستخدم</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="InstructorUserName"
                value={InstructorUserName}
                type="InstructorUserName"
                placeholder="اسم المستخدم"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>رقم الهوية</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="NationalId"
                value={NationalId}
                type="NationalId"
                placeholder="رقم الهوية"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>البريد الإلكتروني</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="Email"
                value={Email}
                placeholder="البريد الإلكتروني"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>رقم الجوال</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="Phone"
                value={Phone}
                type="Phone"
                placeholder="رقم الجوال"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>الرقم السري</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="password"
                value={password}
                type="password"
                placeholder="الرقم السري"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>ClubName</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="ClubName"
                value={ClubName}
                type="ClubName"
                placeholder="اسم النادي"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br /><br/>
              <label className="to-the-right">مجال التدريب:</label>
              <select
                className="subscribe-input"
                required
                name="InstructorsType"
                value={InstructorsType}
                type="text"
                onChange={this.handleChange}
              >
               <option className="dropdown-content" value="Entertaining">الترفيهية</option>
               <option className="dropdown-content" value="Educational">التعليمية</option>
               <option className="dropdown-content" value="Athletic">الرياضية</option>
                </select>
             </div>
          <br/>
           
            <div className="submit-btn" onClick={e => this.formSubmit(e)}>
              Add
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default NewInstructor;