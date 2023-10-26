import { team } from '@/constants';

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 sm:px-20  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-xl px-4 mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">
          Meet our Team
        </h2>
      </div>
        <p className="font-light text-white mb-16">
          Our team is driven by a shared passion for innovation, creativity, and making a positive impact in the work we do. Get ready to meet the faces behind our collective vision, each of whom plays a vital role in shaping our success and making our projects come to life.
        </p>
      
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((team) => (
        <div
          key={team.index}
          className="relative border border-primary items-centerflex justify-center overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 focus:scale-110 hover:scale-110"
        >
          <img
            className="object-cover w-full h-80"
            src={team.imageUrl}
            alt="Team member"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-1 text-lg font-bold text-primary">
             {team.name}
            </p>
            <p className="mb-4 text-xs tracking-wide text-white">
              {team.description}
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Team;