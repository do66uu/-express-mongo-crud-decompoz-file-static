import PostModel from "./PostModel.js";
import FileService from "./FileService.js";

class PostService{
    async create(post, picture) {
        const fileName = FileService.saveFile(picture)
        const createPost = await PostModel.create({...post, picture: fileName})
        return createPost;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('not specified Id')
        }
        const post = await PostModel.findById(id)
        return post;
    }
    async getAll() {
        const post = await PostModel.find()
        return post;
    }
    async update(post) {
        if (!post._id) {
            throw new Error('not specified Id')
        }
        const newPost = await PostModel.findByIdAndUpdate(post._id, post, {new:true})
        return newPost;
    }
    async delete(id) {
        if (!id) {
            throw new Error('not specified Id')
        }
        const post = await PostModel.findByIdAndDelete(id)
        return post;
    }
}
export default new PostService()
