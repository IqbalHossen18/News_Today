import React  from 'react'
const Spinner=()=> {
    return (
      <div>
            <div className="d-flex justify-content-center">
            <div className="spinner-border text-info my-4" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
      </div>
    )
}
export default Spinner 