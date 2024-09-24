function ComponentSecont({value})
{
  const array = value.map((mydata,index) => {
    console.log(mydata);
    return <li>{mydata} {index+1}</li>
  }); 
    return(
      <div>
        <ul>{array}</ul>
      </div>
    ) 

  };

  export default ComponentSecont;
