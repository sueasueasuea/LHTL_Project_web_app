import Logo from "../assets/images/Learning-How-to-Learn-Logo.png";

const Root = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-4 p-4 bg-white">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            width={70}
            height={70}
            className="object-contain rounded-full"
            alt="Learning How to Learn Logo"
          />
          <h1>Learning How to Learn</h1>
        </div>
      </div>
    </>
  );
};

export default Root;
