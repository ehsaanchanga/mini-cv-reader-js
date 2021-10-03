//Array of objects which contains info about the candidates
const data = [
  {
    name: 'Jhon Doe',
    age: 18,
    city: 'kolkata',
    language: 'Python',
    framework: 'Django',
    image: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
  {
    name: 'Jack Ma',
    age: 28,
    city: 'Banglore',
    language: 'Javascript',
    framework: 'react',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    name: 'Mike Tyson',
    age: 24,
    city: 'Pune',
    language: 'Java',
    framework: 'Spring',
    image: 'https://randomuser.me/api/portraits/women/56.jpg',
  },
  {
    name: 'William Son',
    age: 20,
    city: 'Goa',
    language: 'PHP',
    framework: 'Laravel',
    image: 'https://randomuser.me/api/portraits/men/58.jpg',
  },
  {
    name: 'Taylor 123',
    age: 23,
    city: 'Hyderabad',
    language: 'CSS',
    framework: 'Bootstrap',
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
];

// Cv iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

//Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

const candidates = cvIterator(data);

// calling for the first time defaultly
nextCV();

function nextCV() {
  const currentCandidate = candidates.next().value;

  let image = document.getElementById('image');
  let profile = document.getElementById('profile');
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
  } else {
    alert('End of Candidate applications');
    window.location.reload();
  }
}
