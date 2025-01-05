(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/p1.dd6e25a9.mp4"},function(e,t,a){e.exports=a.p+"static/media/p2.b0dec239.png"},function(e,t,a){e.exports=a.p+"static/media/p3.2da1aab3.png"},function(e,t,a){e.exports=a.p+"static/media/p4.bf91eb42.png"},function(e,t,a){e.exports=a.p+"static/media/p5.3125a1ca.png"},function(e,t,a){e.exports=a.p+"static/media/surabhi2.fc676af9.jpeg"},function(e,t,a){e.exports=a.p+"static/media/helveticasurabhi.c1ee7c25.png"},function(e,t,a){e.exports=a.p+"static/media/surabhi3.d6b036b4.png"},function(e,t,a){e.exports=a.p+"static/media/surabhi4.18bc7081.png"},function(e,t,a){e.exports=a.p+"static/media/surabhi5.42c45f3b.png"},function(e,t,a){e.exports=a.p+"static/media/surabhi6.0abaae43.png"},function(e,t,a){e.exports=a.p+"static/media/surabhiresume.5e117652.pdf"},,function(e,t,a){e.exports=a(36)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(11),r=a.n(o),l=(a(34),a(2)),d=a(7),s=a(3);var m=e=>{let{activeTab:t}=e;const a=()=>"projects"===t?"#f7ecd5":"#030303";return n.a.createElement(p,{style:{backgroundColor:(()=>{switch(t){case"projects":return"#0d1116";case"about":case"home":default:return"#EBF5F4"}})(),color:a()}},n.a.createElement(c,{to:"/",style:{color:a()}},"Surabhi Singh"),n.a.createElement(x,null,n.a.createElement(g,{to:"/projects",active:"projects"===t,textColor:a()},"Work"),n.a.createElement(g,{to:"/about",active:"about"===t,textColor:a()},"About")))};const p=s.a.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  border: none; /* Ensure no border */
  box-shadow: none; /* Ensure no shadow */

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    flex-direction: column;
  }
`,c=Object(s.a)(d.b)`
  font-family: 'alpinaitalic', serif;
  font-size: 24px;
  text-transform: lowercase;
  color: inherit;
  text-decoration: none;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,x=s.a.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`,g=Object(s.a)(d.b)`
  position: relative;
  padding-bottom: 5px;
  color: ${e=>{let{textColor:t}=e;return t}};
  margin-left: 30px;
  font-size: 16px;
  text-decoration: none;
  font-weight: ${e=>{let{active:t}=e;return t?"bold":"normal"}};
  border-bottom: ${e=>{let{active:t}=e;return t?"3px solid":"none"}};
  border-bottom-color: ${e=>{let{active:t,to:a}=e;return t&&"/projects"===a?"#5a6e27":t&&"/about"===a?"#ce8ec0":"transparent"}};

  &:hover {
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    font-size: 14px;
  }
`;var f=()=>{const[e,t]=Object(i.useState)("home"),a=Object(i.useRef)(null),o=Object(i.useRef)(null),r=Object(i.useRef)(null),l=()=>{const e=a.current.getBoundingClientRect().top,i=o.current.getBoundingClientRect().top,n=r.current.getBoundingClientRect().top;e<=100&&e>=-100?t("home"):i<=100&&i>=-100?t("projects"):n<=100&&n>=-100&&t("about")};return Object(i.useEffect)(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}),[]),n.a.createElement(h,null,n.a.createElement(m,{activeTab:e})," ",n.a.createElement(u,{ref:a,id:"home",isHome:!0},n.a.createElement(w,null,n.a.createElement(b,null,n.a.createElement(E,null,"Hi I'm a"),n.a.createElement(v,null,"Visual Designer"),n.a.createElement(y,null,"I'M SURABHI, AN ART DIRECTOR, AND A VISUAL DESIGNER ",n.a.createElement(C,null,"BASED IN NEW YORK.")," DRIVEN BY A PASSION FOR PROBLEM-SOLVING, MY DESIGN PHILOSOPHY ",n.a.createElement(C,null,"THRIVES ON VERSATILITY,")," AIMING TO ENCOMPASS DIVERSE FACETS. I CRAFT DESIGNS INFUSED WITH ",n.a.createElement(C,null,"EMOTIONAL INTELLIGENCE")," SPECIALIZING IN CREATING ",n.a.createElement(C,null,"IMPACTFUL DIGITAL EXPERIENCES,")," WITH EXPERTISE IN BRANDING, USER EXPERIENCE, AND MOTION DESIGN.")),n.a.createElement(I,null,n.a.createElement(N,{color:"#DCE4CF",textColor:"#030303",rotation:"-4deg",marginRight:"100px"},n.a.createElement("span",{className:"text"},"MOTION DESIGN"),n.a.createElement("span",{className:"code"},"DCE4CF")),n.a.createElement(N,{color:"#5A6E27",rotation:"5deg",marginLeft:"-20px"},n.a.createElement("span",{className:"text"},"INTERACTION DESIGN"),n.a.createElement("span",{className:"code"},"5A6E27")),n.a.createElement(N,{color:"#004735",rotation:"-7deg",marginRight:"100px"},n.a.createElement("span",{className:"text"},"USER EXPERIENCE"),n.a.createElement("span",{className:"code"},"004735")),n.a.createElement(N,{color:"#CE8EC0",rotation:"7deg",marginLeft:"20px"},n.a.createElement("span",{className:"text"},"BRANDING"),n.a.createElement("span",{className:"code"},"CE8EC0")),n.a.createElement(N,{color:"#FF9416",rotation:"7deg",marginLeft:"20px",marginRight:"60px"},n.a.createElement("span",{className:"text"},"TYPOGRAPHY"),n.a.createElement("span",{className:"code"},"FF9416")),n.a.createElement(N,{color:"#C1DD17",textColor:"#030303",rotation:"-1deg",marginLeft:"40px"},n.a.createElement("span",{className:"text"},"USER INTERFACE"),n.a.createElement("span",{className:"code"},"C1DD17"))))))};const h=s.a.div`
  background-color: #ebf5f4;
  color: #030303;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 0 40px;
  }

  @media (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`,u=s.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${e=>{let{isHome:t}=e;return t?"100vh":"auto"}};
  padding: 20px;
  box-sizing: border-box;

  &:nth-child(odd) {
    background-color: #f7f7f7;
  }

  &:nth-child(even) {
    background-color: #ebf5f4;
  }
`,w=s.a.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 200px;
  flex-grow: 1;

  @media (max-width: 1440px) {
    margin-top: 80px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`,b=s.a.div`
  flex: 3;
  margin-bottom: 50px;
  max-width: 650px;
  text-align: left;
  margin-left: 100px;
  margin-right: 200px;

  @media (max-width: 1440px) {
    max-width: 550px;
    margin-left: 80px;
    margin-right: 60px;
  }

  @media (max-width: 1024px) {
    text-align: left;
    margin-bottom: 30px;
    margin-left: 50px;
    margin-right: 40px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
`,E=s.a.h2`
  font-family: 'flexalight', sans-serif;
  font-size: 48px;
  margin: 0;

  @media (max-width: 1440px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`,v=s.a.h1`
  font-family: 'alpinaitalic', sans-serif;
  font-size: 96px;
  font-style: italic;
  margin: 10px 0 0;

  @media (max-width: 1440px) {
    font-size: 84px;
  }

  @media (max-width: 768px) {
    font-size: 72px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }
`,y=s.a.p`
  font-family: 'flexalight', sans-serif;
  font-size: 15.5px;
  line-height: 1.6;
  max-width: 100%;
  text-align: left;

  span {
    font-family: 'flexabold', sans-serif;
  }

  @media (max-width: 1440px) {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,C=s.a.span`
  font-family: 'flexabold', sans-serif;
  font-weight: bold;
`,I=s.a.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 20px;
  margin-right: 20px;

  @media (max-width: 1024px) {
    align-items: center;
    margin-right: 0;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    align-items: center;
    margin-top: 10px;
  }
`,N=e=>{let{color:t,rotation:a,textColor:o,marginLeft:r,marginRight:l,children:d}=e;const[s,m]=Object(i.useState)({x:0,y:0});return n.a.createElement(z,{color:t,rotation:a,textColor:o,marginLeft:r,marginRight:l,offsetX:s.x,offsetY:s.y,onMouseMove:e=>{const{left:t,top:a,width:i,height:n}=e.target.getBoundingClientRect(),o=e.clientX-(t+i/2),r=e.clientY-(a+n/2);m({x:o/10,y:r/10})},onMouseLeave:()=>{m({x:0,y:0})}},d)},z=s.a.a`
  font-family: 'Helvetica', sans-serif;
  font-size: 16px;
  color: ${e=>{let{textColor:t}=e;return t||"#ffffff"}};
  background-color: ${e=>{let{color:t}=e;return t}};
  padding: 15px 25px;
  margin-bottom: 15px;
  transform: rotate(${e=>{let{rotation:t}=e;return t}});
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  text-align: right;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  margin-left: ${e=>{let{marginLeft:t}=e;return t||"0"}};
  margin-right: ${e=>{let{marginRight:t}=e;return t||"0"}};

  &:hover {
    transform: translate(${e=>{let{offsetX:t}=e;return`${t}px`}}, ${e=>{let{offsetY:t}=e;return`${t}px`}})
      rotate(${e=>{let{rotation:t}=e;return`calc(${t} + 10deg)`}})
      scale(1.1);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
  }

  .text {
    flex: 1;
    text-align: left;
  }

  .code {
    flex: 0;
    text-align: right;
    margin-left: 20px;
    font-family: 'Courier New', monospace;
  }

  @media (max-width: 768px) {
    width: 250px;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    width: 200px;
    padding: 8px 15px;
    font-size: 14px;
  }
`;var R=a(14),k=a.n(R),F=a(15),j=a.n(F),S=a(16),A=a.n(S),T=a(17),O=a.n(T),D=a(18),L=a.n(D);var B=()=>{const e=[{title:"GreenMind (User Experience)",description:"Greenmind is a website that promotes positive climate narratives for environmentally conscious individuals seeking hope and actionable solutions.",video:k.a,link:"https://www.figma.com/proto/hbABR9CVMz9bod50InohZM/Greenmind-Website-UI?page-id=191%3A28&node-id=191-29&viewport=300%2C1504%2C0.14&t=qRDrEVjBZtCo4bh8-1&scaling=scale-down-width&content-scaling=fixed",label:{text:"USER EXPERIENCE",color:"#004735",code:"004735",rotation:"-4deg",marginRight:"100px"}},{title:"FindFreeFood(Interaction Design)",description:"Find free food is a mobile application designed for students on campus to - you guessed it - find free food! This app keeps track of all the events going on campus and sends alerts whenever there is free food nearby.",image:j.a,link:"https://www.figma.com/proto/NspGcwBdveeytsVCci2FMx/Surabhi-Singh---Pitch-Course-Project?page-id=528%3A1262&node-id=530-1059&viewport=389%2C176%2C0.08&t=PnfUBU9qZoWmiYiH-1&scaling=scale-down-width&content-scaling=fixed",label:{text:"INTERACTIVE DESIGN",color:"#5A6E27",code:"#5A6E27",rotation:"5deg",marginLeft:"-20px"}},{title:"Derma-e (Branding)",description:"Redesigning a Pharmaceutical skin care brand to make it more visually appealing and creating a numeric system that makes skincare as easy as 1 2 3.",image:A.a,link:"https://www.behance.net/gallery/176141145/Derma-E-RebrandingCasestudy",label:{text:"BRANDING",color:"#CE8EC0",code:"#CE8EC0",rotation:"-7deg",marginRight:"100px"}},{title:"Riff (Motion Design)",description:"\n      Riff is a hypothetical music label company, with a soda on the side!\nIt's a harmonious blend of refreshment and rhythm, where every sip is a note in a delicious symphony. Whether you're into the classics or the latest hits, Riff is here to quench your thirst for both music and refreshment.\n      ",image:O.a,link:"https://vimeo.com/880016031?share=copy",label:{text:"MOTION DESIGN",color:"#DCE4CF",code:"#DCE4CF",rotation:"7deg",marginLeft:"20px"}},{title:"Jazz Music Festival (Typography) ",description:"The Goal of this project was to explore the relationship between type and image. This brochure is text heavy but needs there is no information overload",image:L.a,link:"https://www.behance.net/gallery/169089697/Rochester-Jazz-Festival-Brochure",label:{text:"TYPOGRAPHY ",color:"#FF9416",code:"#FF9416",rotation:"7deg",marginLeft:"20px",marginRight:"60px"}}];return n.a.createElement(P,null,n.a.createElement(m,{activeTab:"projects"})," ",n.a.createElement(M,null,"Work")," ",n.a.createElement(G,null,e.map((e,t)=>n.a.createElement($,{key:t},n.a.createElement(U,null,e.video?n.a.createElement(Y,{src:e.video,muted:!0,autoPlay:!0,loop:!0}):n.a.createElement(H,{src:e.image,alt:e.title}),n.a.createElement(V,{color:e.label.color,rotation:e.label.rotation,textColor:"#030303",marginLeft:e.label.marginLeft,marginRight:e.label.marginRight},n.a.createElement("span",{className:"text"},e.label.text),n.a.createElement("span",{className:"code"},e.label.code))),n.a.createElement(W,null,n.a.createElement(X,null,e.title),n.a.createElement(J,null,e.description),n.a.createElement(_,{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View Project"))))))};const P=s.a.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  background-color: #0d1116; /* Set background color to match header */
  color: #fff;
`,G=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 20px;
  width: 100%;
`,M=s.a.h1`
  font-family: 'alpinaitalic', serif;
  font-size: 48px;
  color: #FFFFFF;
  text-align: left;
  margin: 30px 50px;

  @media (max-width: 1024px) {
    margin: 20px 30px;
    font-size: 32px;
  }

  @media (max-width: 768px) {
    margin: 15px 20px;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    margin: 10px 15px;
    font-size: 24px;
  }
`,$=s.a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  margin-bottom: 40px;
  padding: 0;
  width: 95%;
  max-width: 1500px;


  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    padding: 0 15px; /* Add padding to prevent cut-off */
  }

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    padding: 0 15px; /* Add padding to prevent cut-off */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 0 15px; /* Add padding to prevent cut-off */
  }
`,H=s.a.img`
  width: 670px;
  height: 312px;
  border-radius: 15px;
  object-fit: cover;
  opacity: 1;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }
`,Y=s.a.video`
  width: 670px;
  height: 312px;
  border-radius: 15px;
  object-fit: cover;
  opacity: 1;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }
`,U=s.a.div`
  flex: 2;
  position: relative;
  margin-right: 40px;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 0 50px;
  }

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 0 50px;
  }
`,V=s.a.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: 'flexalight', sans-serif;
  font-size: 14px;
  color: ${e=>{let{textColor:t}=e;return t||"#ffffff"}};
  background-color: ${e=>{let{color:t}=e;return t}};
  padding: 8px 15px;
  transform: rotate(${e=>{let{rotation:t}=e;return t}});
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  text-align: right;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  margin-left: ${e=>{let{marginLeft:t}=e;return t||"0"}};
  margin-right: ${e=>{let{marginRight:t}=e;return t||"0"}};

  &:hover {
    transform: translate(-5px, -5px) rotate(${e=>{let{rotation:t}=e;return`calc(${t} + 10deg)`}});
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
  }

  .text {
    flex: 1;
    text-align: left;
  }

  .code {
    flex: 0;
    text-align: right;
    margin-left: 10px;
    font-family: 'Courier New', monospace;
  }
`,W=s.a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: color 0.3s ease-in-out;
  width: 100%; /* Ensure it takes the full width */

  @media (max-width: 767px) {
    text-align: center; /* Center text on mobile */
    width: 100%;
  }

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`,X=s.a.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #FFFFFF;
  margin-left: -250px;

  @media (max-width: 1024px) {
    margin-left: 0;
    text-align: center; /* Center-align for tablets */
  }

  @media (max-width: 767px) {
    font-size: 24px;
    margin-left: 0;
    text-align: center; /* Center-align for mobile */
  }

  @media (max-width: 480px) {
    margin-left: 0;
    text-align: center; /* Center-align for small screens */
  }
`,J=s.a.p`
  font-size: 16px;
  margin-bottom: 20px;
  margin-left: -250px;
  line-height: 1.6;
  color: #ddd;
  word-wrap: break-word;
  padding-right: 10px;

  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 0 50px;
    text-align: center;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 15px;
    margin-left: 0;
    padding: 0 50px; /* Increased padding to prevent cutting off */
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-left: 0;
    padding: 0 50px; /* Increased padding to prevent cutting off */
    text-align: center;
  }
`,_=s.a.a`
  align-self: flex-start;
  padding: 10px 20px;
  font-size: 18px;
  color: #000;
  background-color: #FFFFFF;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 1;
  position: relative;
  margin-left: -250px;

  @media (max-width: 1024px) {
    margin-left: 0;
    align-self: center; /* Center button on tablets */
  }

  @media (max-width: 767px) {
    padding: 8px 16px;
    font-size: 16px;
    margin-left: 0;
    align-self: center; /* Center button on mobile */
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 16px;
    margin-left: 0;
    align-self: center; /* Center button on small screens */
  }

  &:hover {
    background-color: #fff;
    color: #000;
    transform: translateY(-3px);
  }
`;var Z=a(19),q=a.n(Z),K=a(20),Q=a.n(K),ee=a(21),te=a.n(ee),ae=a(22),ie=a.n(ae),ne=a(23),oe=a.n(ne),re=a(24),le=a.n(re),de=a(6),se=a(25),me=a.n(se);var pe=()=>n.a.createElement(ce,null,n.a.createElement(xe,null,"About Me")," ",n.a.createElement(ge,null,n.a.createElement(ue,null,n.a.createElement(we,{src:q.a,alt:"Surabhi Singh"}),n.a.createElement(be,null,n.a.createElement(Ee,null,"My love for travel and exploration constantly fuels my creativity, providing fresh perspectives that I can incorporate into my work. One of the most life-changing experiences for me was being an observer at the WorldSkills Competition in Kazan, Russia, in 2019. This event offered invaluable insights into global design standards and further ignited my passion for design.",n.a.createElement("br",null),"Talk to me about design, chess, travel, and my love for Harry Potter books.",n.a.createElement("br",null),n.a.createElement(fe,{href:"mailto:singhsurabhi.design@gmail.com"},n.a.createElement(de.b,null)," singhsurabhi.design@gmail.com"),n.a.createElement(he,{href:me.a,target:"_blank",rel:"noopener noreferrer"},"View Resume")))),n.a.createElement(ye,null,n.a.createElement(Ce,{src:Q.a,alt:"Helvetica Surabhi"})),n.a.createElement(Ie,null,n.a.createElement(Ne,null,n.a.createElement(ve,{color:"#FF6F00"},n.a.createElement("span",{className:"text"},"L.L.Bean HQ"),n.a.createElement("span",{className:"code"},"MI")),n.a.createElement(ze,{src:te.a,alt:"Image 3"})),n.a.createElement(Ne,null,n.a.createElement(ve,{color:"#D184C5"},n.a.createElement("span",{className:"text"},"Bar Harbor"),n.a.createElement("span",{className:"code"},"MI")),n.a.createElement(ze,{src:ie.a,alt:"Image 4"})),n.a.createElement(Ne,null,n.a.createElement(ve,{color:"#4F7043"},n.a.createElement("span",{className:"text"},"Japanese Garden"),n.a.createElement("span",{className:"code"},"NY")),n.a.createElement(ze,{src:oe.a,alt:"Image 5"})),n.a.createElement(Ne,null,n.a.createElement(ve,{color:"#31521F"},n.a.createElement("span",{className:"text"},"NYC Library"),n.a.createElement("span",{className:"code"},"NY")),n.a.createElement(ze,{src:le.a,alt:"Image 6"})))));const ce=s.a.div`
  background-color: #EBF5F4;
  color: #000;
  padding: 0 20px;
  max-width: 100vw;
  overflow-x: hidden;
`,xe=s.a.h1`
  font-family: 'alpinaitalic', serif;
  font-size: 48px;
  margin: 70px 0 20px 50px; /* Increased top margin for spacing */
  color: #030303;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 36px;
    margin: 50px 0 20px 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin: 40px 0 20px 20px;
  }
`,ge=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 40px;
  font-family: 'flexalight', sans-serif;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`,fe=s.a.a`
  font-size: 18px;
  margin-top: 14px;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`,he=s.a.a`
  display: inline-block;
  margin-top: 12px;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`,ue=s.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out forwards;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,we=s.a.img`
  width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`,be=s.a.div`
  flex: 1;
  text-align: left;
  padding: 0 20px;
  opacity: 0;
  animation: fadeIn 1.2s ease-out forwards 0.5s;

  @media (max-width: 1024px) {
    padding: 0;
    text-align: center;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`,Ee=s.a.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  &:hover {
    color: #000;
    transition: color 0.3s ease;
  }
`,ve=s.a.div`
  position: absolute;
  top: 20px;
  left: 125px;
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
  color: #fff;
  background-color: ${e=>{let{color:t}=e;return t}};
  padding: 8px 15px;
  text-align: left;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;


  .text {
    flex: 1;
    text-align: left;
  }

  .code {
    flex: 0;
    text-align: right;
    margin-left: 10px;
    font-family: 'Courier New', monospace;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
    width: 120px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 5px 10px;
    width: 100px;
  }
`,ye=s.a.div`
  width: 100%;
  margin: 20px 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.5s ease-out forwards;
`,Ce=s.a.img`
  width: 100%;
  height: auto;
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(100%);
  }
`,Ie=s.a.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: -150px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-top: -100px;
  }
`,Ne=s.a.div`
  position: relative;
  width: 22%;
  height: auto; /* Ensure height adjusts to image */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 80%;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
  }
`,ze=s.a.img`
  width: 100%;
  height: auto; /* Adjusts height proportionally */
  object-fit: cover; /* Ensures image covers the container fully */
  border-radius: 8px;
`;var Re=e=>{let{setShowFooter:t,setActiveTab:a}=e;const o=Object(i.useRef)(null),r=Object(i.useRef)(null),l=Object(i.useRef)(null);return Object(i.useEffect)(()=>{const e=()=>{const e=r.current.getBoundingClientRect().top,i=l.current.getBoundingClientRect().top,n=window.innerHeight;i<n/2?(a("about"),t(!0),console.log("Tab open:","about")):e<n/2?(a("projects"),t(!1),console.log("Tab open:","projects")):(a("home"),t(!1),console.log("Tab open:","home"))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[a,t]),n.a.createElement("div",null,n.a.createElement("div",{ref:o,id:"main"},n.a.createElement(f,null)),n.a.createElement("div",{ref:r,id:"projects"},n.a.createElement(B,null)),n.a.createElement("div",{ref:l,id:"about"},n.a.createElement(pe,null)))};var ke=()=>n.a.createElement(Fe,null,n.a.createElement(je,null,n.a.createElement(Se,null,n.a.createElement("h2",null,"Surabhi Singh"),n.a.createElement("p",null,"UX Designer | Creative Thinker | Problem Solver"),n.a.createElement(Ae,null,'"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs')),n.a.createElement(Te,null,n.a.createElement(Oe,{href:"https://www.linkedin.com/in/design-surabhi/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(de.c,{size:30})),n.a.createElement(Oe,{href:"https://www.behance.net/surabhisingh1/projects",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(de.a,{size:30})),n.a.createElement(Oe,{href:"mailto:singhsurabhi.design@gmail.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(de.b,{size:30})))),n.a.createElement(De,null,n.a.createElement("p",null,"\xa9 2024 Surabhi Singh. All rights reserved.")));const Fe=s.a.footer`
  width: 100%;
  padding: 40px 20px;
  background-color: #000;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`,je=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`,Se=s.a.div`
  margin-bottom: 20px;

  h2 {
    font-size: 28px;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`,Ae=s.a.p`
  font-size: 16px;
  font-style: italic;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Te=s.a.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`,Oe=s.a.a`
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`,De=s.a.div`
  font-size: 14px;
  color: #aaa;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;a(35);function Le(){const[e,t]=Object(i.useState)(!1),[a,o]=Object(i.useState)("home"),r=Object(l.m)();return Object(i.useEffect)(()=>{switch(r.pathname){case"/":o("home"),t(!1);break;case"/projects":o("projects"),t(!0);break;case"/about":o("about"),t(!0);break;default:o("home")}},[r.pathname]),n.a.createElement("div",{style:{backgroundColor:"projects"===a?"#000":"#EBF5F4",minHeight:"100vh"}},n.a.createElement(m,{activeTab:a}),n.a.createElement(l.c,null,n.a.createElement(l.a,{path:"/",element:n.a.createElement(Re,{setShowFooter:t,setActiveTab:o})}),n.a.createElement(l.a,{path:"/projects",element:n.a.createElement(B,{setActiveTab:o})}),n.a.createElement(l.a,{path:"/about",element:n.a.createElement(pe,{setActiveTab:o})})),e&&n.a.createElement(ke,null))}function Be(){return n.a.createElement(d.a,null,n.a.createElement(Le,null))}var Pe=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then(t=>{let{getCLS:a,getFID:i,getFCP:n,getLCP:o,getTTFB:r}=t;a(e),i(e),n(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Be,null))),Pe()}],[[27,1,2]]]);
//# sourceMappingURL=main.0b2b359b.chunk.js.map