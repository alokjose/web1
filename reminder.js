function setReminder(taskText, minutes) {
  setTimeout(() => {
    alert(`⏰ Reminder: Time to do "${taskText}"`);
    // Optional: play sound
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
  }, minutes * 60000);
}

// Example usage:
addTask = () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
  taskList.appendChild(li);

  saveTasks();
  taskInput.value = "";

  // Set reminder for 5 minutes
  setReminder(taskText, 5);
}