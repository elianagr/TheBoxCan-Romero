export const productsData = [
    {
        id: 0,
        nombre: 'Collar Cohetes',
        precio: 500,
        imgItem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/476/673/products/collar-regulable-roswell1-55549517775965bd6216104955952513-640-0.png',
        stock: 5,
        categoria: 'collares',
        descripcion: '¿Alguna vez pensaste que tu perro es tan genial que parece de otro planeta? Entonces esta es la estampa que estabas buscando. Collar realizado en una resistente cinta de poliéster.',
    },
    {
        id: 1,
        nombre: 'Correa Amarilla',
        precio: 500,
        imgItem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/476/673/products/correa-larga-poms1-12d88ae412fa49d61116265622599018-640-0.png',
        altItem: 'Correa para perro',
        stock: 6,
        categoria: 'correas',
        descripcion: 'Las correas largas son una excelente herramienta para lograr paseos relajados. Le otorgan a tu perro mayor libertad de movimiento para caminar a su ritmo e ir oliendo todo, actividad esencial para que el paseo sea enriquecedor.',
    },
    {
        id: 2,
        nombre: 'Pretal Bananas',
        precio: 500,
        imgItem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/476/673/products/arnes-sbd1-74178d469326636c6816210042531097-640-0.jpg',
        altItem: 'Pretal para perro',
        stock: 4,
        categoria: 'pretales',
        descripcion: 'Arnés H realizado en una resistente cinta de poliéster.',
    },
    {
        id: 3,
        nombre: 'Bandana Negra',
        precio: 500,
        imgItem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/476/673/products/bandana-perro-selma1-662421529b4132437516104975424894-640-0.png',
        altItem: 'Bandana para perro',
        stock: 4,
        categoria: 'otros',
        descripcion: 'Bandana realizada en microfibra.',
    }
]

const task = new Promise((resp) => {
    resp(productsData)
})

export const getItem = () => {
	return task
}
