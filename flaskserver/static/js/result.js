window.addEventListener('load',()=>{
  const cloud =localStorage.getItem('CLOUD');
  const cores =localStorage.getItem('CORES');
  const hours =localStorage.getItem('HOURS');
  const band =localStorage.getItem('BAND');
  const cpu =localStorage.getItem('CPU');
  const os =localStorage.getItem('OS');
  const date1 =localStorage.getItem('DATE1');
  const date2 =localStorage.getItem('DATE2');
  const memory =localStorage.getItem('MEMORY');

  document.getElementById('demo1').innerHTML=cloud;
  document.getElementById('demo2').innerHTML=cores;
  document.getElementById('demo3').innerHTML=hours;
  document.getElementById('demo4').innerHTML=band;
  document.getElementById('demo5').innerHTML=cpu;
  document.getElementById('demo6').innerHTML=os;
  document.getElementById('demo7').innerHTML=date1;
  document.getElementById('demo8').innerHTML=date2;
  document.getElementById('demo9').innerHTML=memory;
})
