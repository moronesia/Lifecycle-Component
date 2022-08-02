// import React from "react";
// // import * as Validator from "validatorjs";
// import "./style.css";


// export default class FormValidation extends React.Component {
//   state = {
//     Nama: "",
//     Email: "",
//     Jurusan: ``,
//     Gender: ``,
//     Alamat: ``,
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`
//       Nama: ${this.state.Nama}
//       Email: ${this.state.Email}
//       Jurusan: ${this.state.Jurusan}
//       Gender: ${this.state.Gender}
//       Alamat: ${this.state.Alamat}
//     `);

//     this.setState({
//       Nama: "",
//       Email: "",
//       Jurusan: "",
//       Gender: "",
//       Alamat: "",
//     });
//   }

//   render () {
//     return (
//       <div className="head">
//         <form className="form" onSubmit={this.handleSubmit}>
//           <h1 className="heading">Sign Up</h1>
//           <label className="name">
//             Nama: 
//             <br />
//             <input 
//               type="text" 
//               name="Nama" 
//               onChange={e => this.setState({Nama: e.target.value})} value={this.state.Nama}/>
//           </label>
//           <label className="email">
//             Email:
//             <br />
//             <input 
//               type="email" 
//               name="email"
//               onChange={e => this.setState({Email: e.target.value})} value={this.state.Email}/>
//           </label>
//           <br />
//           <label className="select">
//             Jurusan: 
//             <br />
//             <select onChange= {e => this.setState({Jurusan: e.target.value})} value={this.state.Jurusan}> 
//               <option value="">Pilih Jurusan: </option>
//               <option value="Akuntasi">- Akuntasi</option>
//               <option value="Teknik Informatika">- Teknik Informatika</option>
//               <option value="Pendidikan Olahraga">- Pendidikan Olahraga</option>
//               <option value="Matematika">- Matematika</option>
//               <option value="Ekonomi">- Ekonomi</option>
//             </select>
//           </label>
//           <br />
//           <label className="jenis">
//             <input 
//               type="checkbox" 
//               value="Laki-Laki" 
//               name="gender" 
//               onChange= {e => this.setState({Gender: e.target.value})} defaultChecked={this.state.Gender} /> Laki - Laki {` `}
//             <input 
//               type="checkbox" 
//               value="Perempuan" 
//               name="gender" 
//               onChange= {e => this.setState({Gender: e.target.value})} defaultChecked={this.state.Gender} /> Perempuan
//           </label>
//           <br />
//           <label className="jalan">
//             Alamat:
//             <br /> 
//             <textarea 
//             className="jalan1" 
//             type="text" 
//             name="alamat" 
//             onChange= {e => this.setState({Alamat: e.target.value})} value={this.state.Alamat}/>
//           </label>
//           <br />
//           <button className="button">
//             <input className ="submit" type="submit" />
//           </button>

//         </form>
//       </div>

//     )
//   }
// } 