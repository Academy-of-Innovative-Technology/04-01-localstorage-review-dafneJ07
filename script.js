var key = "";


// SAVE
document.querySelector(".save").onclick = function() {
  key = document.querySelector("#saveKey").value;
    var value = document.querySelector("#saveValue").value;
    localStorage.setItem(key, value);
};


// LOAD
document.querySelector(".load").onclick = function() {
  key = document.querySelector("#loadKey").value;
    var value = localStorage.getItem(key);
    document.querySelector("#loadValue").value = value;
};

// UPDATE 
document.querySelector(".update").onclick = function() {
  key = document.querySelector("#updateKey").value;
    var value = document.querySelector("#updateValue").value;
    localStorage.setItem(key, value);
};

// DELETE
document.querySelector(".delete").onclick = function() {
  key = document.querySelector("#deleteKey").value;
    localStorage.removeItem(key);
    document.querySelector("#deleteKey").value = ""
};