const Result = ({data}) => {

    const arr = data.map(obj=> {
        return (
          <tr>
            <th scope="row">{obj.id}</th>
            <td>{obj.first_name}</td>
            <td>{obj.last_name}</td>
            <td>{obj.email}</td>
            <td>{obj.gender}</td>
            <td>{obj.income}</td>
            <td>{obj.car}</td>
            <td>{obj.city ? obj.city : obj._id}</td>
            <td>{obj.quote}</td>
            <td>{obj.phone_price}</td>
            <td>{obj.user_count}</td>
          </tr>
        )
    })

    return (
        <div>
<table className="table table-dark table-striped-columns">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">email</th>
      <th scope="col">gender</th>
      <th scope="col">income</th>
      <th scope="col">Car</th>
      <th scope="col">city</th>
      <th scope="col">quote</th>
      <th scope="col">phone_price</th>
      <th scope="col">user_count</th>
    </tr>
  </thead>
  <tbody>

    {arr}

  </tbody>
</table>

        {/* {data ? console.log(Object.keys(data[0])): ""} */}
        </div>
    )
}

export default Result;