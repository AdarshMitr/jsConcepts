//REST API call using fetch

async function callAPI() {
  let result=await fetch('https://jsonplaceholder.typicode.com/users');
  result= await result.json();
  console.log(result);
  document.getElementById('users').innerHTML=result
    .map((user)=>
    `<tr>
    <td>${user.name}</td>
     <td>${user.username}</td>
      <td>${user.email}</td>
       <td>${user.phone}</td>
        <td>${user.website}</td>
    </tr>`
    ).join('');
}
callAPI();
