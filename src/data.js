import { v4 as uuidv4 } from 'uuid';
import gpEco from "./assets/gp-eco.svg";
import fabindia from "./assets/fabindia.png";
import ola from "./assets/ola.png";
import bajaj from "./assets/bajaj.png";
import mobikwik from "./assets/mobikwik.png";
import oyo from "./assets/oyo.png";
import boat from "./assets/boat.png";

export const ipoData = [
  
  {
    id: uuidv4(),
    slug: "boat-ipo",
    img: boat,
    companyName: "boAt",
    organisation: "BoAt Private Limited",
    issueDate: "12th - 21th Dec 2023",
    issueSize: "₹8600 Crores",
    priceRange: "₹500-560",
    minInvest: "₹20,000",
    qty: "150 Shares/5 Lots",
    ipoDetails: [
      {
        title: "Issue Size",
        value: "₹8,600 - 8,900 Cr.",
      },
      {
        title: "Price range",
        value: "₹500 - 560",
      },
      {
        title: "Minimum amount",
        value: "₹20,000",
      },
      {
        title: "Lot size",
        value: "150 shares/lots",
      },
      {
        title: "Issue date",
        value: "12 Dec - 21 Dec 24",
      },
      {
        title: "Listed on",
        value: "21 Dec 23",
      },
      {
        title: "Listed price",
        value: "₹480",
      },
      {
        title: "Listed gains",
        value: "-₹20",
        percent: "-10.0%",
      },
    ],
    ipoTimeline: [
      {
        status: true,
        title: "Bidding starts",
        date: "12 Dec 2023",
      },
      {
        status: true,
        title: "Bidding ends",
        date: "15 Dec 2023",
      },
      {
        status: true,
        title: "Allotment Finalization",
        date: "18 Dec 2023",
      },
      {
        status: true,
        title: "Refund initialization",
        date: "18 Dec 2023",
      },
      {
        status: true,
        title: "Demat Transfer",
        date: "18 Dec 2023",
      },
      {
        status: true,
        title: "Listing Date",
        date: "21 Dec 2023",
      },
    ],
    aboutCompany:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur a veritatis mollitia, excepturi voluptates, rem vel expedita sapiente facilis esse neque dolore provident porro. Saepe explicabo perspiciatis maxime adipisci!</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nemo in omnis non est odit voluptatem tenetur quod doloribus dolores rem, asperiores autem quibusdam nihil reiciendis, expedita accusantium sed laborum? Dolorum ipsum aliquam est maiores veritatis quod officia consequatur inventore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsa quae voluptate saepe quisquam maiores rem corrupti nobis quasi.</p>",
  },

  {
    id: uuidv4(),
    slug: "oyo-ipo",
    img: oyo,
    companyName: "OYO",
    organisation: "OYO Private Limited",
    issueDate: "To be announced",
    issueSize: "₹360 Crores",
    priceRange: "₹129-136",
    minInvest: "₹14,190",
    qty: "100 Shares/5 Lots",
    ipoDetails: [
      {
        title: "Issue Size",
        value: "₹360 - 390 Cr.",
      },
      {
        title: "Price range",
        value: "₹129 - 136",
      },
      {
        title: "Minimum amount",
        value: "₹14,100",
      },
      {
        title: "Lot size",
        value: "100 shares/lots",
      },
      {
        title: "Issue date",
        value: "To be announced",
      },
      {
        title: "Listed on",
        value: "",
      },
      {
        title: "Listed price",
        value: "",
      },
      {
        title: "Listed gains",
        value: "",
        percent: "",
      },
    ],
    ipoTimeline: [
      {
        status: false,
        title: "Bidding starts",
        date: "12 Dec 2024",
      },
      {
        status: false,
        title: "Bidding ends",
        date: "15 Dec 2024",
      },
      {
        status: false,
        title: "Allotment Finalization",
        date: "18 Dec 2024",
      },
      {
        status: false,
        title: "Refund initialization",
        date: "18 Dec 2024",
      },
      {
        status: false,
        title: "Demat Transfer",
        date: "18 Dec 2024",
      },
      {
        status: false,
        title: "Listing Date",
        date: "21 Dec 2024",
      },
    ],
    aboutCompany:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur a veritatis mollitia, excepturi voluptates, rem vel expedita sapiente facilis esse neque dolore provident porro. Saepe explicabo perspiciatis maxime adipisci!</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nemo in omnis non est odit voluptatem tenetur quod doloribus dolores rem, asperiores autem quibusdam nihil reiciendis, expedita accusantium sed laborum? Dolorum ipsum aliquam est maiores veritatis quod officia consequatur inventore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsa quae voluptate saepe quisquam maiores rem corrupti nobis quasi.</p>",
  },

  {
    id: uuidv4(),
    slug: "gp-eco-ipo",
    img: gpEco,
    companyName: "GP Eco Solutions",
    organisation: "Gp Eco Sol. Private Limited",
    issueDate: "14th - 18th Oct 2023",
    issueSize: "₹300 Crores",
    priceRange: "₹50-60",
    minInvest: "₹15,000",
    qty: "90 Shares/5 Lots",
    ipoDetails: [
      {
        title: "Issue Size",
        value: "₹300 - 380 Cr.",
      },
      {
        title: "Price range",
        value: "₹50 - 60",
      },
      {
        title: "Minimum amount",
        value: "₹15,000",
      },
      {
        title: "Lot size",
        value: "25 shares/lots",
      },
      {
        title: "Issue date",
        value: "14 Oct - 18 Oct 23",
      },
      {
        title: "Listed on",
        value: "18 Oct 23",
      },
      {
        title: "Listed price",
        value: "₹130",
      },
      {
        title: "Listed gains",
        value: "₹80 ",
        percent: "142.0%",
      },
    ],
    ipoTimeline: [
      {
        status: true,
        title: "Bidding starts",
        date: "14 Dec 2023",
      },
      {
        status: true,
        title: "Bidding ends",
        date: "15 Dec 2023",
      },
      {
        status: true,
        title: "Allotment Finalization",
        date: "16 Dec 2023",
      },
      {
        status: true,
        title: "Refund initialization",
        date: "16 Dec 2023",
      },
      {
        status: true,
        title: "Demat Transfer",
        date: "16 Dec 2023",
      },
      {
        status: true,
        title: "Listing Date",
        date: "18 Dec 2023",
      },
    ],
    aboutCompany:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur a veritatis mollitia, excepturi voluptates, rem vel expedita sapiente facilis esse neque dolore provident porro. Saepe explicabo perspiciatis maxime adipisci!</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nemo in omnis non est odit voluptatem tenetur quod doloribus dolores rem, asperiores autem quibusdam nihil reiciendis, expedita accusantium sed laborum? Dolorum ipsum aliquam est maiores veritatis quod officia consequatur inventore?</p>",
  },

  {
    id: uuidv4(),
    slug: "fabindia-ipo",
    img: fabindia,
    companyName: "FabIndia",
    organisation: "FabIndia Private Limited",
    issueDate: "4th - 10th July 2024",
    issueSize: "₹2600 Crores",
    priceRange: "₹500-670",
    minInvest: "₹15,500",
    qty: "100 Shares/5 Lots",
    ipoDetails: [
      {
        title: "Issue Size",
        value: "₹2,600 - 2,900 Cr.",
      },
      {
        title: "Price range",
        value: "₹500 - 670",
      },
      {
        title: "Minimum amount",
        value: "₹15,500",
      },
      {
        title: "Lot size",
        value: "100 shares/lots",
      },
      {
        title: "Issue date",
        value: "4 July - 10 July 24",
      },
      {
        title: "Listed on",
        value: "10 july 24",
      },
      {
        title: "Listed price",
        value: "",
      },
      {
        title: "Listed gains",
        value: "",
        percent: "",
      },
    ],
    ipoTimeline: [
      {
        status: true,
        title: "Bidding starts",
        date: "4 July 2024",
      },
      {
        status: true,
        title: "Bidding ends",
        date: "5 July 2024",
      },
      {
        status: false,
        title: "Allotment Finalization",
        date: "6 July 2024",
      },
      {
        status: false,
        title: "Refund initialization",
        date: "6 July 2024",
      },
      {
        status: false,
        title: "Demat Transfer",
        date: "6 July 2024",
      },
      {
        status: false,
        title: "Listing Date",
        date: "10 July 2024",
      },
    ],
    aboutCompany:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur a veritatis mollitia, excepturi voluptates, rem vel expedita sapiente facilis esse neque dolore provident porro. Saepe explicabo perspiciatis maxime adipisci!</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nemo in omnis non est odit voluptatem tenetur quod doloribus dolores rem, asperiores autem quibusdam nihil reiciendis, expedita accusantium sed laborum? Dolorum ipsum aliquam est maiores veritatis quod officia consequatur inventore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsa quae voluptate saepe quisquamLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsa quae voluptate saepe quisquam</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsa quae voluptate saepe quisquam maiores rem corrupti nobis quasi.</p>",
  },

  {
    id: uuidv4(),
    slug: "ola-electric-ipo",
    img: ola,
    companyName: "Ola Electric",
    organisation: "Ola Private Limited",
    issueDate: "4th - 7th Nov 2023",
    issueSize: "₹5600 Crores",
    priceRange: "₹400-450",
    minInvest: "₹20,000",
    qty: "120 Shares/5 Lots",
    ipoDetails: [
      {
        title: "Issue Size",
        value: "₹5,600 - 5,900 Cr.",
      },
      {
        title: "Price range",
        value: "₹400 - 450",
      },
      {
        title: "Minimum amount",
        value: "₹20,000",
      },
      {
        title: "Lot size",
        value: "120 shares/lots",
      },
      {
        title: "Issue date",
        value: "4 Nov - 7 Nov 23",
      },
      {
        title: "Listed on",
        value: "7 Nov 23",
      },
      {
        title: "Listed price",
        value: "₹150",
      },
      {
        title: "Listed gains",
        value: "₹10 ",
        percent: "10.0%",
      },
    ],
    ipoTimeline: [
      {
        status: true,
        title: "Bidding starts",
        date: "4 Nov 2023",
      },
      {
        status: true,
        title: "Bidding ends",
        date: "5 Nov 2023",
      },
      {
        status: true,
        title: "Allotment Finalization",
        date: "6 Nov 2023",
      },
      {
        status: true,
        title: "Refund initialization",
        date: "6 Nov 2023",
      },
      {
        status: true,
        title: "Demat Transfer",
        date: "6 Nov 2023",
      },
      {
        status: true,
        title: "Listing Date",
        date: "7 Nov 2023",
      },
    ],
    aboutCompany:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur a veritatis mollitia, excepturi voluptates, rem vel expedita sapiente facilis esse neque dolore provident porro. Saepe explicabo perspiciatis maxime adipisci!</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nemo in omnis non est odit voluptatem tenetur quod doloribus dolores rem, asperiores autem quibusdam nihil reiciendis, expedita accusantium sed laborum? Dolorum ipsum aliquam est maiores veritatis quod officia consequatur inventore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsa quae voluptate saepe quisquamLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsa quae voluptate saepe quisquam</p>",
  },

  {
    id: uuidv4(),
    slug: "bajaj-energy-ipo",
    img: bajaj,
    companyName: "Bajaj Energy",
    organisation: "Bajaj Engery Private Limited",
    issueDate: "4th - 14th Oct 2022",
    issueSize: "₹3600 Crores",
    priceRange: "₹50-60",
    minInvest: "₹25,000",
    qty: "100 Shares/5 Lots",
    ipoDetails: [
      {
        title: "Issue Size",
        value: "₹3,600 - 4,000 Cr.",
      },
      {
        title: "Price range",
        value: "₹50 - 60",
      },
      {
        title: "Minimum amount",
        value: "₹25,000",
      },
      {
        title: "Lot size",
        value: "100 shares/lots",
      },
      {
        title: "Issue date",
        value: "4 Oct - 14 Oct 22",
      },
      {
        title: "Listed on",
        value: "14 Oct 22",
      },
      {
        title: "Listed price",
        value: "₹40",
      },
      {
        title: "Listed gains",
        value: "-₹10",
        percent: "-10.0%",
      },
    ],
    ipoTimeline: [
      {
        status: true,
        title: "Bidding starts",
        date: "4 Oct 2022",
      },
      {
        status: true,
        title: "Bidding ends",
        date: "6 Oct 2022",
      },
      {
        status: true,
        title: "Allotment Finalization",
        date: "10 Oct 2022",
      },
      {
        status: true,
        title: "Refund initialization",
        date: "10 Oct 2022",
      },
      {
        status: true,
        title: "Demat Transfer",
        date: "10 Oct 2022",
      },
      {
        status: true,
        title: "Listing Date",
        date: "14 Oct 2022",
      },
    ],
    aboutCompany:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur a veritatis mollitia, excepturi voluptates, rem vel expedita sapiente facilis esse neque dolore provident porro. Saepe explicabo perspiciatis maxime adipisci!</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nemo in omnis non est odit voluptatem tenetur quod doloribus dolores rem, asperiores autem quibusdam nihil reiciendis, expedita accusantium sed laborum? Dolorum ipsum aliquam est maiores veritatis quod officia consequatur inventore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsa quae voluptate saepe quisquamLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsa quae voluptate saepe quisquam</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsa quae voluptate saepe quisquam maiores rem corrupti nobis quasi.</p>",
  },

  {
    id: uuidv4(),
    slug: "mobikwik-ipo",
    img: mobikwik,
    companyName: "Mobikwik",
    organisation: "Mobikwik Private Limited",
    issueDate: "14th - 21th Aug 2022",
    issueSize: "₹5000 Crores",
    priceRange: "₹100-200",
    minInvest: "₹14,000",
    qty: "100 Shares/5 Lots",
    ipoDetails: [
      {
        title: "Issue Size",
        value: "₹5,000 - 5,900 Cr.",
      },
      {
        title: "Price range",
        value: "₹100 - 200",
      },
      {
        title: "Minimum amount",
        value: "₹14,000",
      },
      {
        title: "Lot size",
        value: "100 shares/lots",
      },
      {
        title: "Issue date",
        value: "14 Aug - 21 Aug 22",
      },
      {
        title: "Listed on",
        value: "15 Aug 22",
      },
      {
        title: "Listed price",
        value: "₹290",
      },
      {
        title: "Listed gains",
        value: "₹100 ",
        percent: "130%",
      },
    ],
    ipoTimeline: [
      {
        status: true,
        title: "Bidding starts",
        date: "14 Aug 2022",
      },
      {
        status: true,
        title: "Bidding ends",
        date: "15 Aug 2022",
      },
      {
        status: true,
        title: "Allotment Finalization",
        date: "18 Aug 2022",
      },
      {
        status: true,
        title: "Refund initialization",
        date: "18 Aug 2022",
      },
      {
        status: true,
        title: "Demat Transfer",
        date: "18 Aug 2022",
      },
      {
        status: true,
        title: "Listing Date",
        date: "21 Aug 2022",
      },
    ],
    aboutCompany:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur a veritatis mollitia, excepturi voluptates, rem vel expedita sapiente facilis esse neque dolore provident porro. Saepe explicabo perspiciatis maxime adipisci!</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nemo in omnis non est odit voluptatem tenetur quod doloribus dolores rem, asperiores autem quibusdam nihil reiciendis, expedita accusantium sed laborum? Dolorum ipsum aliquam est maiores veritatis quod officia consequatur inventore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsa quae voluptate saepe quisquam maiores rem corrupti nobis quasi.</p>",
  },
];
