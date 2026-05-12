// createElement()
// const heading = document.createElement('h1')

// heading.innerText = 'This is my heading'
// console.log(heading);

// // appendChild()
// document.getElementById('container-one').appendChild(heading)

document.getElementById('post').addEventListener('click', (event) => {
    event.preventDefault()
    
    const text1 = document.getElementById('input-one').value
    const text2 = document.getElementById('input-two').value

    // createElement()
    const task = document.createElement('h3')
    task.className = 'my-class-name'
    task.innerText = text1
    console.log(task);

    const time = document.createElement('small')
    time.innerText = text2

    task.appendChild(time)

    document.getElementById('container-one').appendChild(task)
})