function shapeChange() {
    const wrapper = document.getElementById("wrapper");

    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const uniqueRandomNumber = (min, max, prev) => {
        let next = prev;

        while(prev === next) next = randomNumber(min, max);

        return next;
    }

    const combinations = [
        { configuration: 1, roundness: 1},
        { configuration: 1, roundness: 2 },
        { configuration: 1, roundness: 4 },
        { configuration: 2, roundness: 2 },
        { configuration: 2, roundness: 3 },
        { configuration: 3, roundness: 3 }
    ]

    let prev = 0;

    setInterval(() => {
        const index = uniqueRandomNumber(0, combinations.length - 1, prev),
            combination = combinations[index];
            
            wrapper.dataset.configuration = combination.configuration;
            wrapper.dataset.roundness = combination.roundness;

            prev =  index;
    },1200);
}
shapeChange()

function changeText() {
    let text = document.querySelectorAll('span');

    text.forEach(item => item.addEventListener('mouseenter', () => {
        item.innerHTML = item.dataset.id
    }));

    text.forEach(item => item.addEventListener('mouseleave', ()=>{
        item.innerHTML = 'click me';
    }));
}

changeText();
/*

function navigate() {
  const cta = document.querySelectorAll('span');
  const buttons = document.querySelectorAll('.shape');
  let url = '';
  let urlList = {
    home:'./assets/app/index.html',
    header:'./assets/app/index.html#Header',
    about:'./assets/app/index.html#About',
    skill:'./assets/app/index.html#Skills',
    project:'./assets/app/index.html#Project',
    sideproject:'./assets/app/index.html#SideProjects',
    contact:'./assets/app/index.html#Contact',
  };
  
  buttons.forEach(el => el.addEventListener('click', () => {
    cta.forEach(item => {
      let buttondata = item.dataset.id;
      const grabKeys = Object.keys(urlList);
      for (const key of grabKeys) {
        if (buttondata == key) {
          let chosenUrl = buttondata;
          url = urlList[chosenUrl];
          const navigationTarget = el;
          navigationTarget.target = '_blank';
          navigationTarget.href = url;
          navigationTarget.click(); // trigger the click event
        }
      }
    });
  }));
}

navigate();

function navigate() {
    const cta = document.querySelectorAll('span');
    const buttons = document.querySelectorAll('.shape');
    let url = '';
    let urlList = {
        home:'./assets/app/index.html',
        header:'./assets/app/index.html#Header',
        about:'./assets/app/index.html#About',
        skill:'./assets/app/index.html#Skills',
        project:'./assets/app/index.html#Project',
        sideproject:'./assets/app/index.html#SideProjects',
        contact:'./assets/app/index.html#Contact',
    };
    buttons.forEach(el => el.addEventListener('click', () =>{
        cta.forEach( item => {
            let buttondata = item.dataset.id;
            console.log(item);
            //console.log(buttondata)
            const grabKeys = Object.keys(urlList);
            for (const key of grabKeys) {
                if(buttondata == key){
                    //console.log(buttondata)
                    //let chosenUrl = key.valueOf(buttondata);
                    let chosenUrl = buttondata;
                    console.log(chosenUrl)
                    //console.log( urlList[chosenUrl])
                    //console.log(urlList[key]);
                    //console.log(typeof ['hi','k'])
                    url = urlList[chosenUrl];
                    //console.log(url)
                    const navigationTarget = el;
                    navigationTarget.setAttribute('target', '_blank');
                    navigationTarget.setAttribute('href', url);
                    //console.log(navigationTarget);
                    navigationTarget.target = '_blank';
                    navigationTarget.href = url;
                    //window.open(navigationTarget, target="_blank");
                }
            }
        })
        
    })
    )
}
navigate();*/