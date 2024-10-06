const { Admin, Lead } = require("../models/models");

class AppController {
    async login(req, res) {
        const { login, password } = req.body;
        if (login === 'admin' && password === "admin") {
            // req.session.user = { login };
            return res.redirect('/leads')
        } else {
            res.status(401).json({ message: 'Проверьте данные для входа' });
        }

    }
    async getLeads(req, res) {
        const leads = await Lead.findAll()
        return res.json(leads);
    }
    async createLead(req, res) {
        const { name } = req.body
        const { numberPhone } = req.body
        const { textProblem } = req.body
        const newLead = await Lead.create({ name, numberPhone, textProblem })
        return res.json(newLead)
    }
}

module.exports = new AppController()