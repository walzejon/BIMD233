function getUserInput() {
  var cmd = prompt("Enter a command:" + state, "next");
  return cmd;
}
var state = "IDLE";
var cmd = "";
do {
  switch (state) {
    case "IDLE":
      {
        if (cmd === "run") {
          state = "S1";
        }
      }
      break;
    case "S1":
      {
        if (cmd === "next") {
          state = "S2";
        } else if (cmd === "skip") {
          state = "S3";
        } else if (cmd === "prev") {
          state = "S4";
        }
      }
      break;
    case "S2": {
      if (cmd === "next") {
        state = "S3";
      }
      break;
    }
    case "S3": {
      if (cmd === "next") {
        state = "S4";
      } else if (cmd === "home") {
        state = "IDLE";
      }
      break;
    }
    case "S4": {
      if (cmd === "next") {
        state = "S1";
      }
      break;
    }
  }
  cmd = getUserInput();
} while (cmd != "exit");