const { Shorts } = require('../models')

module.exports = {
    
    async index(req, res) {
        try {
            const Shorts = await Shorts.findAll()
            res.send(Shorts)
        } catch (err) {
            res.status(500).send({
                error: 'The Shorts information was incorrect'
            })
        }
    },

    
    async create(req, res) {
        try {
            const Shorts = await Shorts.create(req.body)
            res.send(Shorts.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'The Shorts information was incorrect'
            })
        }
    },

    
    async put(req, res) {
        try {
            await Shorts.update(req.body, {
                where: {
                    id: req.params.ShortsId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Shorts incorrect'
            })
        }
    },

    
    async remove(req, res) {
        try {
            const Shorts = await Shorts.findOne({
                where: {
                    id: req.params.ShortsId
                }
            })

            if (!Shorts) {
                return res.status(403).send({
                    error: 'The Shorts information was incorrect'
                })
            }

            await Shorts.destroy()
            res.send(Shorts)
        } catch (err) {
            res.status(500).send({
                error: 'The Shorts information was incorrect'
            })
        }
    },

    
  async show (req, res) {
    try {
      const item = await Shorts.findByPk(req.params.ShortsId)
      res.send(Shorts)
    } 
    catch (err) {
        res.status(500).send({
            error: 'The Shorts information was incorrect'
        })
    }
  }
}