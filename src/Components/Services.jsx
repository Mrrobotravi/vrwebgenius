import { HoverEffect } from "./AceternityUi/card-hover-effect";

export default function Services() {
    return (
        (<div className="dark:bg-neutral-950">  <div className="  mx-auto px-8">
            <HoverEffect items={projects} />
        </div> </div>)
    );
}
export const projects = [
    {
        title: "Website Development",
        description:
            "Design and develop custom websites tailored to clients' needs and specifications using the latest web technologies and best practices.",
        // link: "https://stripe.com",
    },
    {
        title: "Responsive Web Design",
        description:
            "Delivering a seamless and consistent user experience across desktops, tablets, and smartphones.",
        // link: "https://netflix.com",
    },
    {
        title: "Application Development",
        description:
            "Design and develop interactive and dynamic web applications, such as customer portals, dashboards, and booking systems, to streamline business processes and enhance user productivity.",
        // link: "https://google.com",
    },
    {
        title: "Back-end Development",
        description:
            "Build scalable and efficient server-side applications and APIs using Node.js and MongoDB, ensuring seamless data management and processing..",
        // link: "https://meta.com",
    },
    {
        title: "Content Management System",
        description:
            "Customize and implement CMS platforms like WordPress or create bespoke CMS solutions to empower clients to manage their website content easily.",
        // link: "https://amazon.com",
    },
    {
        title: "Maintenance & Support",
        description:
            "Provide ongoing maintenance, updates, and technical support services to ensure websites and applications remain secure, functional, and up-to-date.",
        // link: "https://microsoft.com",
    },
    ,
    {
        title: "E-commerce Solutions",
        description:
            "evelop secure and feature-rich e-commerce websites and applications, integrating payment gateways, shopping carts, and inventory management systems.",
        // link: "https://meta.com",
    },
    {
        title: "Optimization",
        description:
            "Optimize website performance by implementing techniques such as code minification, image compression",
        // link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        // link: "https://microsoft.com",
    },
];

