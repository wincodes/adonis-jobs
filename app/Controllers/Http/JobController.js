'use strict'

const Job = use('App/Models/Job')

class JobController {
    async home({ view }) {
        const job = new Job

        const jobs = await Job.all()

        return view.render('index', { jobs: jobs.toJSON() });
    }
}

module.exports = JobController