import './Doctors.css'

function Doctors() {

   // Array of Objects
   let docsArray = [
    { doctorId: 10, doctorName: "Ravi", designation: "Neurologist" , experience : 10, rating:5,  contactNumber: 99999999, avatar:"download1.jpg"},
    { doctorId: 10, doctorName: "Maya", designation: "Gynocologist" , experience : 10, rating:4,  contactNumber: 99999999, avatar:"download2.jpg"}, 
    { doctorId: 10, doctorName: "Avinash", designation: "Gen Physician" , experience : 10, rating:4,  contactNumber: 99999999, avatar:"download3.jpg"},
    { doctorId: 10, doctorName: "Mahesh", designation: "Surgeon" , experience : 10, rating:3, contactNumber: 99999999, avatar:"download4.jpg"},
    { doctorId: 10, doctorName: "Avinash", designation: "Cardiologist" , experience : 10, rating:3, contactNumber: 99999999, avatar:"images5.jpg"},
    { doctorId: 10, doctorName: "Mahesh", designation: "Opthomalist" , experience : 10, rating:3, contactNumber: 99999999, avatar:"images6.jpg"}
  ];

  let docsArray2 = docsArray.map((item, index) =>
  {
  return <div  className='card' key={index} >
            <img src={"./Images/" + item.avatar} /> <br/>
            <span>{item.doctorName} </span> <br/>
            <span>{item.designation}</span> <br/> <br/>
            <span className='fa fa-star'>{item.rating}</span> <br/> <br/>
            <button>Book Appointment</button>
        </div>
});
    return (
        <>
        <h3 style={  {color:"orange", border: "2px solid blue", padding:"5px", textAlign:"center"}  }>Doctors Details</h3>
             <hr/>
             {docsArray2}
        </>
    
      );
}

export default Doctors