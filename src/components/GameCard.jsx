import React from "react";

const GameCard = ({logo, name, points}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <article className="h-[60px] w-[60px] rounded-full overflow-hidden">
        <img
          src={logo}
          alt={name}
          className="h-full w-full object-contain"
        />
      </article>
      <p>{name}</p>
      <p>{points}</p>
    </div>
  );
};

export default GameCard;
