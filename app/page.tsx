'use client'

export default function Home() {

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="Main">
        <div className="Header">
          <p className="Name">Thomas Separovich</p>
          <div className="Headings">
            <p className="Heading-Link" onClick={() => scrollToSection('AboutMe')}>About me</p>
            <p className="Heading-Link" onClick={() => scrollToSection('Education')}>Education</p>
            <p className="Heading-Link" onClick={() => scrollToSection('WorkExperience')}>Work Experience</p>
            <p className="Heading-Link" onClick={() => scrollToSection('Contact')}>Contact</p>
          </div>
        </div>

        <div className="Body">
          <div className="AboutMe" id="AboutMe">
            <h2 className="Heading">About Me</h2>
            <p>
            Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
  To make your document look professionally produced, Word provides header, footer, cover page and text box designs that complement each other. For example, you can add a matching cover page, header and sidebar. Click Insert, then choose the elements you want from the different galleries.
  Themes and styles also help to keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
  Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, then click the plus sign.
  Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you finished – even on another device.
            </p>

          </div>

          <div className="Education" id="Education">
            <h2 className="Heading">Education</h2>
            <p>
            Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
  To make your document look professionally produced, Word provides header, footer, cover page and text box designs that complement each other. For example, you can add a matching cover page, header and sidebar. Click Insert, then choose the elements you want from the different galleries.
  Themes and styles also help to keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
  Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, then click the plus sign.
  Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you finished – even on another device.
            </p>
          </div>

          <div className="WorkExperience" id="WorkExperience">
            <h2 className="Heading">Work Experience</h2>
            <p>
            Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
  To make your document look professionally produced, Word provides header, footer, cover page and text box designs that complement each other. For example, you can add a matching cover page, header and sidebar. Click Insert, then choose the elements you want from the different galleries.
  Themes and styles also help to keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
  Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, then click the plus sign.
  Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you finished – even on another device.
            </p>
          </div>

          <div className="Contact" id="Contact">
            <h2 className="Heading">Contact</h2>
            <p>
            Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
  To make your document look professionally produced, Word provides header, footer, cover page and text box designs that complement each other. For example, you can add a matching cover page, header and sidebar. Click Insert, then choose the elements you want from the different galleries.
  Themes and styles also help to keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
  Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, then click the plus sign.
  Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you finished – even on another device.
            </p>
          </div>
        </div>
    </main>
  );
}
