import React from 'react'
import page_header_01 from '../../assets/images/banner/inner-header/page-header-01.jpg'

function PageHeader() {
  return (
    <div>
     <div className="inner-header bg-holder" style={{backgroundImage: `url(${page_header_01})`}}>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-md-12 text-center">
              <h1 className="title">About ITinfinite</h1>
              <p>Our Expertise. Know more about what we do</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default PageHeader
