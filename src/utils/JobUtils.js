module.exports = {
    remainingDays(job) {
        // total de dias que serão trabalhados
        const daysWorking = (job["total-hours"] / job["daily-hours"]).toFixed(); // toFixed() vai arredondar o numero

        const createdDate = new Date(job.created_at)

        // Pegando a data da entrega
        const dueDate = createdDate.getDate() + Number(daysWorking)

        //Tranforma a data em milli
        const dueDateInMs = createdDate.setDate(dueDate)

        // tempo que falta para concluir em milli
        const timeDiffInMs = dueDateInMs - Date.now()

        //Transformar milli em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs) // Arredonda pra baixo

        return dayDiff
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}