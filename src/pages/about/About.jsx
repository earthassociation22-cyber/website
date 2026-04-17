import { Fragment } from "react"
import Hero from "../landing/Hero"
import Desc from "./Desc"
import NavAbout from "./NavAbout"
import EbookDownload from "./EbookDownload"

const About = () => {
	return (
		<main className="my-[65px]">
			<Hero />
			
			<EbookDownload />

			{aboutData.map((dataItem) => {
				return (
          <Fragment key={dataItem.title}>
            <section id={dataItem.title.toLowerCase().replace(/ /g, "-")}>
              <NavAbout current={dataItem.title} />
              <Desc content={dataItem.content} />
            </section>
          </Fragment>
        );
			})}
		</main>
	)
}
export default About

const aboutData = [
  {
    title: "Our Story",
    content:
      "The Earth Association was established with the mission of promoting environmental awareness and conservation efforts in Jaipur, India. Our journey began when a group of passionate individuals recognized the urgent need to protect our planet from the escalating environmental crises. This dedicated group came together to form an organization that would not only educate but also mobilize the community towards sustainable practices. Over the years, we have grown into a respected institution, known for our commitment to fostering environmental responsibility and stewardship among all age groups. We have initiated various programs and campaigns that address pressing environmental issues, from waste management to reforestation projects. Our work has inspired many to take action, and we continue to expand our reach, touching the lives of countless individuals and communities. By engaging with schools, local businesses, and government bodies, we have built a network of environmentally conscious partners who share our vision for a greener future. Our story is one of hope, perseverance, and a relentless drive to make a positive impact on the environment. We believe that together, we can create a sustainable world for future generations.",
  },
  {
    title: "Vision",
    content:
      "Our vision is to create a sustainable and eco-friendly future where communities are actively involved in protecting and preserving the environment. We envision a world where every individual understands the importance of environmental conservation and practices sustainability in their daily lives. Our goal is to foster an environmentally conscious society that values the natural world and works collectively to ensure its preservation. This vision extends to all aspects of life, from the way we consume resources to how we interact with our surroundings. We aim to inspire a global movement towards sustainability, where innovative solutions and collaborative efforts lead to significant environmental improvements. Our vision also includes creating green spaces in urban areas, promoting renewable energy sources, and reducing carbon footprints. We believe that education and awareness are key to achieving this vision, and we strive to provide the necessary tools and knowledge to empower individuals and communities. By working together, we can create a healthier planet for future generations, ensuring that the beauty and diversity of the natural world are preserved for years to come. Our vision is a call to action for everyone to play a part in safeguarding the environment.",
  },
  {
    title: "Mission",
    content:
      "Our mission is to inspire and mobilize the local community to take action for a sustainable and greener future. We strive to educate individuals on environmental issues and engage them in practical conservation efforts. Our mission is rooted in the belief that everyone has a role to play in protecting the environment. We aim to provide the knowledge and resources needed for individuals to make informed decisions and adopt sustainable practices. Through our various programs and initiatives, we address critical environmental challenges such as pollution, deforestation, and climate change. We work closely with schools, community groups, and local businesses to promote environmental awareness and encourage participation in our activities. Our mission also involves advocating for policies and practices that support sustainability at the local, regional, and national levels. We believe that by fostering a sense of responsibility and empowerment, we can drive meaningful change and create a lasting impact. Our mission is not just about addressing current environmental issues but also about building a foundation for a sustainable future. We are committed to continuous learning and adaptation, ensuring that our efforts remain relevant and effective in the face of evolving environmental challenges.",
  },
  {
    title: "Philosophy of Change",
    content:
      "We believe in the power of collective action and the importance of involving all segments of society in the environmental movement. Our philosophy is rooted in the principle that real change comes from within the community. We emphasize the importance of grassroots initiatives and the role of individuals in driving sustainable development. By fostering a sense of responsibility and empowerment, we aim to create a culture of environmental stewardship. Our approach involves engaging with diverse groups, including schools, local businesses, and government bodies, to build a broad coalition for change. We believe that education is a critical component of our philosophy, and we strive to provide accessible and relevant information on environmental issues. Through workshops, seminars, and community events, we aim to raise awareness and inspire action. Our philosophy also includes a focus on practical solutions and innovative approaches to conservation. We encourage the adoption of sustainable practices in everyday life and support initiatives that promote renewable energy, waste reduction, and resource conservation. By working together and leveraging the strengths of different sectors, we believe that we can create a significant and lasting impact. Our philosophy of change is a call to action for everyone to take part in building a sustainable future.",
  },
  {
    title: "The Lifecycle Approach",
    content:
      "Education and awareness are just the beginning of our lifecycle approach to environmental conservation. Our programs are designed to address environmental issues holistically, considering the interconnectedness of various factors that impact the environment. We recognize that sustainable development requires a comprehensive and integrated approach. From engaging young minds in schools to conducting community outreach programs, our lifecycle approach ensures that every initiative contributes to the broader goal of sustainability. We believe that environmental education should start at an early age, and our school programs aim to instill a sense of environmental responsibility in young students. These programs are complemented by community outreach activities that engage individuals of all ages in practical conservation efforts. Our lifecycle approach also involves collaborating with local businesses and government bodies to promote sustainable practices and policies. By addressing environmental issues from multiple angles and at different stages of life, we aim to create a lasting impact. Our approach is dynamic and adaptable, allowing us to respond to emerging challenges and opportunities. We are committed to continuous improvement and innovation, ensuring that our efforts remain effective and relevant. The lifecycle approach is a comprehensive strategy that drives our mission and vision for a sustainable future.",
  },
  {
    title: "How We Work",
    content:
      "Our work is guided by two primary models: Social Venture Philanthropy and Outreach. Social Venture Philanthropy is inspired by venture capital principles, where we identify and support credible community-based organizations. We build their capacities, focusing on scalability and sustainability, and promote leadership and accountability. This model allows us to leverage the strengths of local organizations and enhance their impact. Through mentorship and financial support, we help these organizations develop effective programs and achieve their goals. Our Outreach model involves directly implementing development interventions in remote rural areas, requiring intensive and professional engagement. By working closely with local community stakeholders, we ensure a wider and sustained impact of our efforts. Our outreach initiatives include educational programs, health and sanitation projects, and environmental conservation activities. We prioritize community participation and ownership, ensuring that our interventions are relevant and sustainable. Our work is characterized by transparency, accountability, and a commitment to excellence. We adhere to the highest standards of governance and continuously evaluate our programs to ensure their effectiveness. By combining these models, we can address environmental issues comprehensively and create lasting change. Our approach is dynamic and adaptable, allowing us to respond to emerging challenges and opportunities.",
  },
  {
    title: "Why Trust Us?",
    content:
      "Credibility and accountability are at the core of The Earth Association. We adhere to the highest standards of governance, ensuring complete transparency in our operations. Our commitment to ethical practices and responsible management has earned us the trust of our partners, donors, and the communities we serve. We have a robust audit and evaluation mechanism that guarantees the effective and responsible use of funds. Regular audits are conducted to ensure that our financial practices meet the highest standards. We also have a comprehensive monitoring and evaluation system that tracks the progress and impact of our programs. This system allows us to make data-driven decisions and continuously improve our initiatives. Our team is composed of experienced professionals who are dedicated to our mission and values. We prioritize integrity, honesty, and accountability in all our interactions. Our track record of successful projects and positive outcomes speaks to our credibility and effectiveness. We are transparent in our reporting and provide regular updates to our stakeholders. By maintaining high standards of governance and accountability, we ensure that every contribution is used effectively to further our mission. Trust is the foundation of our work, and we are committed to upholding the trust that has been placed in us.",
  },
];
