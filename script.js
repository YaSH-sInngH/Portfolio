window.addEventListener('load', function () {
  setTimeout(() => {
    let loadingContent = document.querySelector('.loading');
      if(loadingContent)
      {
        loadingContent.style.display = 'none';
      }

    let hiddenContent = document.querySelector('.hidden-content');
    if (hiddenContent) 
    {
      hiddenContent.style.display = 'block';
    }

    var typed = new Typed('#element', {
      strings: ['<h1>I am a Passionate <span class=color>Developer/Coder.</span></h1>', '<h1>This is my<span class=color> Developer </span>Portfolio.</h1>'],
      typeSpeed: 40,
    });

  }, 3000);
})

const customCursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e)=>{
  customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});


// Get the box1, box2, and box3 elements by their IDs
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

// Function to change the text to "Projects" on hover for box1
function changeTextBox1() {
  box1.textContent = '10+';
}

// Function to reset the text on mouseout for box1
function resetText1() {
  box1.textContent = 'Projects';
}

// Function to change the text to "Experience" on hover for box2
function changeTextBox2() {
  box2.textContent = '2+';
}

// Function to reset the text on mouseout for box2
function resetText2() {
  box2.textContent = 'Experience';
}

// Function to change the text to "24/7 Support" on hover for box3
function changeTextBox3() {
  box3.textContent = '24 / 7 ';
}

// Function to reset the text on mouseout for box3
function resetText3() {
  box3.textContent = 'Support';
}

// Add event listeners for hover effect for box1, box2, and box3
box1.addEventListener('mouseover', changeTextBox1);
box1.addEventListener('mouseout', resetText1);
box2.addEventListener('mouseover', changeTextBox2);
box2.addEventListener('mouseout', resetText2);
box3.addEventListener('mouseover', changeTextBox3);
box3.addEventListener('mouseout', resetText3);


const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const imageElement = document.querySelectorAll('.p-card');

p_btns.addEventListener('click', (e)=> {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  
  imageElement.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) => 
    curElem.classList.remove("p-image-not-active"));
})