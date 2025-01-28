import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12"
          variants={item}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={container}
        >
          <motion.div variants={item}>
            <p className="text-lg text-gray-300 leading-relaxed split-text">
              

**Mustafa Kharacha **, born on **August 25, 2006**, in **Casablanca**, Morocco, is an 18-year-old who has already built a diverse foundation of knowledge and experience across various fields, from mechanical engineering to programming. His journey so far reflects his determination, ambition, and eagerness to continuously learn and grow.
### **Early Education and Academic Path:**
Mustafa's academic journey began with a **Baccalaureate in Life and Earth Sciences** in 2021, followed by a second **Baccalaureate in Electrical Sciences**, which provided him with a broad understanding of the natural world, electrical principles, and systems. This dual background sparked his interest in technology and the sciences, leading him to pursue a career in the technical field.
In 2023, Mustafa earned a **Diploma as a Technician Specialized in Mechanical Manufacturing Methods**, where he developed his skills in areas like mechanical design, CAD software, and various manufacturing techniques. This training, which included practical work and theoretical study, deepened his understanding of how mechanical systems are designed and built.
**Current Focus:**  
Mustafa is currently focused on **programming** and **computer sciences**, where he is expanding his knowledge in several languages and technologies. He’s learning **Python**, **UML**, **PHP**, **C++**, and diving into **Linux** systems. His ultimate goal is to master these technologies to pursue careers in software development, system administration, or other tech-driven roles.
To complement his programming skills, Mustafa is also honing his proficiency in other tools, such as **Excel**, **AutoCAD**, **Unreal Engine**, and **Cisco**, with plans to develop a well-rounded skill set that will enable him to excel in both the technical and creative sides of his career. Furthermore, he’s learning **Spanish** to expand his global communication skills, knowing that being multilingual can open doors to more international opportunities.
### **Professional Experience:**
Mustafa’s professional career has been equally diverse and enriching. After earning his technical diploma, he embarked on practical work experiences to further develop his skills in the real world.
1. **Figeac Aero Maroc:**  
   He began his career with a month-long internship as a **Technician in the Methods Office** at **Figeac Aero Maroc**, a company specializing in aerospace components. During this time, he learned about manufacturing processes, quality control, and how to optimize production methods for precision engineering. This internship exposed him to the technical intricacies of aerospace manufacturing, an experience that cemented his interest in the technical field.
2. **Said El Warak:**  
   For six months, Mustafa worked as a **Draftsman** at **Said El Warak**, a company that focuses on mechanical design and drafting. Here, he was responsible for creating detailed drawings, using tools like **AutoCAD** to draft technical designs that were later used in manufacturing. This role strengthened his ability to work with technical schematics and drawings, further building his design and CAD skills.

3. **Simra Maroc:**  
   Since **February 15, 2024**, Mustafa has been working as a **Milling Operator** at **Simra Maroc**, a role that involves working with milling machines to shape and cut materials to precise specifications. This job has allowed him to apply his mechanical skills in a hands-on environment, learning the complexities of operating advanced machinery and understanding the importance of precision in manufacturing.
4. **Additional Work Experience:**  
   In addition to his technical roles, Mustafa has worked in several service industries. As a **server in a coffee shop**, he gained experience in customer service and communication, learning how to manage customer expectations and work in a fast-paced environment.  
   Furthermore, Mustafa has worked in **relocation services** for two companies: **Africa Move** and **Euro Move**. These roles involved helping clients move their possessions, which taught him about logistics, problem-solving, and effective teamwork in high-pressure situations. The experience gave him valuable organizational and communication skills that he can apply in any future role.
5. **Freelancing:**  
   Mustafa also ventured into the world of freelancing, taking on various projects to build his portfolio and gain exposure to different industries. This entrepreneurial spirit has given him insight into managing projects, dealing with clients, and navigating the complexities of running his own business. Freelancing has allowed him to explore his passions and refine his professional skills, while offering him flexibility and the opportunity to try different things.
### **Entrepreneurial Vision:**
A key part of Mustafa’s story is his entrepreneurial ambition. One of his most exciting projects is his plan to develop his own **agricultural marketplace website**. The idea is to create a platform that focuses on the agricultural sector, allowing **sellers** to list products such as **animal feed, poultry, eggs**, and other farming supplies, while **buyers** can directly order from them. He envisions a system similar to **Jumia**, but tailored specifically to agriculture. Mustafa plans to design and develop this website himself, utilizing his technical skills in programming, web development, and e-commerce.
The marketplace project reflects his drive to combine technology with practical, real-world needs. By focusing on the agricultural sector, he aims to address logistical challenges in the market, create new opportunities for farmers and suppliers, and build a business that serves a vital industry.
### **Personal Traits and Future Aspirations:**
Mustafa is a highly motivated individual who enjoys challenges and thrives when given the opportunity to learn and grow. His varied experiences, ranging from technical fields to customer service, showcase his adaptability and diverse skill set. Whether he’s operating machinery, drafting designs, coding, or helping clients relocate, Mustafa brings a problem-solving mindset and a strong work ethic to everything he does.
Looking ahead, Mustafa envisions a career that blends his technical expertise with his entrepreneurial aspirations. Whether he pursues a career in software development, mechanical engineering, or e-commerce, he’s determined to create a future where he can combine his skills in technology, business, and innovation.


              .
            </p>
          </motion.div>

          <motion.div 
            variants={item}
            className="relative"
          >
            {/* Add your image here */}
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQGXmpbRoARF5w/profile-displayphoto-shrink_200_200/B4EZRlMxOVHMAY-/0/1736864640496?e=1743638400&v=beta&t=axw69MJC5Q27QmURXuTrcM2XDO2aRLv0o6sOgidbfRY"
              alt="Workspace"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;