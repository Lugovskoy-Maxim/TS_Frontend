import { Users } from "lucide-react";
import { team } from "@/constants/about";

const AboutTeamSection = () => {
  return (
    <section className="mb-16 h-max">
      <h2 className="text-3xl font-bold text-center mb-12">
        Руководство компании
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="text-center bg-white dark:bg-muted/50 p-4 shadow-md h-full" 
          >
            <div className="w-[250px] h-[250px] bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-full w-12 text-gray-400" />
            </div>
            <div className="flex flex-col justify-between h-[150px]">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">
                {member.position}
              </p>
              <p className="text-sm text-gray-500">{member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeamSection;
