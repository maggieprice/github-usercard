/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



// /* Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:



const entryPoint = document.querySelector('.cards');
axios.get(`https://api.github.com/users/maggieprice`)
.then (response => {
  console.log(response.data);
  const myGithubCard = gitCard(response.data);
  entryPoint.appendChild(myGithubCard);
})

const followersArray = [
  'thericktastic',
  'debauchery1st',
  'Nicci498',
  'aalvinlin', 
  'matthews7'
];

followersArray.forEach(user => {
axios.get(`https://api.github.com/users/${user}`)
  .then(data => {
    const newCards = gitCard(data.data);
    entryPoint.appendChild(newCards);
  });
})

.catch(error => {
    console.log(error);
  })

function gitCard(githubUsers){
  const newCard = document.createElement('div'),
   cardImg = document.createElement('img'), 
   cardInfo2 = document. createElement('div'),
   cardName = document.createElement('h3'),
   cardUser = document.createElement('p'),
   cardLocation = document.createElement('p'), 
   cardProfile = document.createElement('p'),
   cardLink = document.createElement('a'),
   cardFollowers = document.createElement('p'),
   cardFollowing = document.createElement('p'), 
   cardBio = document.createElement('p');

    cardImg.src=githubUsers.avatar_url;
    cardName.textContent = githubUsers.name; 
    cardUser.textContent = githubUsers.login;
    cardLocation.textContent = `Location: ${githubUsers.location}`;
    cardProfile.textContent = 'Profile: ';
    cardLink.textContent = githubUsers.url;
    cardLink.href = githubUsers.html_url;
    cardFollowers.textContent = `Followers: ${githubUsers.followers}`;
    cardFollowing.textContent = `Following: ${githubUsers.following}`;
    cardBio.textContent = `Bio: ${githubUsers.bio}`;

    newCard.classList.add("card");
    cardInfo2.classList.add("card-info");
    cardName.classList.add("name");
    cardUser.classList.add("username");
  
    newCard.appendChild(cardImg);
    newCard.appendChild(cardInfo2);
    cardInfo2.appendChild(cardName); 
    cardInfo2.appendChild(cardUser); 
    cardInfo2.appendChild(cardLocation); 
    cardInfo2.appendChild(cardProfile); 
    cardInfo2.appendChild(cardFollowers); 
    cardInfo2.appendChild(cardFollowing); 
    cardInfo2.appendChild(cardBio);
    cardProfile.appendChild(cardLink);
  
    return newCard;
    
}




// <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:  
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
