const getRandomEmoji = (cat, sub) => {
    let emojis = {
        'Food & Drink': {
            'food-fruit':['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🫐','🥝','🍅','🫒','🥥'],
            'food-vegetable':['🥑','🍆','🥔','🥕','🌽','🌶','🫑','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🫘','🌰'],
            'food-prepared':['🍞','🥐','🥖','🫓','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🫔','🥙','🧆','🥚','🍳','🥘','🍲','🫕','🥣','🥗','🍿','🧈','🧂','🥫'],
            'food-asian':['🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡'],
            'food-marine':['🦀','🦞','🦐','🦑','🦪'],
            'food-sweet':['🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯'],
            'drink':['🍼','🥛','☕','🫖','🍵','🍶','🍾','🍷','🍸','🍹','🍺','🍻','🥂','🥃','🫗','🥤','🧋','🧃','🧉','🧊'],
            'dishware':['🥢','🍽','🍴','🥄','🔪','🫙','🏺']
        }}
    const random = (array) => array[~~(Math.random() * array.length)]

    if(!emojis[cat])
        cat = random(Object.keys(emojis))
    if(!emojis[cat][sub])
        sub = random(Object.keys(emojis[cat]))
    return random(emojis[cat][sub])
}

function addItem(menu, image, content) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img src="${image}" alt="${menu}" />
    <span>${content}</span>`;
    document.querySelector("#container").appendChild(div);

    const span = document.createElement("span");
    span.innerHTML = getRandomEmoji('Food & Drink') + menu + getRandomEmoji('Food & Drink');
    document.querySelector("#sidebar").appendChild(span);
}

function resetInput() {
    menu.value = '';
    image.value = '';
    content.value = '';
}

function addItemHandle(e){
    e.preventDefault();
    const menu = document.getElementById("menu").value;
    const image = document.getElementById("image").value;
    const content = document.getElementById("content").value;
    addItem(menu, image, content);
    modalClose();
    resetInput();
}




document
    .getElementById("addItemForm")
    .addEventListener("submit", addItemHandle);