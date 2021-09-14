const Profile = require('../model/Profile')

module.exports =  {
   async index(req, res) {
        return res.render("profile", {profile: await Profile.get()})
    },
    async update(req, res) {
        const data = req.body
        // definir quantas semanas tem um ano
        const weeksPerYear = 52

        //remover as semanas de férias do ano, para pegar quantas semanas tem 1 mês
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"] ) / 12

        // total de horas trabalhadas na semana
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]

        //horas trabalhadas no mês
        const monthlyTotalHours = weekTotalHours * weeksPerMonth

        //qual sera o valor da minha hora?
        const valueHours = data["value-hour"] = data["monthly-budget"] / monthlyTotalHours

        const profile =  await Profile.get()

       await Profile.update({
            ... profile,
            ...req.body,
            "value-hour": valueHours
        })

        return res.redirect('/profile')
    }
}