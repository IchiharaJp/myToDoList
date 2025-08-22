# myToDoList

A simple to do list web application made using React and Javascript.

Requirements:

- Clicking on the navigation bar of either the tasks or goals button will remove the current component on display
  and display the newly selected list
- Clicking on the add + button wil prompt to add the task or goal then add the newly created task component to the current list
- Clicking on the filter toggle button will change the display of the list to either all tasks and goals or only the non-completed ones
- If checkbox is clicked, the task component will be show the line crossed and will move to the completed section of that list
- unchecking the checked box will remove the cross and return the task or goal component back to the non-completed section

Components:

- TaskList (to store the tasks components, has completed and non-completed sections, same with goals)
- GoalList (store the goal components)
- Navi (navigate between taskList and goalList on display)
- AddBtn (when clicked, creates new task or goal component and adds the task or goal to the list)
- Filter (filters between show all, show non-completed only)
- Task (stores the task and can be crossed if clicked on the checkbox or deleted if clicked on the trash icon)
