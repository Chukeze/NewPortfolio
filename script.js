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
    },2200);
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
