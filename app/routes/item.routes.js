import {
    createItem,
    findAll,
    findOne,
    updateItem,
    deleteItem,
    getFeed
} from '../controllers/item.controller'

const routeConfig = (app, router) => {

    // Middleware for ALL routes
    router.use(function (req, res, next) {
        console.log('Passing Through All Routes Middleware...')
        next()
    })

    router.route('/')
    .get((req, res) => {
        res.json({
            "message": "Hello World"
        })
    })

    router.route('/items')
        .get(findAll) // Retrieve all Items
        .post(createItem) // Create a new Item

    router.route('/items/:itemId')
        .get(findOne) // Retrieve a single item with itemId
        .put(updateItem) // Update an Item with itemId
        .delete(deleteItem) // Delete an Item with itemId

    router.route('/feed')
        .get(getFeed) // Get the feed by url

    app.use('/', router)
}

export default routeConfig