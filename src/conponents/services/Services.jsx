import "./Services.css";
import SingleService from "./SingleService";
import { VscBook } from "react-icons/vsc";
import { FiMonitor } from "react-icons/fi";
import { TbMessagesOff } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";
export const servicesData = [
  {
    id: "1",
    title: "Web Development",
    content:
      "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
    icon: <FiMonitor />,
  },
  {
    id: "2",
    title: "UI/UX Design",
    content:
      "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
    icon: <VscBook />,
  },
  {
    id: "3",
    title: "Digital Marketing",
    content:
      "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
    icon: <TbMessagesOff />,
  },
  {
    id: "4",
    title: "Brand Design",
    content:
      "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
    icon: <HiOutlineMailOpen />,
  },
];
const Services = () => {
  return (
    <div className="container services">
      <h1>
        We're always ready <br /> for <span>challenges.</span>
      </h1>
      <div className="all-services">
        {servicesData && servicesData.map((service) => <SingleService key={service.id} title={service.title} content={service.content} icon={service.icon}/>)}
      </div>
    </div>
  );
};

export default Services;
