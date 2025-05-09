import React from "react";
import Card from "./Card";
import ava1 from '../assets/images/ava1.jpg'
import ava2 from '../assets/images/ava2.jpg'

const CardData = () => {
  const data = [
    {
      img: ava1,
      name: "Marcus Alejandro",
      rank: "Founder, CEO",
      socials: "molestias.",
    },
    {
      img: ava2,
      name: "Nicolas Raimond",
      rank: "Founder, CSO",
      socials: "molestias.",
    },
    {
        img: ava1,
        name: "Alex Thompson",
        rank: "Chief Technology Officer",
        socials: "molestias.",
      },
      {
        img: ava2,
        name: "Ceryl Bauman",
        rank: "Chief Financial Officer",
        socials: "molestias.",
      },
      {
        img: ava1,
        name: "Jane Phasel",
        rank: "Chief Marketing Officer",
        socials: "molestias.",
      },
      {
        img: ava2,
        name: "Jaques Dephan",
        rank: "Chief Analitics Officer",
        socials: "molestias.",
      },
      {
        img: ava1,
        name: "Maria Lopez",
        rank: "Chief Partnership Officer",
        socials: "molestias.",
      },
      {
        img: ava2,
        name: "Filip Petoup",
        rank: "Chief of Staff",
        socials: "molestias.",
      },
  ];
  return (
    <>
      <div className="m-auto grid w-[90%] grid-cols-1 gap-5 md:w-[75%] md:grid-cols-4 my-10">
        {data.map((value, index) => {
          return (
            <Card
              key={index}
              img={value.img}
              name={value.name}
              rank={value.rank}
              socials={value.socials}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardData;
