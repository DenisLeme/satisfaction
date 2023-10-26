import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const SatisfacaoForm = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: React.SetStateAction<number>) => {
    setRating(newRating);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(`Avaliação: ${rating}`);
  };

  return (
    <section className='w-full h-screen'>
      <div className="h-[250px] w-full flex items-center justify-center bg-slate-900">

        <div className='w-full flex self-center justify-center'>
          <div className=' w-3/5 flex '>
            <h1 className="text-[40px] font-semibold text-white">Pesquisa de Satisfação</h1>
          </div>
        </div>
      </div>
      <div className='w-full flex self-center justify-center'>
        <div className='bg-white w-3/5 mt-[-96px] flex self-center rounded-[16px]'>
          <form>
            <div className='flex flex-col whitespace-nowrap items-center justify-center'>
              <span>
              texto
              </span>
              <StarRatings
                rating={rating}
                starRatedColor="gold"
                starEmptyColor="lightgray"
                starHoverColor="gold"
                starDimension="60px"
                starSpacing="6px"
                changeRating={handleRatingChange}
                numberOfStars={5}
                name="rating"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SatisfacaoForm;
