import React from 'react';
import './Main.css';
import Navbar from '../navbar/Navbar';
import logo from "../../images/logo.png";
import Section1 from '../section1/Section1';
import Section2 from '../section2/Section2';
import content1 from "../../images/content1.png"
import content2 from "../../images/content2.png"
import content3 from "../../images/content3.png"
import Section3 from '../section3/Section3';
import ItemHead from "../../images/contentheader.png";
import Frame1 from "../../images/frame1.png";
import Frame2 from "../../images/frame2.png";
import Frame3 from "../../images/frame3.png";
import Frame4 from "../../images/frame4.png";
import Form from '../form/Form';
import Footer from '../footer/Footer';


const main = () => {
  return (
    <>
      <div className='header sticky'>
        <div className='hero-main'>
          <Navbar
            logo={logo}
            imgAlt="logo"
            navItems={["Home", "Services", "Portfolio", "Careers"]}
          />
          </div>
          </div>
      <div className="header">
        <div className='hero-main'>
          <Section1
            header={`We encourage companies to implement creative concepts.`}
            body={
              "lorem ipsum dolor sit amet consectetur. Eleifend iaculis magna bibendum tristique egestas interdum."
            }
            btnTitle={"Discover our work"}
            />
          </div>
      </div>
      <div className='main-container'>
        <div className='main-sub-container'>
        <Section2 btnTitle={"Get Started"} headerText={"About MagIT"} body1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis."} body2={"Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis."} ImgLinks={[content1, content2, content3]} />
        
        
        <Section3 headerText={"What We Do"} body={"At MagIT, We build custom software that allows businesses to meet their needs and constraints. we serve as a strategic partner, and help our clients digitally transform to improve their products, speed up service delivery, increase operational efficiency, and expand to new markets."}
           marginTop="1.5em"
          desc={[{
            "id": "1",
            "img": ItemHead,
            "imglabel": "Picture of a stack",
            "header":"Web Application Development",
            "body": "With extensive knowledge of the whole software development life cycle, MagIT is a full stack company capable of taking on highly scalable, end-to-end custom web application development projects for both market leaders and up-and-coming companies. To find out more, contact us right away.",
            "width": "318px"
          },
          
          {
            "id": "2",
            "img": ItemHead,
            "imglabel": "Picture of a stack",
            "header":"Mobile and IoT App Development",
            "body": "The need for phones, tablets, and wearables has never been higher, and to meet this demand, businesses need programmers with experience with today's most effective tools and technologies. Make your dream app a reality by getting in touch with us right away to learn more about MagIT's mobile application development services.",
            "width": "318px"
          }
          
          ]}  desc2={[{
            "id": "1",
            "img": ItemHead,
            "imglabel": "Picture of a stack",
            "header":"API Development and Integration",
            "body": "With efficient API development and integration for your organization, MagIT can offer the data you need to scale new heights of success. We can assist you in reducing time-consuming manual processes from your company so that you can concentrate on innovation and growth by integrating your current apps with other automated apps. To discover more, call us right away.",
            "width": "318px"
          },
          
          {
            "id": "2",
            "img": ItemHead,
            "imglabel": "Picture of a stack",
            "header":"Digital Marketing",
            "body": "MagIT has decades of experience creating websites and e-commerce platforms that benefit businesses. We also produce advertisements and material that inspire people. We want to work with you to create workable digital marketing plans and initiatives that strengthen businesses, provide leads, and enthrall customers.",
            "width": "318px"
          }
          
          ]}
            />
        </div>  
      </div>
      <div className="main2-container" style={{ "background": "#EBFFC8" }}>
        <div className='main-sub-container'>
      <Section3 headerText={"Our Latest Projects"}
        marginTop="-3.5em"
        desc={[{
          "id": "1",
          "img": Frame1,
          "imglabel": "shock",
          "width": "433px"
        },
        
        {
          "id": "2",
          "img": Frame2,
          "imglabel": "meal wise",
          "width": "433px"
        }
        
        ]}  desc2={[{
          "id": "1",
          "img": Frame3,
          "imglabel": "Elma univeristy Alumni",
          "width": "433px"
        },
        
        {
          "id": "2",
          "img": Frame4,
          "imglabel": "Picture of a stack",
          "width": "433px"
        }

        ]}
          />
        </div>
      </div>
      <div className='main-form-container'>
        <Form />
      </div>
      <div className='footer-cover'>
        <Footer />
      </div>
    </>
  );
}

export default main