import dayjs from "dayjs";

const Card = () => {
    const skills = ["React", "Javascript", "HTML", "CSS"];
    const date1 = dayjs(Date.now());
    const datediff = date1.diff('2024-01-01', 'day');

    return (
        <div className="mx-4 mb-4 md:mx-40">
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 lg:px-8 xl:px-10 py-4 bg-white rounded-md border border-black
            shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103 ">
                <div className="flex flex-col md:items-start gap-3">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">FrontEnd Developer- Amazon</h1>
                    <p className="text-sm md:text-base lg:text-lg">FullTime  &#x2022; Fresher  &#x2022;  In-Office  &#x2022;</p>
                    <div className="flex items-center gap-2 ">
                        {skills.map((skill, index) => (
                            <p key={index} className="text-gray-500 py-1 px-2 rounded-md border border-black">{skill}</p>
                        ))}
                    </div>
                </div>
                <div className="flex md:items-center gap-2 mt-4 md:mt-0">
                    <p className="text-gray-500 text-sm md:text-base">Posted {datediff} days ago</p>
                    <button className="text-blue-500 border border-blue-500 px-4 md:px-6 py-2 rounded-md">Apply</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
