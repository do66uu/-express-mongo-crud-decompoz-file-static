import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture)
            res.json(post)
        } catch (e) {
            res.json(e.message)
        }
    }
    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            res.json(post)
        } catch (e) {
            res.json(e.message)
        }
    }
    async getAll(req, res) {
        try {
            const post = await PostService.getAll()
            res.json(post)
        } catch (e) {
            res.json(e.message)
        }
    }
    async update(req, res) {
        try {
            const newPost = await PostService.update(req.body)
            res.json(newPost)
        } catch (e) {
            res.json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            res.json(post)
        } catch (e) {
            res.json(e.message)
        }
    }
}
export default new PostController()
