import { Section } from '../layout/Section';

const About = () => (
  <div id="about">
    <Section
      title="About"
      description="Building digital products is a complex endeavor. Starting from requirements, then moving to code, performance, technical documentation and summing all up with wholehearted support. Each step in the process is important for success. Akritech can help you at any stage."
    >
      <div className="mt-4 text-xl md:px-20 text-center">
        <p>Services that we provide:</p>
        <br />
        <p>💻 Development Services</p>
        <p>🙏 Consulting Services</p>
        <p>🏆 Leading Technical Teams</p>
        <p>📚 Writing Technical Documentation</p>
        <p>⌨️ APIs Design Reviews</p>
        <p>👨‍💻 Code Reviews</p>
        <p>🧑‍🏫 Education Services</p>
      </div>
    </Section>
  </div>
);

export { About };
