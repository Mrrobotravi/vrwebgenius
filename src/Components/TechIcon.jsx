import IconName from "./AceternityUi/IconName";
import IconCloud from "./AceternityUi/UsedTech";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export function TechIcon() {
    return (
        <>


            <div className="dark:bg-neutral-950">
                <h1 className="dark:text-white text-4xl font-bold text-center pb-10 "> We are used Latest Technologi </h1>
                <div class="grid md:grid-cols-2 gap-2">
                    <div>
                        {/* <h1 className="dark:text-white text-4xl font-bold text-center pb-10 "> We are used Latest Technologi </h1> */}
                        <IconName />


                    </div>

                    <div className="justify-center">
                        <div className="relative bg-slate-100 md:ml-[80px] dark:bg-neutral-900   flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
                            <IconCloud iconSlugs={slugs} />
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}   
