var values = {
  TB: null,
  GB: null,
  MB: null,
  KB: null,
  BYTE: null,
  TBIT: null,
  GBIT: null,
  MBIT: null,
  KBIT: null,
  BIT: null
};

function updateValues(excludeId) {
  for (var id in values) {
    if(id.toLowerCase() != excludeId) {
      document.getElementById(id.toLowerCase()).value = values[id];
    }
  }
}

function convert(event) {
  var inputId = event.target.id;
  var inputValue = parseFloat(event.target.value); // get the numeric input value
  
  // conversion code:
  switch (inputId) {
    case "tb":
      values.TB = inputValue;
      values.GB = inputValue * 1024;
      values.MB = values.GB * 1024;
      values.KB = values.MB * 1024;
      values.BYTE = values.KB * 1024;
      calculateBits();
      break;

    case "gb":
      values.GB = inputValue;
      values.TB = values.GB / 1024;
      values.MB = values.GB * 1024;
      values.KB = values.MB * 1024;
      values.BYTE = values.KB * 1024;
      calculateBits();
      break;
    
    case "mb":
      values.MB = inputValue;
      values.GB = values.MB / 1024;
      values.TB = values.GB / 1024;
      values.KB = values.MB * 1024;
      values.BYTE = values.KB * 1024;
      calculateBits();
      break;

    case "kb":
      values.KB = inputValue;
      values.MB = values.KB / 1024;
      values.GB = values.MB / 1024;
      values.TB = values.GB / 1024;
      values.BYTE = values.KB * 1024;
      calculateBits();
      break;

    case "byte":
      values.BYTE = inputValue;
      values.KB = values.BYTE / 1024;
      values.MB = values.KB / 1024;
      values.GB = values.MB / 1024;
      values.TB = values.GB / 1024;
      calculateBits();
      break;

    case "tbit":
      values.TBIT = inputValue;
      values.GBIT = values.TBIT * 1024;
      values.MBIT = values.GBIT * 1024;
      values.KBIT = values.MBIT * 1024;
      values.BIT = values.KBIT * 1024;
      calculateBytes();
      break;

    case "gbit":
      values.GBIT = inputValue;
      values.TBIT = values.GBIT / 1024;
      values.MBIT = values.GBIT * 1024;
      values.KBIT = values.MBIT * 1024;
      values.BIT = values.KBIT * 1024;
      calculateBytes();
      break;

    case "mbit":
      values.MBIT = inputValue;
      values.GBIT = values.MBIT / 1024;
      values.TBIT = values.GBIT / 1024;
      values.KBIT = values.MBIT * 1024;
      values.BIT = values.KBIT * 1024;
      calculateBytes();
      break;

    case "kbit":
      values.KBIT = inputValue;
      values.MBIT = values.KBIT / 1024;
      values.GBIT = values.MBIT / 1024;
      values.TBIT = values.GBIT / 1024;
      values.BIT = values.KBIT * 1024;
      calculateBytes();
      break;

    case "bit":
      values.BIT = inputValue;
      values.KBIT = values.BIT / 1024;
      values.MBIT = values.KBIT / 1024;
      values.GBIT = values.MBIT / 1024;
      values.TBIT = values.GBIT / 1024;
      calculateBytes();
      break;
  }


  // calling the function to set the input field values:
  updateValues(inputId);
}

// listeners for all fields in a loop:
for (var id in values) {
  document.getElementById(id.toLowerCase()).addEventListener("input", convert);
}

function calculateBits() {
  values.TBIT = values.TB * 8;
  values.GBIT = values.GB * 8;
  values.MBIT = values.MB * 8;
  values.KBIT = values.KB * 8;
  values.BIT = values.BYTE * 8;
}

function calculateBytes() {
  values.TB = values.TBIT / 8;
  values.GB = values.GBIT / 8;
  values.MB = values.MBIT / 8;
  values.KB = values.KBIT / 8;
  values.BYTE = values.BIT / 8;
}
