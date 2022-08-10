import { arr } from './modules/db.js'
let cart = []

let cont = document.querySelector('.container')
let cartCont = document.querySelector('.cartCont')
let one_btn = document.querySelector('.one_btn')
let two_btn = document.querySelector('.two_btn')
let tex_one = document.querySelector('.tex_one')

let www = arr.slice(0, 5);

function add(arg, place) {
    let number = 0  
    place.innerHTML = ''
    for (let item of arg) {

        let box = document.createElement('div')
        let box_top = document.createElement('div')
        let box_bottom = document.createElement('div')
        let bottom_img = document.createElement('img')
        let top_tex_one = document.createElement('p')
        let top_tex_two = document.createElement('p')
        let top_tex_btn = document.createElement('button')


        box.classList.add('box')
        bottom_img.classList.add('bottom_img')
        box_top.classList.add('box_top')
        top_tex_one.classList.add('top_tex_one')
        top_tex_two.classList.add('top_tex_two')
        box_bottom.classList.add('box_bottom')
        top_tex_btn.classList.add('top_tex_btn')
        bottom_img.src = item.image

        top_tex_one.innerHTML = item.category
        top_tex_btn.innerHTML = 'В избранное'
        top_tex_two.innerHTML = item.description

        box.append(box_top, box_bottom)
        box_top.append(bottom_img)
        box_bottom.append(top_tex_one, top_tex_two, top_tex_btn)
        place.append(box)

        top_tex_btn.onclick = () => {
            if(cart.includes(item)) {
                top_tex_btn.classList.remove('active')
                cart = cart.filter(elem => elem.id !== item.id)
                number--
                tex_one.innerHTML = `В корзине: ${number} товар`
                top_tex_btn.innerHTML = 'В избранное'
                add(cart, cartCont)
            } else {
                cart.push(item);
                top_tex_btn.classList.add('active')
                top_tex_btn.innerHTML = 'Добавлено'
                number++
                tex_one.innerHTML = `В корзине: ${number} товар`
                add(cart, cartCont)
            }
        }

    }

}
one_btn.onclick = () => {
    add(www, cont) 
    add(cart, cartCont)
}
two_btn.onclick = () => {
    let www = arr
    add(www, cont) 
    add(cart, cartCont)
}
