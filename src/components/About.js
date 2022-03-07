import React,{useState} from "react";


export default function About(props) {

  // const [myStyle, setmyStyle] = useState({
  //   color:'black',
  //   backgroundColor: 'white'
  // })

  const [btntext, setbtntext] = useState("Enable Dark Mode");

  // const toggleButton = () =>{
  //   if (myStyle.backgroundColor == 'white'){
  //     setmyStyle({color : 'white' ,
  //     backgroundColor:'black',
  //       })

  //   }
  //   else{
  //     setmyStyle({color : 'black' ,
  //     backgroundColor:'white',
  //    })
     
  //    setbtntext("Enable Dark Mode")
  //   }

     

  // }


  let myStyle = {
    backgroundColor: props.mode === 'light'? 'white':'#212529',
    color: props.mode === 'light'? '#212529':'white',

  }
  return (
    <>
      <div className={`container d-flex flex-column vw-100 p-5`} style={myStyle}>
        <h1 className="hadow-sm p-3 my-2" style={myStyle}>About Us</h1>
        <div className="accordion mt-5 border border-light" id="accordionExample">
          <div className="accordion-item border border-light" style={myStyle}>
            <h2 className="accordion-header" id="headingOne" style={myStyle}>
              <button style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show border border-light"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body border border-light">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item border border-light" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button  style={myStyle}
                className="accordion-button collapsed border border-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse border border-light"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item border border-light" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button style={myStyle}
                className="accordion-button collapsed border border-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
