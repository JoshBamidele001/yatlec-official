import mongoose from "mongoose"

const photoSchema = new mongoose.Schema({
    avatar: {
        type: String,
        default: ""
    },
    
}, { timestamps: true }
);

const Photos = mongoose.model('Photos', photoSchema);