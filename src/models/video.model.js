import mongoose, {Schema} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'; //used to add plugins to the schema

const VideoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    description: {
        type: String,
        trim: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    videoFile: {
        type: String,  // cloudinary url
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    duration: {
        type: Number,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
}, {timestamps: true});

VideoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model('Video', VideoSchema);