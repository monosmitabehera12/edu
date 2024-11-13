function startFacultyBlockFlow() {
    document.getElementById('question-section').style.display = 'block';
    document.getElementById('faculty-cards').style.display = 'none';
    document.getElementById('question-title').innerText = 'Choose a Block';
    const blocks = ['BSH', 'RDB', 'CSE'];
    generateDynamicOptions(blocks, showFacultyCards);
}
function startSectionFacultyFlow() {
    document.getElementById('question-section').style.display = 'block';
    document.getElementById('faculty-cards').style.display = 'none';
    document.getElementById('question-title').innerText = 'Your Branch';
    const branches = ['B.Tech', 'B.Sc'];
    generateDynamicOptions(branches, handleBranchSelection);
}
function handleBranchSelection(selectedBranch) {
    if (selectedBranch === 'B.Tech') {
        const streams = ['CSE','ECE','BIO TECH']
        document.getElementById('question-title').innerText = 'Your Stream';
        generateDynamicOptions(sections, showFacultyCards);  
      }
       else if (selectedBranch === 'B.Sc') {
        const streams = ['Nursing'];
        document.getElementById('question-title').innerText = 'Your Stream';
        generateDynamicOptions(streams, handleStreamSelection);
    }

}


function handleStreamSelection(selectedStream) {
    const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'];
    document.getElementById('question-title').innerText = 'Your Semester';
    generateDynamicOptions(semesters, handleSemesterSelection);
}

function handleSemesterSelection(selectedSemester) {
    const sections = ['A', 'B', 'C'];
    document.getElementById('question-title').innerText = 'Your Section';
    generateDynamicOptions(sections, showFacultyCards);
}

function generateDynamicOptions(options, callback) {
    const dynamicOptionsContainer = document.getElementById('dynamic-options');
    dynamicOptionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-primary');
        button.innerText = option;
        button.onclick = () => callback(option);
        dynamicOptionsContainer.appendChild(button);
    });
}


function showFacultyCards(selectedOption) {
    const facultyData = [
        { name: 'Mr.Santosh Kumar Panda', designation: 'Asst Professor', room: 'A-101', img: 'santoshsir.jpg',width:'300',height:'200' },
        { name: 'Dr. D.Anil Kumar ', designation: 'Asst Professor and HOD', room: 'D-404', img: 'anilsir.jpg' },
        { name: 'Mr.Bhavani Shankar Panda', designation: 'Asst Professor', room: 'A-101', img: 'bhavanishankar.jpg',width:'300',height:'200' },
        { name: 'Ms Archana Patnaik ', designation: 'Asst Professor', room: 'A-101', img: 'archana.jpg',width:'300',height:'200' },
        { name: 'Mrs Gitanjali Mishra', designation: 'Asst Professor', room: 'A-101', img: 'gitanjali.jpg',width:'300',height:'200' },
        { name: 'Mr.Kiran kumar Sahu', designation: 'Lecturer', room: 'A-101', img: 'kiransir.jpg',width:'300',height:'200' },
        { name: 'Dr.K. Murali Gopal', designation: 'Deputee Dean CSE', room: 'A-101', img: 'kmuraligopalsir.jpg',width:'300',height:'200' },
        { name: 'Mr.Murali k Senapati ', designation: 'Asst Professor', room: 'A-101', img: 'muralisir.jpg',width:'300',height:'200' },
        { name: 'Dr.Raghavendra Kumar', designation: ' Professor', room: 'A-101', img: 'ragha.jpg',width:'300',height:'200' },
        { name: 'Mr.Ranjit Panigrahi', designation: 'Asst Professor', room: 'A-101', img: 'ranjitsir.jpg',width:'300',height:'200' },
        { name: 'Mr.Sibo Prasad Patro', designation: 'Asst Professor', room: 'A-101', img: 'shibo.jpg',width:'300',height:'200' },
        { name: 'Ms.Shivani Subhadarshini', designation: 'Asst Professor', room: 'A-101', img: 'shivanimam.jpg',width:'300',height:'200' },
        { name: 'Mr.Sudheer Babu', designation: 'Asst Professor', room: 'A-101', img: 'sudhibabu.jpg',width:'300',height:'200' },
        { name: 'Mr.Ashutosh Mallik', designation: 'Lecturer', room: 'A-101', img: 'vishal.jpg',width:'300',height:'200' },
        { name: 'Mr.Vishal Kumar Swain', designation: 'lecturer', room: 'A-101', img: 'vishal1.jpg',width:'300',height:'200' },
        { name: 'Ms.Aparna Babu', designation: 'Lecturer', room: 'A-101', img: 'aparna.jpg',width:'300',height:'200' },
        { name: 'Ms.Bilasini Ajmera', designation: 'Asst Professor', room: 'A-101', img: 'bilasini.jpg',width:'300',height:'200' },

            ];

    const facultyCardsContainer = document.getElementById('faculty-card-container');
    facultyCardsContainer.innerHTML = '';
    facultyData.forEach(faculty => {
        const facultyCard = document.createElement('div');
        facultyCard.classList.add('col-md-4');
        facultyCard.innerHTML = `
            <div class="faculty-card">
                <img src="${faculty.img}" alt="${faculty.name}">
                <div class="faculty-card-body">
                    <h5>${faculty.name}</h5>
                    <p>${faculty.designation}</p>
                    <p>Room: ${faculty.room}</p>
                </div>
            </div>
        `;
        facultyCardsContainer.appendChild(facultyCard);
    });

    document.getElementById('question-section').style.display = 'none';
    document.getElementById('faculty-cards').style.display = 'block';
}