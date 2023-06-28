import React,{Component} from 'react';
import EmployeeForm from './EmployeeForm';
class EmployeeTable extends React.Component{
 constructor(props){
    super(props);
    console.log("in Employee table constructor")
    console.log(props.arr)
    this.state={
        earr:[...props.arr],
        flag:false
    }

 }
 addData1=(emp)=>{
    console.log("Employee table add",emp);
    this.props.insertEmp(emp)
    this.setState({...this.state,flag:false});

 }
 showform=()=>{
    this.setState({...this.state,flag:true})
 }
 /*componentDidUpdate(prevprops,prevstate){
    if(prevprops.arr!==this.props.arr){
        console.log("in componentDidUpdate")
        console.log(this.props.arr)
        console.log("not same");
       // this.setState({...this.state,earr:this.props.arr})
    }
 }*/
 render(){
    console.log("employeetable render");
    console.log(this.state.earr);
    return(
<div className="container">
   <div className="row">
     <div className="col-sm-12 col-md-6">
                  <button type="button" className="btn btn-success" onClick={this.showform}>Add Employee</button>
                    <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Employee id</th>
                    <th scope="col">Employee name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.arr.map((emp)=><tr key={emp.empid}>
                        <td>{emp.empid}</td>
                        <td>{emp.ename}</td>
                        <td>{emp.sal}</td>
                        <td>
                            <button type="button" id="btn" name="btn" className="btn btn-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg> </button>
                        &nbsp;&nbsp;&nbsp;
                        <button type="button" id="btn" name="btn" className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                </svg></button>
                </td>
                    </tr>)}
                </tbody>
                </table>

     </div>
     <div className="col-sm-12 col-md-6">
          {this.state.flag?<EmployeeForm adddata={this.addData1}></EmployeeForm>:""}
          
     </div> 
   </div>
</div>

       
    )
 }

}

export default EmployeeTable;