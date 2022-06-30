const secs = document.querySelectorAll('.sec')


const clearAll = () => {
  for(const sec of secs) {
    sec.classList.remove('active');
  }
}

const boxData = {
  'sec-1': {
    content: 'about',
    bgColor: 'lightgreen'
  },
  'sec-2': {
    content: 'works',
    bgColor: 'lightblue'
  },
  'sec-3': {
    content: 'resume',
    bgColor: 'lightyellow'
  },
  'sec-4': {
    content: 'contact',
    bgColor: '#FFD580'
  }
}

const box = document.querySelector('.box');

for(const sec of secs) {
  sec.addEventListener('mouseover', () => {
    box.classList.add('active')
  });
  sec.addEventListener('mousemove', (e) => {
    let id = sec.id;
    box.style.backgroundColor = boxData[id].bgColor;
    box.innerText = boxData[id].content;
    let x = e.clientX + 10 + 'px';
    let y = e.clientY + 10 + 'px';
    // update location of box with mouse
    box.style.left = x;
    box.style.top = y;
  });
  sec.addEventListener('mouseout', (e) => {
    box.classList.remove('active')
    // disable and hide box
  });
  sec.addEventListener('click', () => {
    let id = sec.id;
    clearAll();
    document.querySelector('#' + id).classList.add('active');
    console.log('open')
  })
}

const returns = document.querySelectorAll('.return');

for(const ret of returns) {
  ret.addEventListener('click', () => {
    setTimeout(() => {
      clearAll()
    }, 1)
  })
}