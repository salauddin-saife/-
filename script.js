//1st Count js part starts.====================================
//=================================================>

let top_num=document.querySelector(".top_num");
let top_num_count=-1;

function top_number() {
  top_num_count++
  top_num.innerHTML=top_num_count;
  if(top_num_count==1){
    top_num.innerHTML.style.color=("red")
  }else if(top_num_count==2){
    top_num.innerHTML.style.color=("blue")
  }
  if(top_num_count==top_num.dataset.top_num){
    clearInterval(stop_top_num)
  }
}

let stop_top_num= setInterval(()=>{
  top_number();
},top_num.dataset.speed)







//Count js part starts.====================================
//=================================================>

let heading = document.querySelectorAll(".heading");
// console.log(heading)
//   console.log(heading.dataset.number);
//   console.log(heading.dataset.speed);

let arr = Array.from(heading);
// console.log(arr);

arr.map((item) => {
  //   console.log(item);

  let count = -1;

  function countjs() {
    count++;
    item.innerHTML = `${count}!`;
    if (count == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(() => {
    countjs();
  }, item.dataset.speed);
});

//type js part starts.====================================
//=================================================>

let name = document.querySelectorAll(".name");

let name_arr = Array.from(name);

name_arr.map((hello) => {
  let typecount = -1;

  function namefunc() {
    typecount++;
    hello.innerHTML += hello.dataset.text.charAt(typecount);
    // console.log(hello.dataset.text.charAt(typecount));
    if (typecount == hello.dataset.text.length) {
      // clearInterval(stoptypecount)
      typecount = -1;
      hello.innerHTML = "";
    }
  }

  let stoptypecount = setInterval(() => {
    //   console.log(name.dataset.text.charAt(typecount));
    namefunc();
  }, 1000);
});
