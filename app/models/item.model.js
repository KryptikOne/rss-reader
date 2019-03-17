import mongoose, { Schema } from 'mongoose'

const ItemSchema = new Schema({
    title: String,
    content: String
}, {
    timestamps: true,
    collection: 'items'
})

export default mongoose.model('Item', ItemSchema, 'items')