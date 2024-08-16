import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown ,MdOutlineKeyboardArrowUp } from "react-icons/md";

export const social1=[
    {
        id:1,
        icon:<AiOutlineMail/>,
        text:"sales@d4aon1ine.com"
    },
    {
        id:2,
        icon:<LuPhone/>,
        text:"+974 55658085"
    }
]
export const social2=[
    {
        id:1,
        icon:<FaLinkedinIn/>
    },
    {
        id:2,
        icon:<FaInstagram/>
    },
    {
        id:3,
        icon:<FaFacebookF/>
    },
    {
        id:4,
        icon:<TfiYoutube/>

    },
    {
        id:5,
        icon:<FaTwitter/>

    }
]
export const menu=[
    {
        id:1,
        link:"Home",
        
    },
    {
        id:2,
        link:"Vertical Solutions",
        icon:<MdOutlineKeyboardArrowDown/>,
        icon2:<MdOutlineKeyboardArrowUp/>,

        submenu:[
            {
                id:1,
                text:"Property Management"

            },
            {
                id:2,
                text:"Ready Mix Management"
            },
            {
                id:3,
                text:"People Management"
            }
        ]
       
    },
    {
        id:3,
        link:"Zoho",
        icon:<MdOutlineKeyboardArrowDown/>,
        icon2:<MdOutlineKeyboardArrowUp/>,
        submenu:[
            {
                id:1,
                text:"Zoho ERP"
                
            },
            {
                id:2,
                 text:"Zoho CRM"
            },
            {
                id:3,
                text:"Zoho Books"
            },
            {
                id:4,
                text:"Zoho People"
            },
            {
                id:5,
                text:"Zoho Recruit"
            },
            {
                id:6,
                text:"Zoho SalesIQ - Live chat"
            },

        ]
    },
    {
        id:4,
        link:"Monday.com",
        
    },
    {
        id:5,
        link:"Tally",
       
    },
    {
        id:6,
        link:"Our clinets",
        icon:<MdOutlineKeyboardArrowDown/>,
        icon2:<MdOutlineKeyboardArrowUp/>,
        submenu:[
            {
                id:1,
                text:"Client Testimonals"

            },
           
        ]
    },
    {
        id:7,
        link:"Contact",
        icon:<MdOutlineKeyboardArrowDown/>,
        icon2:<MdOutlineKeyboardArrowUp/>,
        submenu:[
            {
                id:1,
                text:"Our Team"

            },
            {
                id:2,
                text:"Careers"
            },
    
        ]
    },
    {
        id:8,
        link:"Events",
      
    }
]
export const footer=[
   {
    id:1,
    icon:<LuPhone/>,
    text:"+975 55658050"
   },
   {
    id:2,
    icon:<LuPhone/>,
    text:"+974 50110221"
   },
   {
    id:3,
    icon:<AiOutlineMail/>,
    text:"sales@d4aonline.com"
   },
   {
    id:4,
    icon:<AiOutlineMail/>,
    text:"support@d4aonline.com"
   }
]
