import Page from '../components/Page'

export default function About() {
  return (
    <Page id="about">
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>

      <div className="max-w-3xl text-neutral-700 space-y-4">
        <p>
          I’m a Software Engineer with a strong foundation in backend development,
          data engineering, and artificial intelligence. I enjoy building scalable,
          reliable systems that solve meaningful problems.
        </p>

        <p>
          At Karkinos Healthcare, I built microservices, optimized databases,
          orchestrated data pipelines, and integrated machine learning models
          to drive data-informed decisions.
        </p>

        <p>
          Currently, I’m pursuing a Master’s in Artificial Intelligence at
          San Jose State University, focusing on AI systems, LLMs, and
          intelligent automation.
        </p>
      </div>
    </Page>
  )
}