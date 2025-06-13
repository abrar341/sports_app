function DevicePreview() {
  return (
    <div className=" w-full px-4 sm:px-0 flex justify-center items-center">
      {/* Desktop/Tablet Preview */}
      <div className=" w-[450px] -mt-[7px] sm:-mt-[0px] -mr-[20px] md:-mr-[0px] ">
        <img
          src="/assets/Background2.png"
          alt="Desktop Application Preview"
          className="w-full h-full object-contain rounded-[13px] "
        />
      </div>

      {/* Mobile Preview (Overlapping Tablet) */}
      <div className=" -mt-[25px] -ml-[20px] md:-ml-[40px]  w-[200px]  flex justify-center items-center">
        <img
          src="/assets/Background1.png"
          alt="Mobile Application Preview"
          className="  object-contain "
        />

        {/* Simulated Notch */}
        {/* <div className="absolute top-[27px] left-[147px] w-[94px] h-[26px] bg-black/60 rounded-full"></div> */}
      </div>
    </div>
  );
}

export default DevicePreview;
