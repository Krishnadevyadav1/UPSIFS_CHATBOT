function swapDivs(a) {
  let wm = document.getElementById("wm");
  let lo = document.getElementById("lo");

  wm.style.transition = "transform 0.5s ease-in-out, opacity 0.25s ease-out";
  lo.style.transition = "opacity 0.25s ease-out";

  lo.style.opacity = "0";

  setTimeout(() => {
    wm.style.transform = "translateX(-100%)";
    wm.style.opacity = "0";
  }, 500);

  setTimeout(() => {
    wm.style.transform = "translateX(0)";
    wm.style.opacity = "1";
    wm.style.right = "auto";
    wm.style.left = "0";

    lo.style.right = "5%";
    lo.style.left = "auto";
    lo.style.opacity = "1";
  }, 1500);

  if (a === 1) { forml(); }
  else { formr(); }
}

function forml() {
  document.querySelector('#lo').innerHTML = `
    <img class="h-30" id="loim" src="bot.png" alt="">
    <center class="text-orange-600 text-5xl font-bold">Welcome back!!</center>
    <div class="flex flex-col">
      <form class="flex flex-col justify-center" action="">
        <input class="text-orange-600 text-5xl font-bold mt-[5%] border-4 border-orange-400 rounded-full h-[30%] w-[100%]" type="text" placeholder="Enter your Username">
        <input class="text-orange-600 text-5xl font-bold mt-[5%] border-4 border-orange-400 rounded-full h-[30%] w-[100%]" type="password" placeholder="Enter your password">
        <a href="chat.html" class="text-white text-5xl bg-orange-600 hover:bg-orange-700 font-bold mt-[5%] ml-[33%] border-4 border-orange-700 rounded-full h-[20%] w-[30%]" id="la">
          <center>LOGIN</center>
        </a>
      </form>
    </div>
  `;
}

function formr() {
  document.querySelector('#lo').innerHTML = `
    <img class="h-30" id="loim" src="bot.png" alt="">
    <center class="text-orange-600 text-5xl font-bold">Create account</center>
    <div class="flex flex-col">
      <form class="flex flex-col justify-center" action="">
        <input class="text-orange-600 text-5xl font-bold mt-[5%] border-4 border-orange-400 rounded-full h-[30%] w-[100%]" type="text" placeholder="Enter your name">
        <input class="text-orange-600 text-5xl font-bold mt-[5%] border-4 border-orange-400 rounded-full h-[30%] w-[100%]" type="email" placeholder="Enter your Email">
        <input class="text-orange-600 text-5xl font-bold mt-[5%] border-4 border-orange-400 rounded-full h-[30%] w-[100%]" type="password" placeholder="Enter your password">
        <a href="chat.html" class="text-white text-5xl bg-orange-600 hover:bg-orange-700 font-bold mt-[5%] ml-[33%] border-4 border-orange-700 rounded-full h-[20%] w-[30%]" id="la">
          <center>SignUp</center>
        </a>
      </form>
    </div>
  `;
}

function reverseSwapDivs() {
  let wm = document.getElementById("wm");
  let lo = document.getElementById("lo");

  wm.style.transition = "transform 0.6s ease-in-out, opacity 0.3s ease-out";
  lo.style.transition = "opacity 0.3s ease-out, transform 0.6s ease-in-out";

  lo.style.opacity = "0";

  setTimeout(() => {
    wm.style.transform = "translateX(0)";
    wm.style.opacity = "1";
    wm.style.left = "auto";
    wm.style.right = "0";
  }, 500);

  setTimeout(() => {
    lo.style.transform = "translateX(0)";
    lo.style.opacity = "1";

    let screenWidth = window.innerWidth;
    let wmWidth = wm.offsetWidth;
    let loWidth = lo.offsetWidth;

    let margin = (screenWidth - wmWidth - loWidth) / 3;
    let adjustedMargin = margin * 0.0;

    lo.style.left = `${adjustedMargin}px`;
    lo.style.right = `${wmWidth + adjustedMargin}px`;
  }, 1000);

  iform();
}

function iform() {
  document.querySelector('#lo').innerHTML = `
    <img class="h-30 limg" src="bot.png" alt="">
        <button onclick="swapDivs(1)" class="text-white text-5xl font-bold border-2 border-white h-[12%] w-[70%] flex items-center justify-center rounded-full bg-[#FF4C00] hover:bg-white hover:text-[#FF4C00] transition duration-300 lb1" >Login</button>
        <button onclick="swapDivs(2)" class="text-white text-5xl font-bold border-2 border-white h-[12%] w-[70%] flex items-center justify-center rounded-full bg-[#FF4C00] hover:bg-white hover:text-[#FF4C00] transition duration-300 lb1" >Sign Up</button>
        <button class="text-[#FF4C00] text-4xl border-2 border-[#FF4C00] h-[12%] w-[70%] flex items-center justify-center rounded-full bg-white hover:bg-[#FF4C00] hover:text-white transition duration-300 lb1" >Continue with Google</button>
  `;
}
