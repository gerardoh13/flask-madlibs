mlForm = document.getElementById("madlibs-form");
selectStory = document.getElementById("select-story-form");

if (mlForm) {
  mlForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = document.querySelectorAll("input");
    console.log("test");
    for (let i = 0; i < inputs.length - 1; i++) {
      if (inputs[i].value === "") {
        alert("Please answer all fields");
        return;
      } else if (inputs[i].value.length < 3) {
        alert("all answers should be at least 3 charactes long");
        return;
      }
    }
    mlForm.submit();
    mlForm.reset();
  });
}

if (selectStory) {
  selectStory.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.getElementById("select-story").value !== ""){
        selectStory.submit()
    } else {
        alert('Select a valid story')
    }
  });
}
