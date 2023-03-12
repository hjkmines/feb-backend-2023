// For '/item' endpoint 

const getItems = (req, res, next) => {

    if (Object.keys(req.query).length) {
        const {
            gender, 
            price, 
            isClearance, 
            colors, 
            sizes
        } = req.query

        const filter = []; 

        if (gender) filter.push(gender)
        if (price) filter.push(price)
        if (isClearance) filter.push(isClearance)
        if (colors) filter.push(colors)
        if (sizes) filter.push(sizes)

        for (const query of filter) {
            console.log(`Searching item by ${query}`)
        }
    }
    res
    .status(200) // 'ok'
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Show me all the items' })
}

const postItem = (req, res, next) => {

    console.log(req.body)
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `
    Creating item with item name of: ${req.body.itemName}
    and item description of: ${req.body.itemDescription}` 
    })
}

const deleteItems = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleting all items' })
}

// For '/item/:itemId/'
const getItem = (req, res, next) => {
    console.log(req)
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the item with item id of ${req.params.itemId}` })
}

const putItem = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Update the item with item id of ${req.params.itemId}` })
}

const deleteItem = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Delete the item with item id of ${req.params.itemId}` })
}

module.exports = {
    getItems, 
    postItem, 
    deleteItems, 
    getItem, 
    putItem, 
    deleteItem
}