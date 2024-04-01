const Card_item = ({ Card_data }) => {
  //   console.table(Card_data);
  return (
    <>
      {Card_data.map((elem, i) => {
        const { name, img, review } = elem;
        return (
          <div className="relative h-[400px] w-[300px] rounded-md" key={i}>
            <img
              src={img}
              alt="image"
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{name}</h1>
              <p className="mt-2 text-sm text-gray-300">{review}</p>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                Read More &rarr;
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card_item;
