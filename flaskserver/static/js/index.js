function handleSubmit(){
  const cloud = document.getElementById('cloud').value;
  const cores = document.getElementById("cores").value;
  const hours = document.getElementById("hours").value
  const band = document.getElementById("band").value;
  const cpu = document.getElementById("cpu").value;
  const os = document.getElementById("os").value;
  const date1 = document.getElementById("date1").value;
  const date2 = document.getElementById("date2").value;
  const memory = document.getElementById("memory").value;
  localStorage.setItem("CLOUD",cloud);
  localStorage.setItem("CORES",cores);
  localStorage.setItem("HOURS",hours);
  localStorage.setItem("BAND",band);
  localStorage.setItem("CPU",cpu);
  localStorage.setItem("OS",os);
  localStorage.setItem("DATE1",date1);
  localStorage.setItem("DATE2",date2);
  localStorage.setItem("MEMORY",memory);
  return;
}
function hours1()
{
  var hours = document.getElementById("hours").value;
  console.log(hours);
}

function cloud1()
{
  var cloud = document.getElementById("cloud").value;
  console.log(cloud);
}
function cores1(){
  var cores = document.getElementById("cores").value;
  console.log(cores);
}
function band1() {
  var band = document.getElementById("band").value;
  console.log(band);
}
  function cpu1() {
    var cpu = document.getElementById("cpu").value;
    console.log(cpu);
  }
  function os1() {
    var os = document.getElementById("os").value;
    console.log(os);
  }
  function date12() {
    var date1 = document.getElementById("date1").value;
    console.log(date1);
  }
  function date22(){
    var date2 = document.getElementById("date2").value;
    console.log(date2);
  }

function memory1() {
  var memory = document.getElementById("memory").value;
  console.log(memory);

}
