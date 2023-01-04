import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { Quote } from './Quote';

const VerticalFeatures = () => (
  <div id="about">
  <Section
    title="About"
    description="A software development and consulting firm. We strive to build performance driven digital experiences. Besides that, we have great experience in building tools for developers such as SDKs, CLI and other extensions."
  >
    <VerticalFeatureRow
      title="Why Akritech?"
      description="We can build various digital products and consider User Experience (UX) and Developer Experience (DX) perspectives. At Akritech, engineers are passionate about the craft. Your problem is not just another job, the goal is always to be proud of the solution."
      image="/assets/images/feature3.svg"
      imageAlt="Why Akritech?"
    />
    <Quote />
    <VerticalFeatureRow
      title="Code quality matters"
      description="Great Developer Experience (DX) can save a lot of time and expenses. Great internal DX will create a workplace where developers can thrive, external DX will make the onboarding and integration with your product seamless as possible. 
      "
      image="/assets/images/feature2.svg"
      imageAlt="Code quality matters"
      reverse
    />
  </Section>
  </div>
);

export { VerticalFeatures };
