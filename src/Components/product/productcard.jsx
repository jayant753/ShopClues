const Productcard = ({ image, name, price }) => {
  return (
    <div className="w-[320px] h-[400px] bg-white border-[#24A3B5] hover:border-2">
      <div className="flex justify-center">
        <img className="mt-8 w-[200px] h-[200px]" src={image} alt={name} />
      </div>
      <h2 className="text-[#555] text-[14px] mt-6 ml-2 mr-2">{name}</h2>
      <p className="text-[#212121] text-[18px] mt-4 ml-2 mr-2">{price}</p>
    </div>
  );
};

export default Productcard;
