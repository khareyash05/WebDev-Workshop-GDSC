document.querySelector(".todo-wrapper").addEventListener("click", (e) => {
    if (e.target.className === "todo") {
      let msg = confirm(
        `Are you sure you want to delete \n ${e.target.innerText}`
      );

      if (msg == true) {
        document.querySelector(".todo-wrapper").removeChild(e.target);
      }
    }
  });

//SUMMARY
//1.we added an event listener that listens to a click event on every task
//2. we then checked using an if statement if the task was clicked upon
//3. finally, we delete the task that was clicked upon after warning the user for confirmation