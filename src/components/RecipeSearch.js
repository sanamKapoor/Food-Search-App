import React, { Component } from 'react'

class RecipeSearch extends Component {
  render() {
    const {value, handleSubmit, handleChange} = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-capitalize">
                search with <span className="text-danger">Food2Fork</span>  
              </h1>
              <form action="" className="mt-4" onSubmit={handleSubmit}>
               
              <div className="input-group">

                <input type="text" name="" id="" className="form-control" placeholder="type recipe" value={value} onChange={handleChange}/>

                <div className="input-group-append">
                  <button type="submit" className="input-group-text bg-primary text-light">Search</button>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RecipeSearch
