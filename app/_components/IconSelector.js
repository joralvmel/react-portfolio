import AIIcon from "@/app/_components/icons/AIIcon";
import AndroidIcon from '@/app/_components/icons/AndroidIcon'
import APIIcon from "@/app/_components/icons/APIIcon";
import AngularIcon from "@/app/_components/icons/AngularIcon";
import BitbucketIcon from "@/app/_components/icons/BitbucketIcon";
import CPlusPlusIcon from "@/app/_components/icons/CPlusPlusIcon";
import CSSIcon from "@/app/_components/icons/CSSIcon";
import DatabaseIcon from '@/app/_components/icons/DatabaseIcon'
import DotNetIcon from "@/app/_components/icons/DotNetIcon";
import EJSIcon from "@/app/_components/icons/EJSIcon";
import ExcelIcon from "@/app/_components/icons/ExcelIcon";
import FigmaIcon from "@/app/_components/icons/FigmaIcon";
import FirebaseIcon from "@/app/_components/icons/FirebaseIcon";
import FormsIcon from "@/app/_components/icons/FormsIcon";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import HtmlIcon from "@/app/_components/icons/HtmlIcon";
import JavaIcon from "@/app/_components/icons/JavaIcon";
import JavaScriptIcon from "@/app/_components/icons/JavaScriptIcon";
import JiraIcon from "@/app/_components/icons/JiraIcon";
import JqueryIcon from "@/app/_components/icons/JqueryIcon";
import MatlabIcon from "@/app/_components/icons/MatlabIcon";
import MiroIcon from "@/app/_components/icons/MiroIcon";
import MongoDBIcon from "@/app/_components/icons/MongoDBIcon";
import NextAuthIcon from "@/app/_components/icons/NextAuthIcon";
import NextjsIcon from "@/app/_components/icons/NextjsIcon";
import NodejsIcon from "@/app/_components/icons/NodejsIcon";
import NpmTechIcon from "@/app/_components/icons/NpmTechIcon";
import PHPIcon from "@/app/_components/icons/PHPIcon";
import PostmanIcon from "@/app/_components/icons/PostmanIcon";
import PowerBIIcon from "@/app/_components/icons/PowerBIIcon";
import PowerPointIcon from "@/app/_components/icons/PowerPointIcon";
import PrinterIcon from "@/app/_components/icons/PrinterIcon";
import PythonIcon from "@/app/_components/icons/PythonIcon";
import ReactIcon from "@/app/_components/icons/ReactIcon";
import ReactQueryIcon from "@/app/_components/icons/ReactQueryIcon";
import RechartsIcon from "@/app/_components/icons/RechartsIcon";
import ReduxIcon from "@/app/_components/icons/ReduxIcon";
import SCSSIcon from "@/app/_components/icons/SCSSIcon";
import SolidworksIcon from "@/app/_components/icons/SolidworksIcon";
import SpringIcon from "@/app/_components/icons/SpringIcon";
import StyledComponentsIcon from "@/app/_components/icons/StyledComponentsIcon";
import SupabaseIcon from "@/app/_components/icons/SupabaseIcon";
import SwaggerIcon from "@/app/_components/icons/SwaggerIcon";
import TailwindIcon from "@/app/_components/icons/TailwindIcon";
import TkIcon from "@/app/_components/icons/TkIcon";
import TypescriptIcon from "@/app/_components/icons/TypeScriptIcon";
import UltimakerCuraIcon from "@/app/_components/icons/UltimakerCuraIcon";
import VexcodeIcon from "@/app/_components/icons/VexcodeIcon";
import WordIcon from "@/app/_components/icons/WordIcon";

const IconSelector = ({ tech }) => {
  switch (tech) {
    case "AI":
      return <AIIcon />;
    case "Android":
      return <AndroidIcon />;
    case "Angular":
      return <AngularIcon />;
    case "API":
      return <APIIcon />;
    case "Bitbucket":
      return <BitbucketIcon />;
    case "C++":
      return <CPlusPlusIcon />;
    case "CSS":
      return <CSSIcon />;
    case "Database":
      return <DatabaseIcon />;
    case "MatLab":
      return <MatlabIcon />;
    case ".NET":
      return <DotNetIcon />;
    case "EJS":
      return <EJSIcon />;
    case "Microsoft Excel":
      return <ExcelIcon />;
    case "Figma":
      return <FigmaIcon />;
    case "Firebase":
      return <FirebaseIcon />;
    case "Google Forms":
      return <FormsIcon />;
    case "Github":
      return <GithubIcon />;
    case "HTML":
      return <HtmlIcon />;
    case "Java":
      return <JavaIcon />;
    case "JavaScript":
      return <JavaScriptIcon />;
    case "Jira":
      return <JiraIcon />;
    case "jQuery":
      return <JqueryIcon />;
    case "Miro":
      return <MiroIcon />;
    case "MongoDB":
      return <MongoDBIcon />;
    case "NextAuth":
      return <NextAuthIcon />;
    case "Next.js":
      return <NextjsIcon />;
    case "Node.js":
      return <NodejsIcon />;
    case "Npm":
      return <NpmTechIcon />;
    case "PHP":
      return <PHPIcon />;
    case "Postman":
      return <PostmanIcon />;
    case "Microsoft PowerBI":
      return <PowerBIIcon />;
    case "Microsoft Power Point":
      return <PowerPointIcon />;
    case "3D Printing":
      return <PrinterIcon />;
    case "Python":
      return <PythonIcon />;
    case "React":
      return <ReactIcon />;
    case "React Query":
      return <ReactQueryIcon />;
    case "Recharts":
      return <RechartsIcon />;
    case "Redux":
      return <ReduxIcon />;
    case "Robotics":
      return <VexcodeIcon />;
    case "SCSS":
      return <SCSSIcon />;
    case "Solidworks":
      return <SolidworksIcon />;
     case "Spring":
      return <SpringIcon />;
    case "Styled Components":
      return <StyledComponentsIcon />;
    case "Supabase":
      return <SupabaseIcon />;
    case "Swagger":
        return <SwaggerIcon />;
    case "Tailwind CSS":
      return <TailwindIcon />;
    case "Tkinter":
      return <TkIcon />;
    case "TypeScript":
      return <TypescriptIcon />;
    case "UltiMaker Cura":
      return <UltimakerCuraIcon />;
    case "VEXcode VR":
      return <VexcodeIcon />;
    case "Microsoft Word":
      return <WordIcon />;
    default:
      return null;
  }
};

export default IconSelector;
