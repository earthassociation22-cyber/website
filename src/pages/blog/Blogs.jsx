import { Link } from "react-router-dom";
import international from "../../assets/international.png";
import glance from "../../assets/glance.png";
import director from "../../assets/director.jpeg";
// import coordinator from "../../assets/coordinator_new.jpg";

export const blogsData = [
  {
    id: 1,
    title: "Dr. Hemlata Sharma",
    image: director,
    preview:
      "Dr. Hemlata Sharma highlights The Earth Association's continuous efforts in environmental conservation across Jaipur and India, including record-setting initiatives like the Wildlife Week art competition.",
    content: (
      <div className="prose lg:prose-xl mx-auto py-6">
        <p className="italic text-gray-600 mb-4">
          &lsquo;पर्यावरण के लिए अर्पित और समर्पित&rsquo;
        </p>

        <p>
          &lsquo;अप्रैल 2022 से जयपुर और समूचे भारत में पर्यावरण संरक्षण के
          प्रति जागरूकता फैलाने के लिए The Earth Association निरंतर प्रयासरत है।
          प्रत्येक वर्ष संस्था द्वारा &lsquo;वन्यजीव सप्ताह&rsquo; का आयोजन होता
          है। 7 अक्टूबर 2022 को वन्यजीव सप्ताह के अंतर्गत आयोजित चित्रकला
          प्रतियोगिता में संस्था ने विश्व रिकॉर्ड स्थापित किया, जिसमें लगभग
          13,000 से अधिक विद्यार्थियों ने भाग लिया।&rsquo;
        </p>

        <p>
          &lsquo;अंतरराष्ट्रीय सांस्कृतिक आदान-प्रदान कार्यक्रम और पर्यावरण
          महोत्सव के माध्यम से हमने पर्यावरण संरक्षण के लिए अनेकों कार्यक्रम
          संचालित किए हैं। पर्यावरण संरक्षण का संदेश जन-जन तक पहुँचाने के लिए
          रैलियाँ, संगोष्ठियाँ, ऑनलाइन जागरूकता संदेश प्रतियोगिताएँ और विभिन्न
          संस्थाओं में अध्ययनरत विद्यार्थियों को जागरूक करने के प्रयास निरंतर
          किए जा रहे हैं, जिससे एक प्रकृति-प्रेमी समाज का निर्माण हो सके।&rsquo;
        </p>

        <p>
          &lsquo;वर्ष 2024 में हम E-20 कार्यक्रम, &lsquo;एक व्यक्ति एक
          पौधा&rsquo; (जन अभियान), और छात्र इंटर्नशिप कार्यक्रम के माध्यम से इन
          प्रयासों को और सशक्त बनाने जा रहे हैं। हजारों विद्यार्थियों को मंच
          प्रदान कर उनकी प्रतिभा को निखारना संस्था की सर्वोच्च प्राथमिकता है।
          अनेक और छोटे-छोटे प्रयासों से पर्यावरण संरक्षकों का पर्यावरण सेवक समाज
          तैयार कर प्रकृति को हरण से बचाना, यही The Earth Association का ध्येय
          है।&rsquo;
        </p>

        <p>
          &lsquo;हमारे संस्कारों में जिसका वर्णन है, हमारे वेदों में जिसे गाया
          गया है, उस मातृरूप पृथ्वी (प्रकृति) को दूषित होने से बचाना, उसका
          संरक्षण करना तथा उज्ज्वल भविष्य को सुनिश्चित करना। इसी उद्देश्य की
          पूर्ति के लिए यह संस्था सदैव पूर्ण समर्पण के साथ कार्यरत है।&rsquo;
        </p>
      </div>
    ),
  },
  // {
  //   id: 2,
  //   title: "Coordinator’s Message",
  //   image: coordinator,
  //   preview:
  //     "Mrs. Mamta Sharma, the Program Coordinator, shares updates on The Earth Association's sustainable projects, emphasizing their impact on urban green spaces, youth education, and clean energy advocacy.",
  //   content: (
  //     <div className="prose lg:prose-xl mx-auto py-6">
  //       <p className="mb-4">Greetings from The Earth Association!</p>
  //       <p>
  //         As the Program Coordinator, I am thrilled to share with you some
  //         exciting updates and initiatives that we have been passionately
  //         working on to foster environmental sustainability and conservation.
  //       </p>
  //       <p>
  //         At The Earth Association, our mission is to create a sustainable
  //         future through innovative projects and community engagement. Here are
  //         a few of our latest endeavors:
  //       </p>
  //       <h4 className="font-semibold">Green Urban Spaces Initiative:</h4>
  //       <p>
  //         We are transforming urban landscapes into lush green spaces. By
  //         partnering with local governments and communities, we are planting
  //         trees, creating parks, and developing urban gardens. These green
  //         spaces not only enhance the beauty of our cities but also improve air
  //         quality and provide residents with much-needed access to nature.
  //       </p>
  //       <h4 className="font-semibold">
  //         Youth Environmental Education Campaign:
  //       </h4>
  //       <p>
  //         Education is at the heart of our efforts. We have launched an
  //         educational campaign in schools to teach students about the importance
  //         of environmental conservation. By engaging young minds, we hope to
  //         inspire a new generation of environmental stewards.
  //       </p>
  //       <h4 className="font-semibold">Clean Energy Advocacy:</h4>
  //       <p>
  //         Promoting clean energy solutions is another key focus area for us. We
  //         are advocating for renewable energy sources such as solar and wind
  //         power. Through workshops and awareness programs, we are encouraging
  //         individuals and businesses to adopt sustainable energy practices.
  //       </p>
  //       <p>
  //         These initiatives are just a glimpse of our ongoing efforts. We invite
  //         you to join us in our mission to protect and preserve our planet for
  //         future generations. Together, we can make a meaningful impact on the
  //         environment and create a greener, healthier world.
  //       </p>
  //       <p>Thank you for your continued support.</p>
  //       <p>Warm regards,</p>
  //       <p>Mrs. Mamta Sharma</p>
  //       <p>Program Coordinator, The Earth Association</p>
  //     </div>
  //   ),
  // },
  {
    id: 3,
    title: "The Earth Association at a Glance",
    image: glance,
    preview:
      "The Earth Association envisions a thriving, sustainable future for India and the entire world, where every citizen is informed, engaged, and empowered to protect and nurture the environment...",
    content: (
      <div className="prose lg:prose-xl mx-auto py-6">
        <h3 className="text-2xl font-bold mb-2">Vision</h3>
        <p className="mb-4">
          The Earth Association envisions a thriving, sustainable future for
          India and the entire world, where every citizen is informed, engaged,
          and empowered to protect and nurture the environment, ensuring the
          well-being of both people and nature for generations to come.
        </p>

        <h3 className="text-2xl font-bold mb-2">Mission</h3>
        <p className="mb-4">
          The Earth Association is dedicated to fostering environmental
          awareness and promoting conservation efforts in India and globally.
          Through educational programs, community engagement, and sustainable
          initiatives, we aim to inspire individuals and organizations to adopt
          eco-friendly practices and contribute to a greener, healthier planet.
        </p>

        <h3 className="text-2xl font-bold mb-2">Objectives</h3>

        <h4 className="text-xl font-semibold mb-2">Educational Outreach:</h4>
        <p className="mb-4">
          Organize workshops, seminars, and school programs to educate the
          community about environmental issues and sustainable practices.
          Develop and distribute educational materials, brochures, and digital
          content to raise awareness about the importance of conservation.
        </p>

        <h4 className="text-xl font-semibold mb-2">Community Engagement:</h4>
        <p className="mb-4">
          Conduct community clean-up drives, tree plantation campaigns, and
          recycling initiatives to actively involve residents in environmental
          conservation.
        </p>

        <h4 className="text-xl font-semibold mb-2">Sustainable Projects:</h4>
        <p className="mb-4">
          Implement projects aimed at reducing the carbon footprint of the
          community, such as promoting the use of renewable energy sources and
          encouraging energy-efficient practices. Develop urban gardening and
          green space projects to improve local biodiversity and provide green
          areas for community use.
        </p>

        <h4 className="text-xl font-semibold mb-2">
          Advocacy and Policy Influence:
        </h4>
        <p className="mb-4">
          Advocate for policies and regulations that support environmental
          protection and sustainability at local and state government levels.
          Collaborate with policymakers to develop and implement effective
          environmental regulations and standards.
        </p>

        <h4 className="text-xl font-semibold mb-2">Research and Innovation:</h4>
        <p className="mb-4">
          Conduct research on local environmental issues and develop innovative
          solutions to address these challenges. Support and fund projects that
          explore new technologies and methods for sustainable living and
          environmental conservation.
        </p>

        <h4 className="text-xl font-semibold mb-2">
          Public Awareness Campaigns:
        </h4>
        <p className="mb-4">
          Launch public awareness campaigns through various media channels to
          highlight the importance of environmental stewardship and sustainable
          living. Organize events such as Earth Day celebrations, environmental
          fairs, and exhibitions to engage the public and promote eco-friendly
          practices.
        </p>

        <h4 className="text-xl font-semibold mb-2">
          Volunteer and Membership Programs:
        </h4>
        <p className="mb-4">
          Establish a strong network of volunteers and members who are
          passionate about environmental issues and eager to contribute to the
          association’s initiatives. Provide training and resources to
          volunteers to empower them to lead and participate in conservation
          activities effectively.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "The International Art and Cultural Exchange Program",
    image: international,
    preview:
      "Earth Association's International Cultural Exchange Program enhances cultural understanding, environmental awareness, global networking, leadership development, and community impact through collaborative projects.",
    content: (
      <div className="prose lg:prose-xl mx-auto py-6">
        <h3 className="text-2xl font-bold mb-2">Aim</h3>
        <p className="mb-4">
          The International Cultural Exchange Program aims to achieve several
          key objectives:
        </p>

        <h4 className="text-xl font-semibold mb-2">Cultural Exchange:</h4>
        <p className="mb-4">
          Encourage students to exchange cultural values, traditions, and
          practices, thereby promoting mutual understanding and respect.
        </p>

        <h4 className="text-xl font-semibold mb-2">Environmental Awareness:</h4>
        <p className="mb-4">
          Educate participants about global environmental issues and foster a
          shared commitment to conservation efforts.
        </p>

        <h4 className="text-xl font-semibold mb-2">Global Networking:</h4>
        <p className="mb-4">
          Provide opportunities for students to build international friendships
          and networks, enhancing their global perspective.
        </p>

        <h4 className="text-xl font-semibold mb-2">Leadership Development:</h4>
        <p className="mb-4">
          Empower students with leadership skills through collaborative
          environmental projects and activities.
        </p>

        <h3 className="text-2xl font-bold mb-2">Program Impact</h3>
        <p className="mb-4">
          The International Cultural Exchange Program has had a profound impact
          on participants and their communities:
        </p>

        <h4 className="text-xl font-semibold mb-2">
          Enhanced Cultural Understanding:
        </h4>
        <p className="mb-4">
          Students develop a deeper appreciation for cultural diversity and the
          interconnectedness of global societies.
        </p>

        <h4 className="text-xl font-semibold mb-2">
          Increased Environmental Awareness:
        </h4>
        <p className="mb-4">
          Participants gain valuable knowledge about environmental issues and
          learn best practices for conservation.
        </p>

        <h4 className="text-xl font-semibold mb-2">
          Strengthened International Relations:
        </h4>
        <p className="mb-4">
          The program fosters strong ties between schools and students from
          different countries, promoting international cooperation.
        </p>

        <h4 className="text-xl font-semibold mb-2">Empowered Students:</h4>
        <p className="mb-4">
          Participants develop leadership skills and a sense of responsibility
          towards the environment, preparing them to be future leaders in
          sustainability.
        </p>

        <h4 className="text-xl font-semibold mb-2">Successful Projects:</h4>
        <p className="mb-4">
          Collaborative environmental projects lead to tangible improvements in
          local communities, such as cleaner waterways and greener urban areas.
        </p>

        <p className="mb-4">
          The International Cultural Exchange Program by The Earth Association
          is a powerful initiative that bridges cultural gaps and enhances a
          global commitment to environmental conservation. By engaging young
          minds in meaningful activities, we are building a generation of
          environmentally conscious and globally aware leaders. We look forward
          to continuing this journey and expanding our positive impact around
          the world.
        </p>
      </div>
    ),
  },
];

const Blogs = () => {
  return (
    <section>
      <div className="max-w-[1140px] mx-auto p-2.5 mt-20 mb-8 text-[18px] text-center text-black font-raleway min-h-[90vh]">
        <h2 className="font-bebas text-[45px] tracking-[1px] font-bold mb-8">
          Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

export const BlogCard = ({ image, title, preview, id }) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="relative  w-[300px] md:w-[350px] h-[400px] tab:h-[350px] lg:w-[300px]">
        <img
          src={image}
          alt=""
          className="w-full h-full center object-cover bg-black rounded-xl"
        />
      </div>
      <div className="mt-4 relative w-[300px] md:w-[350px] lg:w-[300px] font-raleway text-[15px] text-left">
        <span className="uppercase font-bold text-[20px] tracking-tighter py-2">
          {title}
        </span>
        <p className="pb-6 tracking-wide text-justify">{preview}</p>
        <Link
          to={`/blogs/${id}`} // Pass only the ID
          className="text-blue-500 font-semibold mt-2 inline-block hover:underline"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};
