import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Landing.css'


export default function Reflections() {
  const [reflectionBool, setReflectionBool] = useState(1);

  return (
    <div className="Page">
      <div className="Header">
      <p className="Name">Reflections</p>
        <div className="Headings">
          <p className="Heading-Link" onClick={() => setReflectionBool(1)}>   Sustainability</p>
          <p className="Heading-Link" onClick={() => setReflectionBool(0)}>   Professional Practice</p>
          <p>
            <Link to="/" className='Heading-Link'>
              Home
            </Link>
          </p>
        </div>
      </div>
      <div className="Body">
        {reflectionBool ? 
        <div className="sustainability">
          <h1>Apply principles of sustainability to create viable systems</h1>
          <p>Over the Summer of 2023 - 2024, I was completing an internship with Optik Engineering consultancy during which time I acted as the team leader for a group of five interns. Each of us came from different engineering disciplines and cultural backgrounds, with two members being international students who had started their degrees overseas. This created a major barrier in communication between team members especially due to the nature of specialisation that was required with our differing disciplines. This communication barrier peaked in the middle of the internship when 1 member was unable to communicate a critical detail in the design to the rest of the team and client putting us behind schedule.</p>
          <p>These communication challenges were extremely frustration as they took time and effort to communicate and caused doubt within the team on our capability to complete the project. As the other members were fluent in English, it was challenging to empathise with the struggle for communication as they were able to express the situation after multiple probing questions. Looking on the situation, I believe I let the frustration of the situation build up without attempting to construct a solution around the root issue, this stemmed from a lack of understanding that despite speaking the same language, the style of communication and understanding what is being asked is different.</p>
          <p>I believe that working with people from different backgrounds creates major difficulties with the differing communication styles and potential language barriers, and a lack of experience with these situations caused understanding and handling it extremely challenging. By understanding the difficulties associated with intercultural communication, allows you to develop systems to mitigate the impact and optimise communication.</p>
          <p>These intercultural communication challenges were explored by God & Zhang (2019) where they looked at Chinese international students at an Australian University and explored the need for ‘interlocutors to establish common grounds’ to allow for effective communication. This follows my beliefs for the need for systems or individuals to help support the effective communication within a team environment.</p>
          <p>From this experience, I realised that communication is more than just the language used but includes the nuances of style and understanding and without consideration for this, communication breakdown is sure to happen. This has taught me how pivotal it is to develop robust communication methods that alleviate this challenge and ensures all members are able to effectively communicate.</p>
        </div>
        : 
        <div className="intercultural">
          <h1>Professional Practice within intercultural and global contexts</h1>
          <p>Sustainability is imperative to the success of all projects and systems. Throughout my professional career, I had the experience of becoming a forklift operator and subsequently a qualified forklifting coach. This opportunity came as a double-edged sword initially, it was recognition for my expertise and practice whilst also meaning an overall reduction in an activity that I enjoyed. This left me uncertain as I didn’t want to exit my role of the primary forklift operator to instead train replacements. Overtime I had the experience of training people and despite my initial concerns it was enjoyable and meant that the overall team was able to operate effectively in my absence.</p>
          <p>I believe I initially acted in a selfish and inconsiderate manner, focusing on what I enjoyed with limited consideration towards the importance of continuing the training cycle and the benefits that came with it. These feelings dwindled as I trained a specific team member as seeing their growth brought satisfaction and understanding to my hesitance. I had concern for change as I enjoyed my role and the system the team operated within and hadn’t wanted it to change, but this change acted as an opportunity to develop my own personal skills and built a more sustainable team. This was truly emphasised when this team member also became a coach, they talked to me about similar concerns I had when I was in their position, and their own hesitance for change, I realised that the overall system needed the cycle of training to allow new team members to grow to the skill level of the older team to replace them if they leave.</p>
          <p>Handling change is a complex and challenging activity, with the action of resistance often causing increased stress and anxiety (Thrasher, 2023). This idea resonates with me as my hesitation caused more strain than what accepting the change was, and once I passed this, I was able to grow with the change and see the benefit of building this sustainability in the workplace.</p>
          <p>Understanding the principles of sustainability is imperative to understanding the importance of change and growth. Bunch et al (2019) describe the sustainability of social-ecological systems as ‘evolutionary,’ going through ‘cycles of change’. This demonstrates the ideas of cycles of change, with each individual experiencing change that maintains the overall sustainability of the system.</p>
          <p>From this experience, and the reflection I made after, I realised my own struggles with handling change and from research into articles such as Thrasher (2023), identified that my own hesitation often caused more struggles that the change itself and prevented me from gaining the benefits from growing with the changing environment. It also taught me the importance of passing on knowledge, how it builds a sustainable system that can continue to exist as you, a gear within, leave it. This time influences my decisions today as I go out of my way to upskill people in all parts of my life, from within university sharing knowledge among students to teaching people to drive now that I can.</p>
        </div> 
        }
        <div class="citations">
          <h1>References</h1>
          <p class="citation">Thrasher, M. (2023). Devotional review: Accepting the challenge of change | BYU-Idaho Scroll. University Wire. Uloop, Inc. <a href="https://doi.org/10.4324/9781351171601" target="_blank" rel="noopener noreferrer">https://doi.org/10.4324/9781351171601</a></p>
          <p class="citation">Bunch, M. J., Ramírez, R., & Morrison, K. (2019). Systems thinking in complex situations. In Education for Sustainable Human and Environmental Systems (1st ed., pp. 14). Routledge. <a href="https://doi.org/10.4324/9781351171601" target="_blank" rel="noopener noreferrer">https://doi.org/10.4324/9781351171601</a></p>
          <p class="citation">God, Y. T., & Zhang, H. (2019). Intercultural challenges, intracultural practices: how Chinese and Australian students understand and experience intercultural communication at an Australian university. Higher Education, 78(2), 305–322. <a href="https://doi.org/10.1007/s10734-018-0344-0" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s10734-018-0344-0</a></p>
        </div>
      </div>
    </div>
  )
}