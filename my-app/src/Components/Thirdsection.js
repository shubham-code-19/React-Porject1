import React from "react"
import { AOS } from "aos"
import 'aos/dist/aos.css';
const Thirdsection = () => {

    return (
        <>
            <div className="container ">
                <div className="row justify-content-around mt-5 ">
                    <div className="col-md-5 align-self-center ">
                        <h6 className="third-section-aenean "> HEY CODERSSS WE ASLO LOVE FOOD</h6>
                        <h1>First, solve the problem. <br />THEN eat the food</h1>
                        <p className="third-section-para">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique.</p>
                    </div>
                    <div className="col-md-5 mt-5  ms-5">
                        <img  className="img-fluid" src="https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11c6a9804c1fef0bd52833_app-06.png" width="70%" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Thirdsection