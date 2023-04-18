const peopleTable = document.getElementById("peopleTable");
const peopleList = document.getElementById("peopleList");
const btPrevious = document.getElementById("btPrevious");
const btNext = document.getElementById("btNext");

const headers = {
  "X-Parse-Application-Id": "e8ql5D9JsmMdxox9VpFAM9Z3Rcgs8oMZ7OWfncJZ",
  "X-Parse-REST-API-Key": "MWmKIs1Ik7S9bCFAykdTNSIdsHlXmHLXXiMNtb77"
}
// let starWarsData = {};

const renderPeopleTable = (people) => {
  peopleTable.innerHTML = "<tr><th>Name</th><th>Birth Year</th></tr>";
  people.forEach(person => {
    const nameText = document.createTextNode(person.name);
    const nameTd = document.createElement('td');
    nameTd.appendChild(nameText);

    const birthYearText = document.createTextNode(person.birth_year);
    const birthYearTd = document.createElement('td');
    birthYearTd.appendChild(birthYearText);
     
    const tr = document.createElement('tr');
    tr.appendChild(nameTd);
    tr.appendChild(birthYearTd);

    peopleTable.appendChild(tr);
  })
}

const renderPeopleList = (people) => {
  peopleList.innerHTML = "";
  people.forEach(person => {
    const text = document.createTextNode(person.name);
    const li = document.createElement("li");
    li.appendChild(text);
    peopleList.appendChild(li);
  });
};

const configureButtons = (data) => {
  btPrevious.disabled = !data.previous;
  btPrevious.onclick = () => {
    asyncRetreivePeople(data.previous);
    btPrevious.disabled = true;
    btNext.disabled = true;
  }

  btNext.disabled = !data.next;
  btNext.onclick = () => {
    asyncRetreivePeople(data.next);
    btPrevious.disabled = true;
    btNext.disabled = true;
  }
}

const retreivePeople = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // starWarsData = data;
      configureButtons(data);
      renderPeopleList(data.results);
      renderPeopleTable(data.results);
    });
};

const asyncRetreivePeople = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  configureButtons(data);
  renderPeopleList(data.results);
  renderPeopleTable(data.results);
};

const asyncRetreiveTask = async () => {
  const res = await fetch('https://parseapi.back4app.com/classes/Tarefa', {
    headers
  });
  const data = await res.json();
  console.log('tasks', data);
}

// const handleBtPreviousClick = () => {
//   retreivePeople(starWarsData.previous);
// }

// const handleBtNextClick = () => {
//   retreivePeople(starWarsData.next);
// }

asyncRetreivePeople("https://swapi.dev/api/people/?page=1");
asyncRetreiveTask();

// btPrevious.onclick = handleBtPreviousClick;
// btNext.onclick = handleBtNextClick;
