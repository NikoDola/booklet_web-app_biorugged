const triangle1 = document.getElementById('triangle1')

const triangle2 = document.getElementById('triangle2')
const triangle3 = document.getElementById('triangle3')
const triangle4 = document.getElementById('triangle4')
const triangle5 = document.getElementById('triangle5')
const triangle6 = document.getElementById('triangle6')

const secretary = document.getElementById('secretary')
const electro = document.getElementById('electro')
const woman_working = document.getElementById('woman_working')
const computer = document.getElementById('computer')
const factory = document.getElementById('factory')
const factory2 = document.getElementById('factory2')

const trianglebg1 = document.getElementById('trianglebg1')
const trianglebg2 = document.getElementById('trianglebg2')
const trianglebg3 = document.getElementById('trianglebg3')
const trianglebg4 = document.getElementById('trianglebg4')
const trianglebg5 = document.getElementById('trianglebg5')
const trianglebg6 = document.getElementById('trianglebg6')



triangle1.addEventListener('mouseover',function(){
    trianglebg1.style.opacity='0'
    triangle1.style.boxShadow = ' 0 0px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    triangle1.style.transform = 'rotate(0deg)'
    secretary.style.transform = ' translateY(-10px) translateX(-150px) rotate(0deg)'
    triangle1.style.zIndex = '2'
})
triangle1.addEventListener('mouseleave',function(){
    trianglebg1.style.opacity=''
    triangle1.style.boxShadow = ''
    triangle1.style.transform = ' translate(40px) rotate(45deg)'
    secretary.style.transform = ''
    if (triangle1.style.transform === 'translate(40px) rotate(45deg)'){
        triangle1.style.zIndex = '0'
    }
})

triangle2.addEventListener('mouseover',function(){
    trianglebg2.style.opacity='0'
    triangle2.style.transform = 'rotate(0deg)'
    electro.style.transform = ' translateY(-10px) translateX(-150px) rotate(0deg)'
    triangle2.style.zIndex = '2'
})
triangle2.addEventListener('mouseleave',function(){
    trianglebg2.style.opacity=''
    triangle2.style.transform = ' translate(40px) rotate(45deg)'
    electro.style.transform = ''
    if (triangle2.style.transform === 'translate(40px) rotate(45deg)'){
        triangle2.style.zIndex = '0'
    }
})

triangle3.addEventListener('mouseover',function(){
    trianglebg3.style.opacity='0'
    triangle3.style.transform = 'translateY(-90px) rotate(0deg)'
    triangle3.style.zIndex = '2'
    computer.style.transform = ' translateY(-10px) translateX(-150px) rotate(0deg)'
})
triangle3.addEventListener('mouseleave',function(){
    trianglebg3.style.opacity=''
    triangle3.style.transform = ' translate(40px) rotate(45deg)'
    computer.style.transform = ''
    if (triangle3.style.transform === 'translate(40px) rotate(45deg)'){
        triangle3.style.zIndex = '0'
    }
})

triangle4.addEventListener('mouseover',function(){
    trianglebg4.style.opacity='0'
    triangle4.style.transform = 'translate(170px) rotate(0deg)'
    triangle4.style.zIndex = '2'
    factory2.style.transform = ' translateY(-10px) translateX(-150px) rotate(0deg)'
})
triangle4.addEventListener('mouseleave',function(){
    trianglebg4.style.opacity=''
    triangle4.style.transform = ' translate(40px) rotate(45deg)'
    factory2.style.transform = ''
    if (triangle4.style.transform === 'translate(40px) rotate(45deg)'){
        triangle4.style.zIndex = '0'
    }
})

triangle5.addEventListener('mouseover',function(){
    trianglebg5.style.opacity='0'
    triangle5.style.transform = 'translate(170px) rotate(0deg)'
    woman_working.style.transform = ' translateY(50px) translateX(-100px) rotate(0deg)'
    triangle5.style.zIndex = '2'
})
triangle5.addEventListener('mouseleave',function(){
    trianglebg5.style.opacity=''
    triangle5.style.transform = ' translate(40px) rotate(45deg)'
    woman_working.style.transform = ''
    if (triangle5.style.transform === 'translate(40px) rotate(45deg)'){
        triangle5.style.zIndex = '0'
    }
})


triangle6.addEventListener('mouseover',function(){
    trianglebg6.style.opacity='0'
    factory.style.transform = ' translateY(-20px) translateX(-120px) rotate(0deg)'
    triangle6.style.transform = 'translate(170px) rotate(0deg)'
    triangle6.style.zIndex = '2'
})
triangle6.addEventListener('mouseleave',function(){
    trianglebg6.style.opacity=''
    factory.style.transform = ''
    triangle6.style.transform = ' translate(40px) rotate(45deg)'
    if (triangle6.style.transform === 'translate(40px) rotate(45deg)'){
        triangle6.style.zIndex = '0'
    }
})