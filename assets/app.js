const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');



buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnClick = e.target.textContent;
        // console.log(btnClick);

        if(btnClick === 'C' || screen.value === 'error!') {
            screen.value = '0';
        } else if(btnClick === 'AC') {
            screen.value = '0';
        } else if(btnClick === '=') {
            try {
                const resultado = eval(screen.value.replace('x','*').replace('÷','/').replace());
                screen.value = resultado;
            } catch(error) {
                screen.value = 'error!';
                
            }
        } else {
            if(screen.value === '0' || screen.value === 'error!'){ 
                screen.value = btnClick;
            } else {
                screen.value += btnClick;
            }
        }
    })
})