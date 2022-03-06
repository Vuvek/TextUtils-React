import React from "react";

function Alert(props) {
  const capitalize = () =>{
    
    return 'SUCCESS'.toUpperCase()

  }
  return (
    props.alert && <div className={`mb-3 alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize()}</strong> : {props.alert.msg} 
    </div>
  );
}

export default Alert;
