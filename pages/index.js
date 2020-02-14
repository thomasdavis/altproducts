import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Router from "next/router";
import Head from "next/head";
import { Link as StyledLink } from "../components/Link";
import { Link } from "../routes";
import marked from "marked";
import Layout from "../components/Layout";
import map from "lodash/map";
import Button from "../components/Button";
import { Title, SubTitle, Body } from "../components/Text";
const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const productsJSON = [
  {
    Name:
      'Sante"ULTIMATE" Dual Shower Filter for Chloramine(Ammonia), Chlorine, Fluoride',
    Category: "water",
    Description:
      "Protect your space suit with a good shower filter and stop washing it with acid rain and hot chlorine.",
    Images:
      "41wPhiWNmnL.jpg (https://dl.airtable.com/.attachments/d8f9208a88257e79bbabb9c5d5698a28/2583a42e/41wPhiWNmnL.jpg)",
    Link:
      "https://www.amazon.com/dp/B012JCA3KI/?coliid=I1QCK39DPV4TNL&colid=1NOMJBSE5WUF6&psc=0&ref_=lv_ov_lig_dp_it",
    Price: "$149.99"
  },
  {
    Name: "Winix AW600 Triple Action Humidifier with Plasmawave",
    Category: "air",
    Description: "",
    Images:
      "61W8JiXvE9L._SL1500_.jpg (https://dl.airtable.com/.attachments/4c8f3829a6249bf2e0acad79cbebb45e/8afa6eea/61W8JiXvE9L._SL1500_.jpg)",
    Link:
      "https://www.amazon.com/dp/B00PRTXO20/?coliid=I1RDTMFMFDTQJT&colid=1NOMJBSE5WUF6&psc=1&ref_=lv_ov_lig_dp_it",
    Price: "$274.40"
  },
  {
    Name: "EMF Protection Blushield Tesla Gold Plug-In Whole House Protection",
    Category: "emf",
    Description: "",
    Images:
      "41Vn4lxibLL._SL1066_.jpg (https://dl.airtable.com/.attachments/b9e6fc57423683dfd24b5efe8e7f136d/14bcf66b/41Vn4lxibLL._SL1066_.jpg)",
    Link:
      "https://www.amazon.com/Protection-Blushield-Protection-Similar-Earthcalm/dp/B00K70OX0Q/ref=sr_1_2?keywords=Blushield+Global&qid=1581395792&sr=8-2",
    Price: "$299.00"
  },
  {
    Name: "Uvex Skyper Blue Light Blocking Computer Glasses",
    Category: "light",
    Description:
      "Toxic blue light makes you blind and stupid and it even prematurely ages you according to studies that I read on the internet. They throw out your circadian rhythm by triggering the melonopsin receptor in the eye that regulates your circadian rhythm. And now your body thinks that it's midday. \n\nThis is something that you feel right away. You don't need any studies here it's clear that these glasses make you relaxed. The red ones make you sleepy. \nIdeally you would just have fire light",
    Images:
      "blueblockers.jpg (https://dl.airtable.com/.attachments/9c8e29f4ffc3f16d3ffc68d17be9c692/9d3ae079/blueblockers.jpg)",
    Link:
      "https://www.amazon.com/dp/B000USRG90/?coliid=I3C91PXNLHGRD&colid=1NOMJBSE5WUF6&psc=1&ref_=lv_ov_lig_dp_it",
    Price: "$10.08"
  },
  {
    Name: "Blood Flow Restriction Bands",
    Category: "strength",
    Description: "",
    Images:
      "bands.jpg (https://dl.airtable.com/.attachments/7add3eaa13f43192bdad6d137fd549ee/ddfdb714/bands.jpg)",
    Link:
      "https://www.amazon.com/dp/B07GYLLHG3/?coliid=I18QMUJMQ92V72&colid=1NOMJBSE5WUF6&psc=1&ref_=lv_ov_lig_dp_it",
    Price: "$23.98"
  },
  {
    Name: "PristineHydro Travel/Portable Water Filter System",
    Category: "water",
    Description:
      "This is the best water filter I can find.\n\nWater is the foundation of your health. \n\nYou are made of water. \n\nIt's more important than your food.\n\nThe first reason you want to filter your water is to remove the plastic.  \nRemoves the acids from acid rain! No other water filter can do that.\nIt doesn't add any alkaloids. This is the problem with \"alkaline water\" is that it dilutes your stomach acid making it difficult to digest protein. \nThen at the end it adds magnesium. And importantly, the most bio-available liquid form which is magnesium bicarbonate. \n\nIf you can't afford this yet like me then you can make your own magnesium bicarbonate by adding pure magnesium hydroxide to soda water as almost everyone is deficient because NPK fertiliser.\n\nWater is the hardest thing to get right.\n\nFluoride makes you retarded! there is research that seems pretty legit that's saying that it lowers IQ points.",
    Images:
      "hydro.jpg (https://dl.airtable.com/.attachments/d443c8b4bcbb4330f75480162e1aa92c/fbdeaec2/hydro.jpg)",
    Link:
      "https://www.amazon.com/PristineHydro-Travel-Portable-Alkaline-Filter/dp/B07DL5773L/ref=sr_1_2?keywords=PristineHydro&qid=1581398473&sr=8-2",
    Price: "$895.00"
  },
  {
    Name: "Electrolyte Supplement by LivePristine",
    Category: "supplements",
    Description: "",
    Images:
      "electrolyte.jpeg (https://dl.airtable.com/.attachments/ee7d0872de8883be27a1900a0a5112c1/f3494dd9/electrolyte.jpeg)",
    Link:
      "https://www.amazon.com/Electrolyte-Supplement-LivePristine-replenishing-Assimilation/dp/B07XVQK14J/ref=sr_1_1?keywords=PristineHydro&qid=1581398473&sr=8-1",
    Price: "$37.99"
  },
  {
    Name:
      "Ancient Minerals Magnesium Bath Flakes of Pure Genuine Zechstein Chloride",
    Category: "",
    Description: "",
    Images:
      "minerals.jpg (https://dl.airtable.com/.attachments/d8e1f54334a0be10c786d5da4d69a078/78382b24/minerals.jpg)",
    Link:
      "https://www.amazon.com/dp/B00BBD508C/?coliid=I2CZ371V5OHCC7&colid=1NOMJBSE5WUF6&psc=1&ref_=lv_ov_lig_dp_it",
    Price: "$29.95"
  },
  {
    Name: "Magnetico Classic Magnetic Sleep Pad Queen",
    Category: "",
    Description:
      "This is the only thing that I could find that seems to have a convincing argument that it can deflect 5G but that's not what it was designed to do.\n\nThe story goes that the earth was been losing power in its magnetic field as it's approaching a magnetic pole reversal in about three hundred years. And apparently this has happened 6 times before! And it shows in the archaeological record littered with extinction events.\n\nBut back when the magnetic field was strong in the time of Noah when man lived 300 years old and animals and plants were larger.  \n\nMagnetism is an energy field that the body utilises as a free energy source.",
    Images:
      "Magnetico_Sleep_Pad.png (https://dl.airtable.com/.attachments/d394faef48684aaf8e29be9b6cb266d7/2308e2e8/Magnetico_Sleep_Pad.png)",
    Link:
      "https://www.amazon.com/dp/B00LH3YAZU/?coliid=I31FOJM9TBLICS&colid=1NOMJBSE5WUF6&psc=1&ref_=lv_ov_lig_dp_it",
    Price: "$840"
  },
  {
    Name: "TriField EMF Meter",
    Category: "",
    Description: "",
    Images:
      "emf.jpg (https://dl.airtable.com/.attachments/b8f53adc60f158ca68342004dfbb2db1/106b27af/emf.jpg)",
    Link:
      "https://www.amazon.com/dp/B078T2R64C/?coliid=I1ORCUYXX4EE50&colid=1NOMJBSE5WUF6&psc=1&ref_=lv_ov_lig_dp_it",
    Price: "$168.00"
  },
  {
    Name: "Berkey Water Filter",
    Category: "",
    Description:
      "Berkey is the best option for filtering out those oestrogen plastics",
    Images:
      "berky.jpeg (https://dl.airtable.com/.attachments/1fcc24f331ecc8dfbc639cbfa4d973db/217ac3d9/berky.jpeg)",
    Link:
      "https://www.amazon.com/dp/B00BWIWZJI/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B00BWIWZJI&pd_rd_w=5QTcD&pf_rd_p=c83c55b0-5d97-454a-a592-a891098a9709&pd_rd_wg=vzgxW&pf_rd_r=J55BC7G4JCTF6HWW4ZAD&pd_rd_r=eba97bfe-573a-48e3-b73c-fd84d2792385&smid=A1EQZSXTGMED14&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzN0UxVUFWSURQVTZMJmVuY3J5cHRlZElkPUEwNDA3MzIzM05UME5TVTVJNDIxWiZlbmNyeXB0ZWRBZElkPUEwMTAwNTk2MVNBUTA5TVpCVzg3MiZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    Price: "$330"
  },
  {
    Name: "EMF-Free Earbud Headphones",
    Category: "",
    Description: "",
    Images:
      "emfearphones.jpg (https://dl.airtable.com/.attachments/4d7514ff4e5c5808802d7a0664cd73e8/c71f7a04/emfearphones.jpg)",
    Link:
      "https://www.amazon.com/dp/B01N4LJOE2/?coliid=I1NIJSWZTWHQTK&colid=1NOMJBSE5WUF6&psc=1&ref_=lv_ov_lig_dp_it",
    Price: "$69.99"
  },
  {
    Name: "Toe Separators",
    Category: "",
    Description:
      "Conspiracy Products r/conspiracy \n\nWe've all been walking wrong!\n\nThere are so many leg and knee issues and sciatica pains.\n\nIf you're an athlete and you don't have good control of your feet because you've been walking in shoes that crush your toe-box and striking your heel. \n\nThese shoes make you walk in a way where you can be lazy and not activate your calf muscles and the muscles along your foot and the glutes. Just try and go for a run through the forest. \n\nIf you're a martial artist is's essential that you have a strong grounding.",
    Images:
      "toe.jpg (https://dl.airtable.com/.attachments/f0ac3ea2cab3c1c91ea2d0f461da943d/f498223c/toe.jpg)",
    Link:
      "https://www.amazon.com/Anatomical-Separators-Straighteners-Naturally-Corrector/dp/B07VPSPHG8/ref=sxbs_sxwds-stvp?cv_ct_cx=Toe+Spacers&keywords=Toe+Spacers&pd_rd_i=B07VPSPHG8&pd_rd_r=9cfa1612-c4aa-4252-b97b-04e5f4d4da12&pd_rd_w=3nueV&pd_rd_wg=bOx0H&pf_rd_p=a6d018ad-f20b-46c9-8920-433972c7d9b7&pf_rd_r=TNHGY3RPCZQR541P0343&psc=1&qid=1581400280&sr=1-1-dd5817a1-1ba7-46c2-8996-f96e7b0f409c",
    Price: "$13.95"
  },
  {
    Name: "Training Mask",
    Category: "",
    Description: "",
    Images:
      "mask.jpg (https://dl.airtable.com/.attachments/bb3203c3711bab437d1459f1e02de7c0/14115d2a/mask.jpg)",
    Link:
      "https://www.amazon.com/Medium-Elevation-Breathing-Resistance-Endurance/dp/B008B91KH4/ref=sr_1_2_sspa?keywords=Workout+Mask&qid=1581400616&sr=8-2-spons&psc=1&smid=A1R3J09TQ9U886&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3OE5VM01XT1g4T0smZW5jcnlwdGVkSWQ9QTA2MzYzMzYzSTY1M1ZVVTY4SzEwJmVuY3J5cHRlZEFkSWQ9QTEwMTcyOTgzTEdNSlNQS040V05LJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    Price: "$39.99"
  },
  {
    Name: "Grounding Shoe Strap",
    Category: "",
    Description:
      "Wrap this thing around your shoes to stay grounded. It's hard to believe that grounding is a real thing! There are two proven ways in which grounding affects the body electrically. \n1. The Earth gives off free electrons! Which can work as antioxidants in the body. Carnivores will appreciate a plant free form of antioxidants! The body uses these free electrons to replace the electrons lost from atoms on molecules that have been damaged by free radicals.\n\n2.There is a double blind randomised trial done on 10 participants that showed grounding dramatically thinned the blood by increasing the zeta potential of the red blood cells. Read the paper here: [Earthing (Grounding) the Human Body Reduces Blood Viscosity—a Major Factor in Cardiovascular Disease](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3576907/)\n\nBy my research I'm about %87 sure that you will experience noticeable health benefits. \n\nHere's one of the videos that convinced me. Scientist Bart Kay explains the science of grounding and the benefits it has on fighting inflammation in the body:\n[Bart Kay on Chronic Inflammation and Grounding](https://www.youtube.com/watch?v=i1lfh2Vj92A)",
    Images:
      "earthstrap.jpg (https://dl.airtable.com/.attachments/dea741a171a9a1f69bcca7ec70aebaa4/91b1d1da/earthstrap.jpg)",
    Link:
      "https://www.amazon.com/EARTHLING-3-0-Electrically-Conductive-Performance/dp/B07K9FDMRF?psc=1&SubscriptionId=AKIAILSHYYTFIVPWUY6Q&tag=duckduckgo-braveed-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B07K9FDMRF",
    Price: "$24.99"
  },
  {
    Name: "Mouth Tape",
    Category: "",
    Description:
      "Shut your mouth! Especially when you sleep.\nSleeping with your mouth open significantly damages your health. Search Buteyko Breathing and especially the work of Dr Arthor Rakhimov at normalbreathing.com.\n\nThis guys research is why I also recommend the Training Mask Product. It turns out that over-breathing is actually damaging to the body and should only be used in competition or life threatening situations.",
    Images:
      "mouthtape.jpg (https://dl.airtable.com/.attachments/c2ec59fafc2a0945b0d434127a8df31e/404083e9/mouthtape.jpg)",
    Link:
      "https://www.amazon.com/dp/B076CQ1NR8/?coliid=IV3WCFKJ1UBCQ&colid=1NOMJBSE5WUF6&psc=1&ref_=lv_ov_lig_dp_it",
    Price: "$19.97"
  },
  {
    Name: "Relax Far Infrared Sauna",
    Category: "",
    Description: "",
    Images:
      "91-NjAeLUsL._SL1500_.jpg (https://dl.airtable.com/.attachments/1e3015405cf7b032512a326b2fedd65b/b83e3ca3/91-NjAeLUsL._SL1500_.jpg)",
    Link:
      "https://www.amazon.com/Infrared-Relax-Amazing-Health-Benefits/dp/B00HFEFPCM/ref=sr_1_3?keywords=Relax+Far+Infrared+Sauna&qid=1581400831&sr=8-3",
    Price: "$1300.00"
  },
  {
    Name: "North American Herb & Spice Oregafresh Toothpaste",
    Category: "",
    Description:
      "Don't use fluoride toothpaste!\n\nIf you don't believe that the Illuminati is poisoning our water with fluoride in order the calcify our pineal glands then it's already too late!",
    Images:
      "61djWz8RNoL._SL1500_.jpg (https://dl.airtable.com/.attachments/668433f4164ef4e235c2ce1b67bef634/048d2015/61djWz8RNoL._SL1500_.jpg)",
    Link:
      "https://www.amazon.com/dp/B00HA6LHB8/?coliid=I2H4V97I3W7N6Z&colid=1NOMJBSE5WUF6&psc=1&ref_=lv_ov_lig_dp_it",
    Price: "$25.48"
  },
  {
    Name: "Hooga Red Light Therapy",
    Category: "",
    Description:
      "Red light therapy works! This definitely isn't the best one but it's the best one I could find on Amazon.  \n\nOver 2000 studies on PubMed",
    Images:
      "611E+QK1gtL._SL1001_.jpg (https://dl.airtable.com/.attachments/19da3db24d95cdc834ee3393dc3f2328/bdab49b8/611EQK1gtL._SL1001_.jpg)",
    Link:
      "https://www.amazon.com/Infrared-Irradiance-Anti-Aging-Performance-Optimization/dp/B07T81R1DX/ref=redir_mobile_desktop?_encoding=UTF8&aaxitk=DqJ2WKe8dJUxVgrnmUp1TQ&hsa_cr_id=4584789530301&ref_=sb_s_sparkle",
    Price: "$189.99"
  },
  {
    Name: "Dust Filtration Training Mask",
    Category: "",
    Description:
      "This has the benefits of carbon dioxide recycling and filters out pollution at the same time. \n\nIf you ride your bike to work in a city then this product is for you.\n\nProtect your lungs and get a health boosting cardiovascular workout.\n\nReed the book Oxygen Advantage.",
    Images:
      "81H9LrKZ-9L._SL1500_.jpg (https://dl.airtable.com/.attachments/d36d38f0ede25abe8b8e2d8f32f30447/68ab6c16/81H9LrKZ-9L._SL1500_.jpg)",
    Link:
      "https://www.amazon.com/Training-Workout-Elevation-Performance-Filtration/dp/B07GX4SWG1?ref_=ast_sto_dp",
    Price: "$59.99"
  },
  {
    Name: "Grounding Fitted Sheet with Earth Connection Cable",
    Category: "",
    Description:
      "[Earthing (Grounding) the Human Body Reduces Blood Viscosity—a Major Factor in Cardiovascular Disease](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3576907/)",
    Images: "",
    Link:
      "https://www.amazon.com/Grounding-Brand-Connection-Conductive-Healthy/dp/B07R9TC5NW/ref=sr_1_1_sspa?keywords=grounding%2Bsheet&qid=1581408472&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFaRlM3M0tFUTFITzgmZW5jcnlwdGVkSWQ9QTAwMzUzMDQyMFRTNVNXN0VTM1dPJmVuY3J5cHRlZEFkSWQ9QTAxOTk4MzAxUVJXRVZHQjNUSEdBJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1",
    Price: "$169.74"
  },
  {
    Name: "Sleeping Mask",
    Category: "",
    Description: "",
    Images: "",
    Link: "",
    Price: ""
  },
  {
    Name: "Ninja Air Fryer",
    Category: "",
    Description: "",
    Images:
      "71MbQTc5OEL._SL1500_.jpg (https://dl.airtable.com/.attachments/8190ca26222fcec3af25d7936a19c652/c87c8420/71MbQTc5OEL._SL1500_.jpg)",
    Link:
      "https://www.amazon.com/1550-Watt-Programmable-Reheating-Dehydrating-AF101/dp/B07FDJMC9Q/ref=sr_1_1_sspa?keywords=air+fryer+ninja&qid=1581429118&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUUJQVDhSSlI1UlFWJmVuY3J5cHRlZElkPUEwNjUxNTI1MzlWU1NEWjNRWDY2TCZlbmNyeXB0ZWRBZElkPUEwNTYzNTgxM0ZUVTUwTjlSS0M4MSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    Price: "$119.99"
  },
  {
    Name: "Cinder Grill",
    Category: "",
    Description: "",
    Images:
      "41SPLFMZTzL.jpg (https://dl.airtable.com/.attachments/7415ff75085d271ee24bf1ca0fb97aab/9a1a8bbd/41SPLFMZTzL.jpg)",
    Link:
      "https://www.amazon.com/Cinder-Grill-Electric-Precision-Overcook/dp/B07P933TDX/ref=sr_1_2?keywords=cinder+grill&qid=1581429271&sr=8-2",
    Price: "$329.00"
  },
  {
    Name: "",
    Category: "",
    Description: "",
    Images: "",
    Link:
      "https://www.amazon.com/filters-White-Elephant-Charcoal-Germany/dp/B01E8ZFVY2/ref=sr_1_25?keywords=active+charcoal+cigarette&qid=1581483175&sr=8-25",
    Price: ""
  }
];
const products = productsJSON;
console.log(products);
const HomeContainer = styled.div`
  background: #fff;
  padding-top: 0px;
`;
const Hero = styled.div`
  text-align: center;

  padding: ${({ isTouch }) => (isTouch ? "20px" : "0")};
  margin: auto;
  margin-bottom: ${({ isTouch }) => (isTouch ? "20px" : "90px")};
  margin-top: 80px;
`;
const LessTitle = styled(Title)`
  font-size: 42px;
`;
const ProductContainer = styled.div`
  display: flex;
  justify-contents: start;
  flex-direction: row;
  width: 700px;
  margin-bottom: 140px;
`;
const ProductImage = styled.img`
  align-self: start;
  flex: 0 0 auto;
  width: 300px;

  border: 3px solid #ebebeb;
`;
const ProductSection = styled.div`
  flex: 1 1 auto;
  padding-left: 40px;
`;
const HeroLeft = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  width: ${({ isTouch }) => (isTouch ? "100%" : "700px")};
  margin-right: ${({ isTouch }) => (isTouch ? "0" : "100px")};
  align-items: flex-start;
  justify-content: center;
`;
const HeroImage = styled.img`
  width: 200px;
`;
const HeroRight = styled.div`
  flex: 0 0 auto;
  width: ${({ isTouch }) => (isTouch ? "100%" : "400px")};
`;
const Dugong = styled.img`
  width: 250px;
  margin-bottom: 20px;
`;
const TagLine = styled.div`
  text-align: left;
  color: #252525;
  margin-bottom: 20px;
`;
const TagLineSpacer = styled.div`
  width: 280px;
  background: #ff5f5f;
  height: 3px;
  margin-top: 20px;
`;
const BulletPoints = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
  padding: ${({ isTouch }) => (isTouch ? "20px" : "0")};
  width: ${({ isTouch }) => (isTouch ? "100%" : "100%")};
  margin-top: ${({ isTouch }) => (isTouch ? "0" : "100px")};

  li {
    font-size: 20px;
    position: relative;
    :before {
      content: "";
      position: absolute;
      left: -16px;
      top: 9px;
      width: 8px;
      height: 8px;
      background: ${({ theme }) => theme.color.yellow.toString()};
    }
    margin-bottom: 10px;
  }
`;
const Point = styled.div``;
const Buttons = styled.div`
  display: flex;
`;
const HomeButton = styled(Button)`
  margin-right: 20px;
`;
const Section = styled.div`
  margin: auto;
  width: 400px;
`;

const Answer = styled.div`
  margin-bottom: 50px;
`;
const BelowHero = styled.div`
  margin: auto;
  padding: ${({ isTouch }) => (isTouch ? "20px" : "0")};
  width: ${({ isTouch }) => (isTouch ? "100%" : "1000px")};
`;
export default props => {
  const { user, auth, isTouch } = props;
  // emf , deep sleep, mitochrondrial, red light, grounding
  // My friend and I are putting together list of unheard of health products. If you are interested in EMF, deep sleep, mitochrondria, red light and grounding etc, quickly check us out. We would love your feedback!
  return (
    <Layout user={user} auth={auth} isTouch={isTouch}>
      <Head>
        <title>
          Anthro Generator - A directory of unheard health problem solutions
        </title>
        <meta
          name="title"
          content="Anthro Generator - A directory of unheard health problem solutions"
        />
        <meta
          name="description"
          content="My friend and I are putting together list of unheard of health products. If you are interested in EMF, deep sleep, mitochrondria, red light and grounding etc, quickly check us out. We would love your feedback!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anthrogenerator.com/" />
        <meta property="og:title" content="Anthro Generator" />
        <meta
          property="og:description"
          content="My friend and I are putting together list of unheard of health products. If you are interested in EMF, deep sleep, mitochrondria, red light and grounding etc, quickly check us out. We would love your feedback!"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://anthrogenerator.com/" />
        <meta property="twitter:title" content="Anthro Generator" />
        <meta
          property="twitter:description"
          content="My friend and I are putting together list of unheard of health products. If you are interested in EMF, deep sleep, mitochrondria, red light and grounding etc, quickly check us out. We would love your feedback!"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <HomeContainer>
        <Hero isTouch={isTouch} style={{ paddingTop: isTouch ? "40px" : "0" }}>
          <HeroLeft isTouch={isTouch}>
            <TagLine>
              <Title>Anthro Generator</Title>
              <TagLineSpacer />
            </TagLine>
            <Body>
              We are just two average Australian guys who grew up rural but now
              living in the big city of Melbourne, Australia. Dissatisfied with
              our own health and everything that is promoted, we decided to
              research as many alternative health related products as possible.
              <br />
              <br />
              We personally try to own the products listed, but if we don't, we
              feel like we've made a fair judgement based off comparisons,
              legitimacy and scientific backing. Regardless, if the product is
              not the best, we hope at least to educate people about the many
              potential hazardous impacts of modern life and cool solutions
              people have manufactured.
              <br />
              <br />
              We aren't affiliated with any of the listed products but have
              included our own Amazon referral link.
            </Body>
            <br />
            {false && (
              <Buttons>
                <HomeButton
                  onClick={() => {
                    Router.push("/signup");
                  }}
                >
                  SUGGESTIONS
                </HomeButton>
              </Buttons>
            )}
          </HeroLeft>
          {!isTouch && <HeroRight isTouch={isTouch}></HeroRight>}
        </Hero>
        {true && (
          <TagLine>
            <LessTitle>Research</LessTitle>
            <TagLineSpacer />
          </TagLine>
        )}

        {map(products, p => {
          console.log(p.Images);
          const rege = RegExp("https://.*((.*))", "g");
          if (!p.Images) {
            return null;
          }
          console.log(p.Images);
          const imgMatch = rege.exec(p.Images);
          if (!imgMatch) {
            return null;
          }
          console.log(imgMatch);
          const imgUrl = imgMatch[0].substr(0, imgMatch[0].length - 1);
          if (p.Description === "") {
            return null;
          }
          return (
            <ProductContainer>
              <ProductImage
                src={
                  "https://res.cloudinary.com/dx2clxwoo/image/fetch/w_400,c_fit,q_100,e_saturation:80/" +
                  imgUrl
                }
              />
              <ProductSection>
                <SubTitle>{p.Name}</SubTitle>
                <br />
                <Body>
                  <strong>Price: </strong>~{p.Price}
                </Body>
                <br />
                <Body>
                  <strong>Category: </strong>
                  {capitalize(p.Category)}
                </Body>
                <br />
                <Body
                  dangerouslySetInnerHTML={{ __html: marked(p.Description) }}
                ></Body>
                <br />
                <StyledLink href={p.Link + "&tag=anthrogenerat-20"} passHref>
                  Amazon
                </StyledLink>
              </ProductSection>
            </ProductContainer>
          );
        })}
      </HomeContainer>
    </Layout>
  );
};
