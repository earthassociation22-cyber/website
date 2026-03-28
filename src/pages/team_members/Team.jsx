import React from "react";
import { teamMembers } from "../../assets/Members/members";
import { useGallery } from "../../context/GalleryContext";


const Team = () => {
    const { openImage } = useGallery();

  return (
    <main className="my-[65px] px-10">
      <section className="max-w-[1140px] mx-auto p-2.5 mt-20 mb-8 text-[18px] text-center text-black font-raleway min-h-[90vh]">
        <h2 className="font-bebas text-[45px] tracking-[1px] font-bold mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white"
              onClick={() =>
                openImage(
                  member.image,
                  teamMembers.map((p) => p.image)
                )
              }
            >
              <img
                className="w-full h-64 object-cover object-top"
                src={member.image}
                alt={member.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{member.name}</div>
                <p className="text-gray-700 text-base">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Team;
