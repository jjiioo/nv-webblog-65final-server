const { Comment } = require('../models')

module.exports = {
    
    async index(req, res) {
        try {
            const comments = await Comment.findAll()
            res.send(comments)
        } catch (err) {
            res.status(500).send({
                error: 'The comments information was incorrect'
            })
        }
    },

    
    async create(req, res) {
        try {
            const comment = await Comment.create(req.body)
            res.send(comment.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create comment incorrect'
            })
        }
    },

    
    async put(req, res) {
        try {
            await Comment.update(req.body, {
                where: {
                    id: req.params.commentId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update comment incorrect'
            })
        }
    },

    
    async remove(req, res) {
        try {
            const comment = await Comment.findOne({
                where: {
                    id: req.params.commentId
                }
            })

            if (!comment) {
                return res.status(403).send({
                    error: 'The comment information was incorrect'
                })
            }

            await comment.destroy()
            res.send(comment)
        } catch (err) {
            res.status(500).send({
                error: 'The comment information was incorrect'
            })
        }
    },

    
    async show (req, res) {
        try {
            const comment = await Comment.findByPk(req.params.commentId)
            res.send(comment)
        } catch (err) {
            res.status(500).send({
                error: 'The comment information was incorrect'
            })
        }
    },
}