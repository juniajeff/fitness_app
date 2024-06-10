/* set of programs -> set of images for each program */
const example_programs = {
    'Bodyweight-Easy':{
        first: 'images/body-easy-1.jpg',
        second: 'images/body-easy-2.jpg',
        third: 'images/body-easy-3.jpg',
    },
    'Bodyweight-Medium':{
        first: 'images/body-med-1.jpg',
        second: 'images/body-med-2.jpg',
        third: 'images/body-med-3.jpg',
    },
    'Bodyweight-Hard':{
        first: 'images/body-hard-1.jpg',
        second: 'images/body-hard-2.jpg',
        third: 'images/body-hard-3.jpg',
    },
    'Cardio-Easy':{
        first: 'images/cardio-easy-1.jpg',
        second: 'images/cardio-easy-2.jpg',
        third: 'images/cardio-easy-3.jpg',
    },
    'Cardio-Medium':{
        first: 'images/cardio-med-1.jpg',
        second: 'images/cardio-med-2.jpg',
        third: 'images/cardio-med-3.jpg',
    },
    'Cardio-Hard':{
        first: 'images/cardio-hard-1.jpg',
        second: 'images/cardio-hard-2.jpg',
        third: 'images/cardio-hard-3.jpg',
    },
    'Gym-Easy':{
        first: 'images/gym-easy-1.png',
        second: 'images/gym-easy-2.png',
        third: 'images/gym-easy-3.png',
    },
    'Gym-Medium':{
        first: 'images/gym-med-1.png',
        second: 'images/gym-med-2.png',
        third: 'images/gym-med-3.png',
    },
    'Gym-Hard':{
        first: 'images/gym-hard-1.png',
        second: 'images/gym-hard-2.png',
        third: 'images/gym-hard-3.png',
    },
    'Yoga-Easy':{
        first: 'images/yoga-easy-1.jpg',
        second: 'images/yoga-easy-2.jpg',
        third: 'images/yoga-easy-3.jpg',
    },
    'Yoga-Medium':{
        first: 'images/yoga-med-1.jpg',
        second: 'images/yoga-med-2.jpg',
        third: 'images/yoga-med-3.jpg',
    },
    'Yoga-Hard':{
        first: 'images/yoga-hard-1.jpg',
        second: 'images/yoga-hard-2.jpg',
        third: 'images/yoga-hard-3.jpg',
    },
    'Rest day':{
        first: 'images/rest-day-1.jpg',
        second: 'images/rest-day-2.jpg',
        third: 'images/rest-day-3.jpg',
        fourth: 'images/rest-day-4.jpg'
    },
};

/* example meal plans */
const mealPlans = {
    'Standard-first': {
        Breakfast: "Scrambled eggs with spinach and whole grain toast",
        Lunch: "Grilled chicken salad with mixed greens, cherry tomatoes, and balsamic vinaigrette",
        Snack: "Apple slices with almond butter",
        Dinner: "Baked salmon, quinoa, and steamed broccoli"
    },
    'Standard-second': {
        Breakfast: "Greek yogurt with honey and mixed berries",
        Lunch: "Turkey and avocado wrap with a side of baby carrots",
        Snack: "Hummus with cucumber slices",
        Dinner: "Beef stir-fry with bell peppers and brown rice"
    },
    'Standard-third': {
        Breakfast: "Oatmeal with banana slices and chia seeds",
        Lunch: "Chicken Caesar salad with whole grain croutons",
        Snack: "Handful of mixed nuts",
        Dinner: "Spaghetti with meatballs and a side salad"
    },
    'Standard-fourth': {
        Breakfast: "Smoothie with spinach, banana, and protein powder",
        Lunch: "Grilled chicken and quinoa bowl with roasted vegetables",
        Snack: "Sliced bell peppers with guacamole",
        Dinner: "Pork chops with sweet potato mash and green beans"
    },
    'Standard-fifth': {
        Breakfast: "Whole grain cereal with milk and sliced strawberries",
        Lunch: "Tuna salad sandwich on whole grain bread",
        Snack: "Cottage cheese with pineapple chunks",
        Dinner: "Grilled shrimp with a side of wild rice and asparagus"
    },
    'Standard-sixth': {
        Breakfast: "Pancakes with maple syrup and a side of turkey bacon",
        Lunch: "BLT sandwich with a side salad",
        Snack: "Orange slices",
        Dinner: "Chicken fajitas with bell peppers and whole wheat tortillas"
    },
    'Standard-seventh': {
        Breakfast: "Avocado toast with poached eggs",
        Lunch: "Roast beef sandwich with a side of coleslaw",
        Snack: "Trail mix",
        Dinner: "Baked cod with roasted Brussels sprouts and brown rice"
    },
    'Vegetarian-first': {
        Breakfast: "Greek yogurt with granola and mixed berries",
        Lunch: "Quinoa salad with chickpeas, cucumber, tomatoes, and feta",
        Snack: "Apple with almond butter",
        Dinner: "Vegetable stir-fry with tofu and brown rice"
    },
    'Vegetarian-second': {
        Breakfast: "Smoothie with spinach, banana, and almond milk",
        Lunch: "Grilled vegetable and hummus wrap",
        Snack: "Carrot sticks with ranch dip",
        Dinner: "Lentil soup with a side of whole grain bread"
    },
    'Vegetarian-third': {
        Breakfast: "Oatmeal with almond milk, walnuts, and blueberries",
        Lunch: "Caprese salad with tomatoes, mozzarella, and basil",
        Snack: "Handful of mixed nuts",
        Dinner: "Eggplant Parmesan with a side salad"
    },
    'Vegetarian-fourth': {
        Breakfast: "Whole grain toast with avocado and a boiled egg",
        Lunch: "Black bean and corn salad with avocado dressing",
        Snack: "Greek yogurt with honey",
        Dinner: "Stuffed bell peppers with quinoa, black beans, and cheese"
    },
    'Vegetarian-fifth': {
        Breakfast: "Chia pudding with coconut milk and mango",
        Lunch: "Spinach and feta stuffed portobello mushrooms",
        Snack: "Sliced cucumber with hummus",
        Dinner: "Sweet potato and black bean tacos with slaw"
    },
    'Vegetarian-sixth': {
        Breakfast: "Pancakes with maple syrup and fresh berries",
        Lunch: "Falafel wrap with tzatziki and mixed greens",
        Snack: "Edamame",
        Dinner: "Mushroom risotto with a side of roasted vegetables"
    },
    'Vegetarian-seventh': {
        Breakfast: "Smoothie bowl with granola and sliced bananas",
        Lunch: "Grilled cheese sandwich with tomato soup",
        Snack: "Trail mix",
        Dinner: "Spinach and ricotta stuffed shells with marinara sauce"
    },
    'Pescatarian-first': {
        Breakfast: "Scrambled eggs with smoked salmon and whole grain toast",
        Lunch: "Tuna salad with mixed greens and balsamic vinaigrette",
        Snack: "Apple slices with almond butter",
        Dinner: "Baked salmon with quinoa and steamed broccoli"
    },
    'Pescatarian-second': {
        Breakfast: "Greek yogurt with honey and mixed berries",
        Lunch: "Grilled shrimp and avocado salad",
        Snack: "Hummus with cucumber slices",
        Dinner: "Cod fillets with sweet potato mash and green beans"
    },
    'Pescatarian-third': {
        Breakfast: "Oatmeal with banana slices and chia seeds",
        Lunch: "Sushi rolls with a side of miso soup",
        Snack: "Handful of mixed nuts",
        Dinner: "Grilled mahi-mahi with wild rice and asparagus"
    },
    'Pescatarian-fourth': {
        Breakfast: "Smoothie with spinach, banana, and protein powder",
        Lunch: "Tuna poke bowl with brown rice and vegetables",
        Snack: "Sliced bell peppers with guacamole",
        Dinner: "Clam chowder with a side of whole grain bread"
    },
    'Pescatarian-fifth': {
        Breakfast: "Whole grain cereal with milk and sliced strawberries",
        Lunch: "Salmon and avocado wrap",
        Snack: "Cottage cheese with pineapple chunks",
        Dinner: "Shrimp scampi with whole wheat pasta and a side salad"
    },
    'Pescatarian-sixth': {
        Breakfast: "Pancakes with maple syrup and a side of turkey bacon",
        Lunch: "Grilled fish tacos with slaw",
        Snack: "Orange slices",
        Dinner: "Baked tilapia with roasted Brussels sprouts and brown rice"
    },
    'Pescatarian-seventh': {
        Breakfast: "Avocado toast with poached eggs",
        Lunch: "Crab salad with mixed greens and lemon vinaigrette",
        Snack: "Trail mix",
        Dinner: "Baked trout with sautéed spinach and quinoa"
    },
    'Mediterranean-first': {
        Breakfast: "Greek yogurt with honey, walnuts, and berries",
        Lunch: "Quinoa salad with chickpeas, cucumber, tomatoes, and feta",
        Snack: "Olives and a handful of almonds",
        Dinner: "Grilled chicken with a side of tabbouleh and roasted vegetables"
    },
    'Mediterranean-second': {
        Breakfast: "Smoothie with spinach, banana, and almond milk",
        Lunch: "Mediterranean vegetable wrap with hummus and mixed greens",
        Snack: "Carrot sticks with tzatziki",
        Dinner: "Baked salmon with a side of Greek salad and whole grain bread"
    },
    'Mediterranean-third': {
        Breakfast: "Oatmeal with almond milk, honey, and chopped nuts",
        Lunch: "Lentil soup with a side of whole grain bread",
        Snack: "Apple slices with almond butter",
        Dinner: "Stuffed bell peppers with quinoa, vegetables, and feta"
    },
    'Mediterranean-fourth': {
        Breakfast: "Whole grain toast with avocado and a boiled egg",
        Lunch: "Caprese salad with tomatoes, mozzarella, and basil",
        Snack: "Greek yogurt with honey and a handful of walnuts",
        Dinner: "Grilled shrimp with a side of couscous and steamed vegetables"
    },
    'Mediterranean-fifth': {
        Breakfast: "Chia pudding with coconut milk and berries",
        Lunch: "Spinach and chickpea salad with lemon vinaigrette",
        Snack: "Hummus with sliced bell peppers",
        Dinner: "Baked cod with a side of roasted Brussels sprouts and wild rice"
    },
    'Mediterranean-sixth': {
        Breakfast: "Pancakes made with whole grain flour, topped with fresh fruit",
        Lunch: "Falafel wrap with tzatziki and mixed greens",
        Snack: "Handful of mixed nuts and dried fruits",
        Dinner: "Grilled chicken with a side of ratatouille and whole grain pasta"
    },
    'Mediterranean-seventh': {
        Breakfast: "Smoothie bowl with granola and sliced bananas",
        Lunch: "Greek salad with olives, cucumbers, tomatoes, and feta",
        Snack: "Sliced cucumber with hummus",
        Dinner: "Grilled fish with a side of Mediterranean quinoa and a Greek salad"
    }
};

/* Default Program Attributes */
const DEFAULT_TYPE = 'Gym';
const DEFAULT_DIFF = 'Beginner';
const DEFAULT_DIET = 'Standard';

let curr_type = localStorage.getItem('curr_type') || DEFAULT_TYPE;
let curr_diff = localStorage.getItem('curr_diff') || DEFAULT_DIFF;
let curr_diet = localStorage.getItem('curr_diet') || DEFAULT_DIET;

let temp_diet = curr_diet;
let temp_type = curr_type;
let temp_diff = curr_diff;

let selected_day_type = 'exercise';
let selected_day_order = 'first';

/* Toggle sidebar open and close */
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("body_contents");
    var text = document.querySelectorAll(".sidebar .sidebar-text");
    var page_title = document.querySelector(".toolbar h1");

    // When open
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "70px";
        content.style.marginLeft = "80px";
        page_title.style.marginLeft = "80px";
        text.forEach(function(text) {
            text.style.opacity = "0";
        });

    // When closed
    } else {
        sidebar.style.width = "250px";
        content.style.marginLeft = "260px";
        page_title.style.marginLeft = "260px";
        text.forEach(function(text) {
            text.style.opacity = "1";
        });
    }
}

/* Change exercise / meal programs */
function update_program(input, isdiet, istype, istemp) {
    if (isdiet){
        if (istemp){
            temp_diet = input;
        }
        else {
        curr_diet = input;
        localStorage.setItem('curr_diet', curr_diet);
        }
    }    else {
        if (istemp) { 
            if (istype) {
                temp_type = input;
            } else {
                temp_diff = input;
            }
        } else {
            if (istype) {
                curr_type = input;
                localStorage.setItem('curr_type', curr_type);
            } else {
                curr_diff = input;
                localStorage.setItem('curr_diff', curr_diff);
            }
        }   
    }
}

/* Save chosen program */
function save_changes(){
    curr_type = temp_type;
    localStorage.setItem('curr_type', curr_type);
    curr_diff = temp_diff;
    localStorage.setItem('curr_diff', curr_diff);
    curr_diet = temp_diet;
    localStorage.setItem('curr_diet', curr_diet);
}

/* Update program name, diet plan on header*/
function update_display() {
    /*program name*/
    const curr_prog = `${curr_type} - ${curr_diff}`;
    document.getElementById('current_program_details').innerText = curr_prog;

    /*diet name*/
    const curr_plan = `${curr_diet}`;
    const dietElement = document.getElementById('current_diet_details');
    if (dietElement) {
        dietElement.innerText = curr_plan;
    } else {
        console.error('Diet element not found');
    }

}

/* Display the image (exrcise) or text (diet)*/
function display_content(day_type, day_order) {
    
    /* display image for exercise program*/
    const imgElement = document.getElementById('displayed-image');
    if (day_type == 'rest') {
        imgElement.src = `images/rest-day-${day_order}.jpg`;
    } else if (day_type == 'exercise') {
        let ext = curr_type === 'Gym' ? 'png' : 'jpg';
        imgElement.src = `images/${curr_type}-${curr_diff}-${day_order}.${ext}`;
    
    /*display text for diet plan*/
    } else if (day_type == 'meal') {
        const mealPlanKey = `${curr_diet}-${day_order}`; 
        const mealPlan = mealPlans[mealPlanKey]; 

        const breakfastElement = document.getElementById('text-breakfast');
        breakfastElement.innerHTML = `<p>${mealPlan.Breakfast}</p>`;

        const lunchElement = document.getElementById('text-lunch');
        lunchElement.innerHTML = `<p>${mealPlan.Lunch}</p>`;

        const snackElement = document.getElementById('text-snack');
        snackElement.innerHTML = `<p>${mealPlan.Snack}</p>`;

        const dinnerElement = document.getElementById('text-dinner');
        dinnerElement.innerHTML = `<p>${mealPlan.Dinner}</p>`;
    }
}

/* Schedule Table: listener & selector */
document.querySelectorAll('#schedule-table td').forEach(cell => {
    cell.addEventListener('click', () => {
        document.querySelectorAll('#schedule-table td').forEach(cell => {
            cell.classList.remove('selected-day');
            let dayType = cell.getAttribute('day-type');
            if (dayType === 'meal') {
                cell.classList.add('meal-day');
            }
            else if (dayType === 'exercise') {
                cell.classList.add('exercise-day');
            } 
            else if (dayType === 'rest') {
                cell.classList.add('rest-day');
            }
        });
        cell.classList.remove('meal-day');
        cell.classList.remove('exercise-day');   
        cell.classList.remove('rest-day');
        cell.classList.add('selected-day');

        selected_day_type = cell.getAttribute('day-type');
        selected_day_order = cell.getAttribute('day-order');
        display_content(selected_day_type, selected_day_order);
    });
});


/* Display initial image on page load */
document.addEventListener('DOMContentLoaded', () => {
    display_content('exercise', selected_day_order);
});

/* change_programs.html : change program type & difficulty */
document.addEventListener('DOMContentLoaded', () => {
    update_display();

    /*change program type*/
    document.querySelectorAll('.grid-item-type').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.grid-item-type').forEach(item => {
                item.classList.remove('selected'); 
            });
            item.classList.add('selected');
            update_program(item.dataset.program_type, 0, 1, 1);
        });
    });

    /*change program difficulty*/
    document.querySelectorAll('.grid-item-diff').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.grid-item-diff').forEach(item => {
                item.classList.remove('selected');
            });
            item.classList.add('selected');
            update_program(item.dataset.program_difficulty, 0, 0, 1);
        });
    });

    /*change diet plan*/
    document.querySelectorAll('.grid-item-diet').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.grid-item-diet').forEach(item => {
                item.classList.remove('selected');
            });
            item.classList.add('selected');
            update_program(item.dataset.program_type, 1, 0, 1);
        });
    });
});


