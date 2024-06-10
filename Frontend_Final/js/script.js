document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event triggered');

    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const personalInfoForm = document.getElementById('personal-info-form');
    const accountInfo = document.getElementById('account-info');
    const logoutLink = document.getElementById('logout-link');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('Sign up form submitted');

            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const nickname = document.getElementById('signup-nickname').value;
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Nickname:', nickname);

            let users = JSON.parse(localStorage.getItem('users')) || [];
            console.log('Users from localStorage:', users);

            // Check if email or nickname already exists
            if (users.some(user => user.email === email)) {
                alert('Email is already registered.');
                return;
            }

            if (users.some(user => user.nickname === nickname)) {
                alert('Nickname is already taken.');
                return;
            }

            // Check password strength
            if (password.length < 6) {
                alert('Password should be at least 6 characters long.');
                return;
            }

            const newUser = { email, password, nickname, friends: [], progress: {}, calendar: {} };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Sign up successful! Please log in.');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const users = JSON.parse(localStorage.getItem('users')) || [];

            console.log('Attempting login with email:', email);
            console.log('Users in localStorage:', users);

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                console.log('User found:', user);
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                checkLoggedIn();
                window.location.href = 'index.html';
            } else {
                console.log('Invalid email or password');
                alert('Invalid email or password.');
            }
        });
    }
//checking the login
    function checkLoggedIn() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        const loginLink = document.getElementById('login-link');
        const accountLink = document.getElementById('account-link');
        const logoutLink = document.getElementById('logout-link');

        if (isLoggedIn && loggedInUser) {
            if (loginLink) loginLink.style.display = 'none';
            if (accountLink) accountLink.style.display = 'block';
            if (logoutLink) logoutLink.style.display = 'block';
            console.log('User is logged in:', loggedInUser);
            return loggedInUser;
        } else {
            if (loginLink) loginLink.style.display = 'block';
            if (accountLink) accountLink.style.display = 'none';
            if (logoutLink) logoutLink.style.display = 'none';
            console.log('User is not logged in');
            return null;
        }
    }

    //logout functionality
    if (logoutLink) {
        logoutLink.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('loggedInUser');
            checkLoggedIn();
            window.location.href = 'index.html';
        });
    }

    //load and display user information
    function loadUserInfo() {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            const accountInfo = document.getElementById('account-info');
            if (accountInfo) {
                accountInfo.innerHTML = `
                    <p><strong>Email:</strong> ${loggedInUser.email}</p>
                    <p><strong>Nickname:</strong> ${loggedInUser.nickname}</p>
                    <p><strong>Weight:</strong> ${loggedInUser.weight || 'Not provided'} kg</p>
                    <p><strong>Height:</strong> ${loggedInUser.height || 'Not provided'} cm</p>
                    <p><strong>Lifestyle:</strong> ${loggedInUser.lifestyle || 'Not provided'}</p>
                    <p><strong>Preferred Nutrition:</strong> ${loggedInUser.nutrition || 'Not provided'}</p>
                `;
            }

            // Pre-fill the form with existing data
            if (document.getElementById('weight')) {
                document.getElementById('weight').value = loggedInUser.weight || '';
            }
            if (document.getElementById('height')) {
                document.getElementById('height').value = loggedInUser.height || '';
            }
            if (document.getElementById('lifestyle')) {
                document.getElementById('lifestyle').value = loggedInUser.lifestyle || 'active';
            }
            if (document.getElementById('nutrition')) {
                document.getElementById('nutrition').value = loggedInUser.nutrition || '';
            }
            if (document.getElementById('health-condition')) {
                document.getElementById('health-condition').value = loggedInUser.healthCondition || '';
            }
        }
    }

    // Handle health form submission
    const healthForm = document.getElementById('health-form');
    if (healthForm) {
        healthForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const weight = document.getElementById('weight').value;
            const height = document.getElementById('height').value;
            const lifestyle = document.getElementById('lifestyle').value;
            const nutrition = document.getElementById('nutrition').value;
            const healthCondition = document.getElementById('health-condition').value;
            const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

            if (loggedInUser) {
                loggedInUser.weight = weight;
                loggedInUser.height = height;
                loggedInUser.lifestyle = lifestyle;
                loggedInUser.nutrition = nutrition;
                loggedInUser.healthCondition = healthCondition;

                localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

                // Update users list in local storage
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const updatedUsers = users.map(user => {
                    if (user.email === loggedInUser.email) {
                        return loggedInUser;
                    }
                    return user;
                });
                localStorage.setItem('users', JSON.stringify(updatedUsers));

                loadUserInfo();
            }
        });
    }

    //social functionality
    function loadFriends() {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            const friendsUl = document.getElementById('friends-ul');
            if (friendsUl) {
                const friendsList = loggedInUser.friends || [];
                friendsUl.innerHTML = '';
                friendsList.forEach(friend => {
                    const li = document.createElement('li');
                    li.textContent = friend;
                    friendsUl.appendChild(li);

                    // Add button to view friend's progress
                    const viewProgressButton = document.createElement('button');
                    viewProgressButton.textContent = 'View Progress';
                    viewProgressButton.addEventListener('click', () => {
                        viewFriendProgress(friend);
                    });
                    li.appendChild(viewProgressButton);
                });
            }
        }
    }
//adding to the friendlist
    const addFriendForm = document.getElementById('add-friend-form');
    if (addFriendForm) {
        addFriendForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const friendNickname = document.getElementById('friend-nickname').value;
            const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
            const users = JSON.parse(localStorage.getItem('users')) || [];

            const friend = users.find(user => user.nickname === friendNickname);

            if (loggedInUser && friend) {
                loggedInUser.friends = loggedInUser.friends || [];
                loggedInUser.friends.push(friendNickname);

                // Update the friend's friends list
                friend.friends = friend.friends || [];
                friend.friends.push(loggedInUser.nickname);

                // Update localStorage for both users(error occuring here)
                localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
                const updatedUsers = users.map(user => {
                    if (user.email === loggedInUser.email) {
                        return loggedInUser;
                    } else if (user.email === friend.email) {
                        return friend;
                    }
                    return user;
                });
                localStorage.setItem('users', JSON.stringify(updatedUsers));

                loadFriends();
                const friendNicknameInput = document.getElementById('friend-nickname');
                if (friendNicknameInput) {
                    friendNicknameInput.value = ''; 
                }
                alert('Friend added successfully!');
            } else {
                alert('Nickname not found.');
            }
        });
    }

    // View friend's progress
    function viewFriendProgress(friendNickname) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const friend = users.find(user => user.nickname === friendNickname);

        if (friend) {
            const progressInfo = document.getElementById('progress-info');
            if (progressInfo) {
                progressInfo.innerHTML = `
                    <h3>${friendNickname}'s Progress</h3>
                    <p><strong>Weight:</strong> ${friend.weight || 'Not provided'} kg</p>
                    <p><strong>Height:</strong> ${friend.height || 'Not provided'} cm</p>
                    <p><strong>Lifestyle:</strong> ${friend.lifestyle || 'Not provided'}</p>
                    <p><strong>Preferred Nutrition:</strong> ${friend.nutrition || 'Not provided'}</p>
                    <h4>Calendar Progress</h4>
                `;
                displayFriendCalendar(friend.calendar);
            }
        } else {
            alert('Friend not found.');
        }
    }

    function displayFriendCalendar(calendarData) {
        const calendar = document.createElement('div');
        calendar.classList.add('calendar');

        const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.innerHTML = `
                <strong>${day}</strong>
                <div>
                    <label>Nutrition Plan:</label>
                    <textarea readonly>${calendarData[day]?.nutrition || ''}</textarea>
                </div>
                <div>
                    <label>Exercise Plan:</label>
                    <textarea readonly>${calendarData[day]?.exercise || ''}</textarea>
                </div>
                <div>
                    <label>Goal Achieved:</label>
                    <input type="checkbox" ${calendarData[day]?.goal ? 'checked' : ''} disabled />
                </div>
            `;
            if (calendarData[day]?.goal) {
                dayElement.classList.add('completed');
            } else {
                dayElement.classList.add('missed');
            }
            calendar.appendChild(dayElement);
        }

        const progressInfo = document.getElementById('progress-info');
        if (progressInfo) {
            progressInfo.appendChild(calendar);
        }
    }

    // Initialize the calendar
    function createCalendar() {
        const calendar = document.getElementById('calendar');
        if (calendar) {
            const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.classList.add('day');
                dayElement.innerHTML = `
                    <strong>${day}</strong>
                    <div>
                        <label for="nutrition-${day}">Nutrition Plan:</label>
                        <textarea id="nutrition-${day}"></textarea>
                    </div>
                    <div>
                        <label for="exercise-${day}">Exercise Plan:</label>
                        <textarea id="exercise-${day}"></textarea>
                    </div>
                    <div>
                        <label for="goal-${day}">Goal Achieved:</label>
                        <input type="checkbox" id="goal-${day}" />
                    </div>
                `;
                calendar.appendChild(dayElement);
            }
        }
    }
//loading calendar data
    function loadCalendarData() {
        const calendarData = JSON.parse(localStorage.getItem('calendarData')) || {};

        Object.keys(calendarData).forEach(day => {
            if (document.getElementById(`nutrition-${day}`)) {
                document.getElementById(`nutrition-${day}`).value = calendarData[day].nutrition || '';
            }
            if (document.getElementById(`exercise-${day}`)) {
                document.getElementById(`exercise-${day}`).value = calendarData[day].exercise || '';
            }
            if (document.getElementById(`goal-${day}`)) {
                document.getElementById(`goal-${day}`).checked = calendarData[day].goal || false;
                if (calendarData[day].goal) {
                    document.getElementById(`goal-${day}`).parentElement.parentElement.classList.add('completed');
                } else {
                    document.getElementById(`goal-${day}`).parentElement.parentElement.classList.add('missed');
                }
            }
        });
    }
//saving calendar
    function saveCalendarData() {
        const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        const calendarData = {};

        for (let day = 1; day <= daysInMonth; day++) {
            calendarData[day] = {
                nutrition: document.getElementById(`nutrition-${day}`).value,
                exercise: document.getElementById(`exercise-${day}`).value,
                goal: document.getElementById(`goal-${day}`).checked
            };
        }

        localStorage.setItem('calendarData', JSON.stringify(calendarData));

        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            loggedInUser.calendar = calendarData;
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const updatedUsers = users.map(user => {
                if (user.email === loggedInUser.email) {
                    return loggedInUser;
                }
                return user;
            });
            localStorage.setItem('users', JSON.stringify(updatedUsers));
        }
    }

    function initializeCalendar() {
        createCalendar();
        loadCalendarData();

        const calendar = document.getElementById('calendar');
        if (calendar) {
            calendar.addEventListener('input', saveCalendarData);
            calendar.addEventListener('change', saveCalendarData);
        }
    }

    // Initialize everything
    if (document.getElementById('calendar')) {
        initializeCalendar();
    }

    loadUserInfo();
    loadFriends();
    checkLoggedIn();
});