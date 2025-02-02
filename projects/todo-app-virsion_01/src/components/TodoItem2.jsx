function TodoItem2() {

  let todoName = 'Go To College';
  let todoDate = ' 30/12/2024';
  return (

    <div className="container">



      <div className="row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">Danger</button>
        </div>
      </div>
    </div>
  )

}

export default TodoItem2;