function submitButton() {
  const InputName = document.getElementById("InputName").value;
  const InputAge = document.getElementById("InputAge").value;
  const InputMoney = document.getElementById("InputMoney").value;

  if (
    InputName.length < 10 ||
    InputAge < 25 ||
    InputMoney < 100000 ||
    InputMoney > 1000000
  ) {
    alert("Mohon untuk diisi sesuai ketentuan!");
  } else {
    const table = document.getElementById("myTable");
    const Row = table.insertRow(-1);

    const cel1 = Row.insertCell(0);
    const cel2 = Row.insertCell(1);
    const cel3 = Row.insertCell(2);

    cel1.innerHTML = InputName;
    cel2.innerHTML = InputAge;
    cel3.innerHTML = "Rp " + InputMoney;

    nilaiAge.push(Number(InputAge));
    nilaiMoney.push(Number(InputMoney));
  }
}

function resumeButton() {
  const avgAge = nilaiAverage(nilaiAge);
  const avgMoney = nilaiAverage(nilaiMoney);
  document.getElementById("dataResume").innerHTML =
    "Rata rata pendaftar memiliki uang sangu sebesar Rp " +
    avgMoney +
    " dengan rata rata umur " +
    avgAge +
    " Tahun";
}

const nilaiAge = [];
const nilaiMoney = [];

function nilaiAverage(angka) {
  let total = 0;
  for (let i = 0; i < angka.length; i++) {
    total += angka[i];
  }
  let average = nilaiTotal(angka) / angka.length;
  return average;
}
