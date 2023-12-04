
// слайды Типы лестниц
const swiper = new Swiper('.typesStairs__swiper', {
    slidesPerView: 1,
    spaceBetween: 25,

    // Navigation arrows
    navigation: {
        nextEl: '.typesStairs__btn-next',
        prevEl: '.typesStairs__btn-prev',
    },

    pagination: {
        el: '.typesStairs__swiper-pagination',
        clickable: true,

    },

    breakpoints: {
        576: {
            slidesPerView: 2,
            
        },

        

        992:{
            slidesPerView: 3,
            
        }
        
    }
});
// ===================================================

// Маска номера телефона +7(__)__-__
// $.fn.setCursorPosition = function (pos) {
//     if ($(this).get(0).setSelectionRange) {
//         $(this).get(0).setSelectionRange(pos, pos);
//     } else if ($(this).get(0).createTextRange) {
//         var range = $(this).get(0).createTextRange();
//         range.collapse(true);
//         range.moveEnd('character', pos);
//         range.moveStart('character', pos);
//         range.select();
//     }
// };

$(document).ready(function () {
    $("#phone").mask("+7 (999) 999-99-99");
});
$(document).ready(function () {
    $("#phone1").mask("+7 (999) 999-99-99");
});
$(document).ready(function () {
    $("#phone2").mask("+7 (999) 999-99-99");
});
$(document).ready(function () {
    $("#phone3").mask("+7 (999) 999-99-99");
});



// $("#center_ok").click(function () {
//     $(this).setCursorPosition(3);
// }).mask("+7(999) 999-9999");
// $("#center_not_ok").mask("+7(999) 999-9999");
// =======================================

const swiper1 = new Swiper('.examples__swiper', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },


    // Navigation arrows
    navigation: {
        nextEl: '.examples__swiper-button-next',
        prevEl: '.examples__swiper-button-prev',
    },

    pagination: {
        el: '.examples__swiper-pagination',
        clickable: true,

    },
});
// ================================================================

const element1One = document.getElementById('element1');
const element1Two = document.getElementById('one');
const element2One = document.getElementById('element2');
const element2Two = document.getElementById('two');
const element3One = document.getElementById('element3');
const element3Two = document.getElementById('three');
const element4One = document.getElementById('element4');
const element4Two = document.getElementById('four');
const element5One = document.getElementById('element5');
const element5Two = document.getElementById('five');
const element6One = document.getElementById('element6');
const element6Two = document.getElementById('six');

element1One.addEventListener('mouseover', () => {
    element1Two.style.border = '4px solid #202020';
});

element1One.addEventListener('mouseout', () => {
    element1Two.style.border = '2px solid #202020';
});

element2One.addEventListener('mouseover', () => {
    element2Two.style.border = '4px solid #202020';
});

element2One.addEventListener('mouseout', () => {
    element2Two.style.border = '2px solid #202020';
});

element3One.addEventListener('mouseover', () => {
    element3Two.style.border = '4px solid #202020';
});

element3One.addEventListener('mouseout', () => {
    element3Two.style.border = '2px solid #202020';
});

element4One.addEventListener('mouseover', () => {
    element4Two.style.border = '4px solid #202020';
});

element4One.addEventListener('mouseout', () => {
    element4Two.style.border = '2px solid #202020';
});

element5One.addEventListener('mouseover', () => {
    element5Two.style.border = '4px solid #202020';
});

element5One.addEventListener('mouseout', () => {
    element5Two.style.border = '2px solid #202020';
});

element6One.addEventListener('mouseover', () => {
    element6Two.style.border = '4px solid #202020';
});

element6One.addEventListener('mouseout', () => {
    element6Two.style.border = '2px solid #202020';
});
// ================================================================

// Модалка из 4 шагов=============================================

const btn = document.querySelector('.header__btn')
const modal = document.querySelector('.modal')
const modal2 = document.querySelector('.modal2')
const modal3 = document.querySelector('.modal3')
const modal4 = document.querySelector('.modal4')
const btn_closed1 = document.querySelector('.modal__close-btn')
const btn_closed2 = document.querySelector('.modal__close-btn2')
const btn_closed3 = document.querySelector('.modal__close-btn3')
const btn_closed4 = document.querySelector('.modal__close-btn4')
const btn_modal_next = document.querySelector('.modal__next')
const btn_modal_next2 = document.querySelector('.modal__next2')
const btn_modal_next3 = document.querySelector('.modal__next3')
const btn_modal_end = document.querySelector('.modal__end')

btn.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

btn_modal_next.addEventListener('click', () => {
    modal.classList.remove('modal--open')
    modal2.classList.add('modal--open')
})

btn_modal_next2.addEventListener('click', () => {
    modal2.classList.remove('modal--open')
    modal3.classList.add('modal--open')
})

btn_modal_next3.addEventListener('click', () => {
    modal3.classList.remove('modal--open')
    modal4.classList.add('modal--open')
})
btn_modal_end.addEventListener('click', () => {
    modal4.classList.remove('modal--open')
})





btn_closed1.addEventListener('click', () => {
    modal.classList.remove('modal--open')
})
btn_closed2.addEventListener('click', () => {
    modal2.classList.remove('modal--open')
})
btn_closed3.addEventListener('click', () => {
    modal3.classList.remove('modal--open')
})
btn_closed4.addEventListener('click', () => {
    modal4.classList.remove('modal--open')
})




document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        modal.classList.remove('modal--open')
    }
})
document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal2.classList.contains('modal--open')) {
        modal2.classList.remove('modal--open')
    }
})
document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal3.classList.contains('modal--open')) {
        modal3.classList.remove('modal--open')
    }
})
document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal4.classList.contains('modal--open')) {
        modal4.classList.remove('modal--open')
    }
})

// Для модалки 1=====================================
const input1_1 = document.getElementById('input1_1');
const input1_2 = document.getElementById('input1_2');
const input1_3 = document.getElementById('input1_3');
const input1_4 = document.getElementById('input1_4');
const input1_5 = document.getElementById('input1_5');

// Получаем доступ к элементу, в который будем выводить выбранный вариант
const result = document.getElementById('result1');

// Функция для отслеживания изменений в радио-кнопках
function handleInputChange() {
    if (input1_1.checked) {
        result.innerHTML = input1_1.value;
    } else if (input1_2.checked) {
        result.innerHTML = input1_2.value;
    } else if (input1_3.checked) {
        result.innerHTML = input1_3.value;
    } else if (input1_4.checked) {
        result.innerHTML = input1_4.value;
    } else if (input1_5.checked) {
        result.innerHTML = input1_5.value;
    }
}

// Привязываем функцию к событию изменения состояния радио-кнопок
input1_1.addEventListener('change', handleInputChange);
input1_2.addEventListener('change', handleInputChange);
input1_3.addEventListener('change', handleInputChange);
input1_4.addEventListener('change', handleInputChange);
input1_5.addEventListener('change', handleInputChange);


// Модалка 2 =================================================
// Две ради кнопки===================================
const input2_1 = document.getElementById('input2_1');
const input2_2 = document.getElementById('input2_2');


// Получаем доступ к элементу, в который будем выводить выбранный вариант
const result2 = document.getElementById('result2');

// Функция для отслеживания изменений в радио-кнопках
function handleInputChange2() {
    if (input2_1.checked) {
        result2.innerHTML = input2_1.value;
    } else if (input2_2.checked) {
        result2.innerHTML = input2_2.value;
    }
}

// Привязываем функцию к событию изменения состояния радио-кнопок
input2_1.addEventListener('change', handleInputChange2);
input2_2.addEventListener('change', handleInputChange2);

// 3 инпута ================================================



function updateSpan1() {
    // Получаем значение из input
    var userInput1 = document.getElementById('input4').value;

    // Устанавливаем значение в span
    document.getElementById('result4').innerText = userInput1;
}
function updateSpan2() {
    // Получаем значение из input
    var userInput2 = document.getElementById('input5').value;

    // Устанавливаем значение в span
    document.getElementById('result5').innerText = userInput2;
}
function updateSpan3() {
    // Получаем значение из input
    var userInput3 = document.getElementById('input6').value;

    // Устанавливаем значение в span
    document.getElementById('result6').innerText = userInput3;
}

//  Модалка 3 =======================================

const input3_1 = document.getElementById('input3_1');
const input3_2 = document.getElementById('input3_2');
const input3_3 = document.getElementById('input3_3');
const input3_4 = document.getElementById('input3_4');
const input3_5 = document.getElementById('input3_5');

// Получаем доступ к элементу, в который будем выводить выбранный вариант
const result3 = document.getElementById('result3');

// Функция для отслеживания изменений в радио-кнопках
function handleInputChange3() {
    if (input3_1.checked) {
        result3.innerHTML = input3_1.value;
    } else if (input3_2.checked) {
        result3.innerHTML = input3_2.value;
    } else if (input3_3.checked) {
        result3.innerHTML = input3_3.value;
    } else if (input3_4.checked) {
        result3.innerHTML = input3_4.value;
    } else if (input3_5.checked) {
        result3.innerHTML = input3_5.value;
    }
}

// Привязываем функцию к событию изменения состояния радио-кнопок
input3_1.addEventListener('change', handleInputChange3);
input3_2.addEventListener('change', handleInputChange3);
input3_3.addEventListener('change', handleInputChange3);
input3_4.addEventListener('change', handleInputChange3);
input3_5.addEventListener('change', handleInputChange3);

// Модалка 5 кнопка консультация b и кнопки перезвоните

const btn2 = document.querySelector('.right-box__btn')
const btn3 = document.querySelector('.header__button')
const btn4 = document.querySelectorAll('.examples__button')
const btn5 = document.querySelector('.footer__button')

const modal5 = document.querySelector('.modal5')
const modal5_2 = document.querySelector('.modal5-2')

const btn_closed5 = document.querySelector('.modal5__close-btn5')
const btn_closed5_2 = document.querySelector('.modal5-2__close-btn5')
const btn_send = document.querySelector('.modal5__btn')

btn2.addEventListener('click', () => {
    modal5.classList.add('modal--open')
})
btn3.addEventListener('click', () => {
    modal5.classList.add('modal--open')
})
btn4.forEach(btn => {
    btn.addEventListener('click', () => {
        modal5.classList.add('modal--open');
    });
});
btn5.addEventListener('click', () => {
    modal5.classList.add('modal--open')
})

btn_closed5.addEventListener('click', () => {
    modal5.classList.remove('modal--open')
})
btn_closed5_2.addEventListener('click', () => {
    modal5_2.classList.remove('modal--open')
})

btn_send.addEventListener('click', () => {
    modal5.classList.remove('modal--open')
    modal5_2.classList.add('modal--open')
}),



//Вызов бургер меню ====================================
(function() {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if(!burgerIcon && !burgerNavLink) return

        if(!document.body.classList.contains('body--opened-menu')){
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

        
    }

})()